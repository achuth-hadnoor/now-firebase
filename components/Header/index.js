import { NotiBubble, UserBubble } from "./components"; 
import {HeaderWrapper, Options} from './elements'
import { useAuth } from "@/lib/auth";
import Logo from "../Logo";
import Icon from "react-icons-kit";
import { bell ,plus} from "react-icons-kit/feather";
const Header = ()=>{
    const auth = useAuth();
    return(
     <HeaderWrapper>
        <Logo/>   
        <span style={{flex:1}}/> 
            <Icon icon={plus} style={{padding:'10px',margin:'10px 0px '}}/> 
            <NotiBubble/>
            <UserBubble/>   
     </HeaderWrapper>
)};
export default Header