import styled from "styled-components";
import { useState } from "react";

const Bubble = ({ Icon, Body ,...restProps}) =>{
    const [bubble, setBubble] = useState(true);
    return (
    <div 
        onClick={()=>{setBubble(!bubble)}} 
        onBlur={()=>{setBubble(!bubble)}} 
        {...restProps}>
        <Icon /> 
        { bubble && <BubbleWrapper>
            <Body />
        </BubbleWrapper>}
    </div>
)};
export default Bubble;


const BubbleWrapper = styled.ul`
    list-style:none;
    position: absolute;
    top: 50px;  
    background: #fff;
    color:#444; 
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,.05);
    border-radius: 10px;
    opacity:0;
    animation: gztygP 0.16s 0.3s ease-in-out forwards;
    font-size:16px;
    padding:0;
    margin:0;
    width:250px;
    overflow:hidden; 
    z-index:999;
    `;

export const BubbleItem = styled.li`
    align-items:center;
    cursor:pointer;
    padding: 10px;
    display:flex;
    &:hover{
        background:#121212;
    }
    border-bottom:1px solid #f1f1f1;
`;

/*
bubble usage

<Bubble 
            Icon={(props)=>(
                <img src={user.photoUrl} height="30px" width="30px" style={{borderRadius:'25px'}} tabIndex={0} />
            )}

            Body ={()=>(
                <>
                    <BubbleItem>
                         <img src={user.photoUrl} height="30px" width="30px" style={{borderRadius:'25px'}}/>
                        <div className="info">
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                        </div>
                        <style>{`
                                .info { 
                                    padding:0px 5px 
                                }
                                .info p {  
                                    margin:0;
                                    font-size: 13px;
                                    white-space: nowrap;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                }
                        `}</style>
                    </BubbleItem>
                    <BubbleItem onClick={() => { alert('lol') }}>
                        <Icon style={{ padding: '0px 3px' }} icon={settings} /> Settings
                    </BubbleItem>
                    <BubbleItem >
                        <Icon style={{ padding: '0px 3px ' }} icon={command} /> Keyboard Shortcuts
                    </BubbleItem>
                    <BubbleItem >
                        <Icon style={{ padding: '0px 3px ' }} icon={mail} /> Contact Us
                    </BubbleItem>
                    <BubbleItem onClick={signOut}>
                        <Icon style={{ padding: '0px 3px ' }} icon={power} />Logout
                    </BubbleItem>
                    <BubbleItem>
                        <div className="info">
                            <p>sample</p>
                            <p>test</p>
                        </div>
                    </BubbleItem>
                </>
            )}
        />
        
*/