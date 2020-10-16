import { useAuth } from "@/lib/auth";
import { useDocument } from "@nandorojo/swr-firestore";

import { IconValue as Icon } from '@/components/styles'
import { share2, chevronsUp, moreHorizontal } from "react-icons-kit/feather";
import { Bubble } from "../Bubble";
import { BubbleItem, BubbleWrapper } from "../Header/elements";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";
import Block  from "../Block";

export default function Slate() {
    const cntRef = React.createRef(); 
    const [slateVal, setSlateVal] = useState('');

    const auth = useAuth();
    const { data: slate, error, loading, update } = useDocument(`slate/` + auth.user.slate, { listen: true });

    useEffect(() => {
        if (slate !== undefined && slateVal === '') {
            setSlateVal(slate.name);
            cntRef.current.focus()
        }
    }, [slate, slateVal,cntRef])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return (<div>Create New Slate</div>)
    }

    return (
        <div style={{ flex: 1, margin: '0px 10px' }}>
            {
                loading ? null : <>
                    <Icon icon={chevronsUp} /> 
                    <SlateInput 
                        innerRef={cntRef}
                        html={slateVal} // innerHTML of the editable div
                        disabled={false}       // use true to disable editing
                        onChange={(e) => {
                            if(e.target.value === ''){
                                return setSlateVal('Enter Stale Name');
                            }
                            setSlateVal(e.target.value);
                        }}
                        tagName='span' // Use a custom HTML tag (uses a div by default)
                    />
                    <Bubble
                        BubbleIcon={() => <Icon icon={moreHorizontal} />}
                        BubbleItem={() => <BubbleWrapper><BubbleItem>yo</BubbleItem></BubbleWrapper>}
                    />
                    <Icon icon={share2} />
                    <Block slate={slate.id}/>
                </>
            }
        </div>
    )
}


const SlateInput = styled(ContentEditable)`
    font-size:18px;
    border:none;
    outline:none;
    flex-grow:1
`;