import { fuego } from '@nandorojo/swr-firestore';
// import getStripe from './stripe';

const getStripeRole = async () => {
  await fuego.auth().currentUser.getIdToken(true);
  const decodedToken = await fuego.auth().currentUser.getIdTokenResult();

  return decodedToken.claims.stripeRole || 'free';
};

const formatUser = async (user) => {
  return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      token: user.xa,
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL,
      darkmode: false,
      stripeRole: await getStripeRole(),
      slate: null
  };
};

const formatSlate = async (slate) => {
  return {
    createdAt: slate.createdAt,
    uid: slate.uid,
    exists: slate.exists,
    id: slate.id,
    lock: slate.lock,
    members: slate.members,
    name: slate.name,
    private: slate.private
  }
}

export const getUser = async (uid, data) => {
  let doc = await fuego.db.doc(`users/${uid}`).get();
  if (doc.exists) {  
    let data = doc.data();
    return data;
  }
  let user = await formatUser({uid,...data});
  await fuego.db.collection(`users`).doc(uid).set(user);
  return user
}

export const CreateSlate = (user, name) => {
  return new Promise(async(resolve,reject)=>{
      var x =  await fuego.db.collection('slate').add({
          name,
          uid: user.uid,
          members: [{
              name: user.name,
              email: user.email,
              photoUrl: user.photoUrl
          }],
          createdAt: new Date().toISOString(),
          private: false,
          lock: false
      })
      resolve(x.id);
  })
}

export async function deleteSite(id) {
  fuego.db.collection('sites').doc(id).delete();
  const snapshot = await fuego.db
    .collection('feedback')
    .where('siteId', '==', id)
    .get();

  const batch = fuego.db.batch();

  snapshot.forEach((doc) => {
    batch.delete(doc.ref);
  });

  return batch.commit();
}

export async function updateSlate(id, slate) {
  const updatedSlate = await formatSlate(slate);
  return fuego.db.collection('slate').doc(id).update(updatedSlate);
}

export function createFeedback(data) {
  return fuego.db.collection('feedback').add(data);
}

export function deleteFeedback(id) {
  return fuego.db.collection('feedback').doc(id).delete();
}

export function updateFeedback(id, newValues) {
  return fuego.db.collection('feedback').doc(id).update(newValues);
}

// export async function createCheckoutSession(uid) {
//   const checkoutSessionRef = await firestore
//     .collection('users')
//     .doc(uid)
//     .collection('checkout_sessions')
//     .add({
//       price: process.env.NEXT_PUBLIC_PRICE_ID,
//       allow_promotion_codes: true,
//       success_url: window.location.origin,
//       cancel_url: window.location.origin
//     });

//   checkoutSessionRef.onSnapshot(async (snap) => {
//     const { sessionId } = snap.data();

//     if (sessionId) {
//       const stripe = await getStripe();

//       stripe.redirectToCheckout({ sessionId });
//     }
//   });
// }

export async function goToBillingPortal() {
  const functionRef = app
    .functions('us-central1')
    .httpsCallable('ext-firestore-stripe-subscriptions-createPortalLink');

  const { data } = await functionRef({
    returnUrl: `${window.location.origin}/account`
  });

  window.location.assign(data.url);
}