import {useAuth} from '../lib/auth'
export default function Home() {
    const auth = useAuth();
  return (
      <div>
      {
        auth.loading ? 
            <div>loading</div> : 
            auth.user ? 
            <button 
                 onClick={() => auth.signout()}
            >Sign out </button> 
            : 
            <button 
            onClick={() => auth.signinWithGoogle('/blocks')}
        >sign in </button>}
        
      </div>
  )
}
