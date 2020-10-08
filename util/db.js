import { fuego } from "@nandorojo/swr-firestore"

export const getUser = async (uid, data) => {
    let doc = await fuego.db.doc(`users/${uid}`).get()
    if (doc.exists) {
        return
    }
    return await fuego.db.collection(`users`).doc(uid).set({ uid, ...data })
}

export const CreateSlate = async (user, name) => {
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
    return x.id;
}