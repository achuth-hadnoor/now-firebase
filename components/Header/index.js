import { Logo, Slate, Bubble, UserBubble } from "./components"; 
import {HeaderWrapper} from './elements'
import { useAuth } from "@/lib/auth";
const Header = ()=>{
    const auth = useAuth();
    return(
     <HeaderWrapper>
        <Logo/>  
        {
            auth.user ? <>
                <Slate/> 
                <UserBubble/>
            </>
            :
            <button onClick={()=>{
                auth.signinWithGoogle();
            }}>signIn</button>
        }
     </HeaderWrapper>
)};
export default Header