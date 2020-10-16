import { NotiBubble, UserBubble } from "./components";
import { HeaderWrapper } from './elements' 
import Logo from "../Logo"; 

const Header = () => { 
    return (
        <HeaderWrapper>
            <Logo />
            <span style={{ flexGrow: 1, flexShrink: 1 }} />
            <UserBubble />
        </HeaderWrapper>
    )
};
export default Header