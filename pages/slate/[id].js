import Header from "@/components/Header";
import { useAuth } from "@/lib/auth";
import { fuego, useDocument } from "@nandorojo/swr-firestore"
import Router from 'next/router';
import { useEffect, useState } from "react";
import Slate from '@/components/Slate';

const SlateData = ({ id }) => {
    const [slate, setSlate] = useState('')
    const { signout } = useAuth();

    const { data, error, update } = useDocument(`slate/${id}`);


    useEffect(() => {
        if (data) {
            if (data.exists && slate === '') {
                setSlate(data.name);
            } else {
                if (!data.exists) {
                    Router.replace('/new');
                }
            }
        }
    })

    if (!data || error || !data.exists ) return <>You Donot have access to this page or it appears to be missing </>;

    return (
        <>
            <Header />
            <Slate />
            <input value={slate} onChange={(e) => { setSlate(e.target.value) }} />
            <button onClick={() => { signout() }}>Sign Out</button>
        </>
    )
}
SlateData.getInitialProps = (ctx) => {
    const { query } = ctx;
    return {
        id: query.id
    }
}


export default SlateData;