import { useState, useEffect } from "react";
import { useDocument } from "@nandorojo/swr-firestore";
import { useAuth } from "hooks/auth"; 
import {Header} from '../../../components'
const Slate = ({id})=>{
    const {signout} = useAuth();
    const {data, error,update} = useDocument(`slate/${id}`);
    if(!data || error) return <>You Donot have access to this page or it appears to be missing </>; 
    const [slate, setSlate] = useState(data.name)
    return (
        <> 
         <Header/>
         <input value={slate} onChange={(e)=>{setSlate(e.target.value)}}/> 
         <button onClick={()=>{signout()}}>Sign Out</button>
        </>
    )
}
Slate.getInitialProps = (ctx)=>{
    const {query} = ctx ; 
    return{
        id:query.id
    }
}
export default  Slate