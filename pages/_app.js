import React from 'react'
import 'firebase/firestore'
import 'firebase/auth'
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'

const firebaseConfig = {
  // put yours here
}

const fuego = new Fuego(firebaseConfig)

export default function App() {
  return (
    <FuegoProvider fuego={fuego}>
      <YourAppHere />
    </FuegoProvider>
  )
}
/*
    - firebaseWrapper
        - authwrapper
            -   themeWrapper
        -Pages

*/

