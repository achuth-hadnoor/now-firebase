import { useAuth } from "hooks/auth";
import Bubble, { BubbleItem } from "../Bubble";
import Icon from "react-icons-kit";
import { settings, command, mail, power } from "react-icons-kit/feather";
import { Logo } from "..";
import styled from "styled-components";
import { bell } from "react-icons-kit/feather";

const Header = () => {
    const { user } = useAuth(); 
    return (
        <HeaderWrapper>
            <Logo />
            <span style={{ flex: 1 }} />
            <Icon icon={bell} style={{ padding: '10px' }} />
            <img src={user.photoUrl} height="30px" width="30px" style={{ borderRadius: '25px' }} />
        </HeaderWrapper>)
}

export default Header;


const HeaderWrapper = styled.header`
    display:flex;
    align-items:center;  
    padding:10px 15px ;  
`