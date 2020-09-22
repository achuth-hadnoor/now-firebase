import {useAuth} from '../lib/auth'
import Header from '@/components/Header';
export default function Home() {
    const auth = useAuth();
  return (
      <>
      <Header/>
      <div>
          home
      </div>
      </>
  )
}
