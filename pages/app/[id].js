const Slate = ({id})=>{
    return (
        <>
         {id}
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