import { useState } from "react";
import styled from "styled-components";

export const Bubble = ({ BubbleIcon, BubbleItem }) => {
    const [open, setOpen] = useState(false);
    return (
        <BubbleWrapper  
            tabIndex={0}
            onClick={() => {
                setOpen(!open);
            }}>
            <BubbleIcon />
            {
                open && <div 
                            style={{position:'absolute',height:'100%',width:'100%',top:0,left:0}}  
                            onClick={() => {
                                setOpen(false);
                            }} >
                    <BubbleItem />
                </div> 
            }
        </BubbleWrapper>
    )
}

const BubbleWrapper = styled.span`
    margin:0px 10px;
    outline:none;
`;