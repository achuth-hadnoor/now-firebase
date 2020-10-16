import { useAuth } from "@/lib/auth";
import { useDocument } from "@nandorojo/swr-firestore";

import { IconValue as Icon } from '@/components/styles'
import { share2, chevronsUp, moreHorizontal } from "react-icons-kit/feather";
import { Bubble } from "../Bubble";
import { BubbleItem, BubbleWrapper } from "../Header/elements";
import { useState } from "react";

export default function Slate() {

    const [edit, setEdit] = useState('');
    const [slateVal, setSlateVal] = useState('');
    
    const auth = useAuth();
    const { data, error, loading , update } = useDocument(`slate/` + auth.user.slate, { listen: true });

    if(loading){
        return(
            <div>Loading...</div>
        )
    }

    if (error) {
      return ( <div>Create New Slate</div>)
    }  
    
    return (
        <div style={{ flex: 1, margin: '0px 10px' }}>
            {
                loading ? null : <>
                    <Icon icon={chevronsUp} />
                   {edit ? 
                        <input 
                            style={{fontSize:18,background:'transparent',color:'#f8f8f8',border:'none',outline:'none'}}
                            value={slateVal} 
                            tabIndex="0"
                            onBlur={()=>{setEdit(!edit)}}
                            onChange={(e)=>{
                                setSlateVal(e.target.value);
                            }} 
                        />: 
                        <span style={{ maxWidth: '200px', width: '100%', fontSize: 18 }}
                            onClick={()=>{
                                setEdit(!edit); 
                                setSlateVal(data.name); 
                            }}
                        >
                            {slate.name}
                        </span>
                   } 
                   <Bubble
                        BubbleIcon={() => <Icon icon={moreHorizontal} />}
                        BubbleItem={() => <BubbleWrapper><BubbleItem>yo</BubbleItem></BubbleWrapper>}
                    /> 
                    <Icon icon={share2} />
                </>
            }
        </div>

    )
}
