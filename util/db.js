import { fuego } from "@nandorojo/swr-firestore"

export const getUser = async (uid, data)=>{
    let doc = await  fuego.db.doc(`users/`+uid).get()
    if(doc.exists){
        return  
    }
  return  await fuego.db.collection(`users`).doc(uid).set({uid,...data});
    
}