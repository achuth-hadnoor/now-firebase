import { useAuth } from "@/lib/auth";
import { useDocument, useCollection } from "@nandorojo/swr-firestore";

import { IconValue as Icon } from '@/components/styles'
import { share2, chevronsUp, moreHorizontal } from "react-icons-kit/feather";
import { Bubble } from "../Bubble";
import { BubbleItem, BubbleWrapper } from "../Header/elements";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ContentEditable from "react-contenteditable";
import Block from "../Block";
import { updateSlate } from "@/lib/db";
import CustomModal from "@/components/CustomModal";
import { theme } from "rich-markdown-editor";
import CustomLink from '@/components/Link';
import Router from "next/router";

export default function Slate() {
    const cntRef = React.createRef();

    const [slateVal, setSlateVal] = useState('');
    const [slatesModalOpen, setSlatesModalOpen] = useState(false);

    const auth = useAuth();
    const { data: slate, error, loading, update } = useDocument(`slate/` + auth.user.slate, { listen: true });

    let timeout = null;

    const saveSlate = () => {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            let text = cntRef.current.textContent;
            if (text === '') {
                return setSlateVal('Enter Stale Name');
            }
            setSlateVal(text);
            console.log(text);
            slate.name = text;
            updateSlate(slate.id, slate);
        }, 1000);
    }

    useEffect(() => {
        if (slate !== undefined && slate.exists) {
            setSlateVal(slate.name);
            cntRef.current.focus();
        }
    }, [slate, slateVal, cntRef])

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (error) {
        return (<div>Create New Slate</div>)
    }

    return (
        <div style={{ flex: 1, margin: '0px 10px', textAlign: 'center' }}>
            <Slates isOpen={slatesModalOpen} closeModal={() => setSlatesModalOpen(!slatesModalOpen)} />
            <Icon icon={chevronsUp} onClick={() => setSlatesModalOpen(!slatesModalOpen)} />
            <SlateInput
                innerRef={cntRef}
                html={slateVal} // innerHTML of the editable div
                disabled={false}
                tagName='span' // Use a custom HTML tag (uses a div by default)
                onKeyUp={saveSlate}
            />
            <Bubble
                BubbleIcon={() => <Icon icon={moreHorizontal} />}
                BubbleItem={() => <BubbleWrapper><BubbleItem>yo</BubbleItem></BubbleWrapper>}
            />
            <Icon icon={share2} />
            <Block slate={slate.id} />

        </div>
    )
}


const SlateInput = styled(ContentEditable)`
    font-size:18px;
    border:none;
    outline:none;
    flex-grow:1
`;


export const Slates = ({ isOpen, closeModal }) => {
    const auth = useAuth();
    const { data } = useCollection('slate', {
        listen: true,
        where: ['uid', '==', auth.user.uid]
    });

    const onClick = async (id) => {
        auth.user.slate  = id; 
        await auth.updateUser(auth.user);
        closeModal(!isOpen);
    }

    return (
        <CustomModal isOpen={isOpen} closeModal={closeModal}>
            <ModalWrapper>
                {data && data.map((t, i) => {
                    return (
                        <ModalItem onClick={() => onClick(t.id)}>
                            {t.name}
                        </ModalItem>
                    )
                })}
            </ModalWrapper>
        </CustomModal>
    )
}

const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    width: 100%;
`;

const ModalItem = styled.div`
    margin: 10px 0px;
    font-size: 16px;
    padding: 2px 5px;
    border-bottom: 1px groove ${({theme})=>theme.colors.primary};
    cursor: pointer;
`;