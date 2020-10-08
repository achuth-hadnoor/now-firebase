import { useAuth } from "hooks/auth";

const Slate = ({id})=>{
    const {signout} = useAuth()
    return (
        <>
         {id} 
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