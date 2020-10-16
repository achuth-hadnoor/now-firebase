import Link from 'next/link'
import Router  from 'next/router';
import styled from 'styled-components';
import { useState } from 'react';
const CustomLink = ({children,...props})=>{
    const [active,setActive] = useState(false);
    if(Router.pathname === props.href){
        setActive(true);
    } 
    return (
    <Clink {...props} active={active}>
        <a>
            {children}
        </a>
    </Clink>
)}

export default CustomLink;
const Clink = styled(Link)`
        background:${props=>props.active ? '#121212' : '#f8f8f8' }
`