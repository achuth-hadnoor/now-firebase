import { fuego } from "@nandorojo/swr-firestore"

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
    };
};

export const getUser = async (uid, data) => {
    let doc = await fuego.db.doc(`users/${uid}`).get()
    if (doc.exists) {  
        return doc.data();
    }
    let user = await formatUser({uid,...data});
    await fuego.db.collection(`users`).doc(uid).set(user)
    return user
}

export const CreateSlate = (user, name) => {
    return new Promise(async(resolve,reject)=>{
        var x =  await fuego.db.collection('slate').add({
            name,
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