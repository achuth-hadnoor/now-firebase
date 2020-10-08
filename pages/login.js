import { useAuth } from "hooks/auth"

const Login = ()=>{
    const {signinWithGoogle} = useAuth();
    return (
    <div>
        <button onClick={()=>{
            signinWithGoogle();
        }}>Sign In</button>
    </div>
)}
export default Login