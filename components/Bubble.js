import { useState } from "react";

export const Bubble = ({ BubbleIcon, BubbleItem }) => {
    const [open, setOpen] = useState(false);
    return (
        <span 
            style={{ margin: '0px 10px', outline: 'none'}} 
            tabIndex={0}
            onBlur={() => {
                setOpen(false);
            }} onClick={() => {
                setOpen(!open);
            }}>
            <BubbleIcon />
            {
                open && <BubbleItem />
            }
        </span>
    )
}