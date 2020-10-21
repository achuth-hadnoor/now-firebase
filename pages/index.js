import Header from '@/components/Header';
import { useAuth } from '@/lib/auth';
import { default as Slate } from '@/components/Slate'

export default function Home() {
  const { user ,loading,signinWithGoogle} = useAuth();
  if (user) {
    return (
      <>
        <Header />
        <Slate/>
      </>
    )
  }
  if (loading) {
    return (
      <div>loading</div>
    )
  }
  return (
    <div>
      <button onClick={ signinWithGoogle } >Sign In</button>
    </div>
  )
}

// Project structure
/*
  ---                                 ---  ----

  ---------------------
  ___________
  |         |
  |         |
  |_________|
*/