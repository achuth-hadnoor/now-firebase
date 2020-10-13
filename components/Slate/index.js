import { useAuth } from "@/lib/auth";
import { useDocument } from "@nandorojo/swr-firestore";
import { Router } from "next/router";
import { IconValue as Icon } from '@/components/styles'
import { share2, chevronsUp, moreHorizontal } from "react-icons-kit/feather";
import { Bubble } from "../Bubble";
import { BubbleItem, BubbleWrapper } from "../Header/elements";
import { useEffect, useState } from "react";

export default function Slate() {
    const auth = useAuth();
    const { data: slate, error, loading } = useDocument(`slate/` + auth.user.slate, { listen: true });
    const [edit, setEdit] = useState('');
    const [slateVal, setSlateVal] = useState('');
    const InpRef = React.createRef(); 

    if (error) {
        Router.redirect('/');
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
                            ref={InpRef}
                        />: 
                        <span style={{ maxWidth: '200px', width: '100%', fontSize: 18 }}
                            onClick={()=>{
                                setEdit(!edit); 
                                setSlateVal(slate.name); 
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
