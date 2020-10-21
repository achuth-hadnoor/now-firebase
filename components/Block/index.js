import { useCollection } from "@nandorojo/swr-firestore";
import Editor from "./editor";

const Block = ({ slate }) => {
    const { data, error, loading } = useCollection(`blocks`, { where: ['slate', '==', slate] });
    if (error) {
        return (<div>failed to load data</div>)
    }
    if (loading) {
        return <div>loading.....</div>
    }
    console.log(data);
    return (
        <div 
            style={{
                display:'flex',
                boxShadow:'0px 0px 10px 0px rgba(0,0,0,.2)',
                margin:'5px'
        }}>
        {
            data.map((d,i)=><Editor blockId={d.id} key={d.id} index={d.id}/>)
        }
        </div>
    )
}

export default Block;