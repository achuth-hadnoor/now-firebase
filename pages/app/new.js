import { useState } from "react"
import styled from "styled-components";
import { Logo } from '../../components'
import Icon from "react-icons-kit";
import { arrowRight } from 'react-icons-kit/feather'
import { Router } from "next/router";
import { useCollection } from "@nandorojo/swr-firestore";
import { useAuth } from "hooks/auth";
import { CreateSlate } from "util/db";

export default function New() {
    let [val, setVal] = useState(''); 
    const auth = useAuth();
    const submit = async (e) => {
        e.preventDefault(); 
        const id = await CreateSlate(auth.user,val);
        auth.user.id = id;
        auth.updateUser(auth.user)
    }
    return (
        <FormWrapper>
            <Form onSubmit={submit}>
                <Logo />
                <label>
                    <span style={{ display: 'none' }}>Slate</span>
                    <Input type="text" onChange={(e) => {
                        setVal(e.target.value);
                    }}
                        placeholder="New Slate"
                        value={val}
                    />
                    <Icon icon={arrowRight} />
                </label>
            </Form>
        </FormWrapper>
    )
}
const FormWrapper = styled.div`
    display:flex;
    height:100%;
    `;
const Form = styled.form`
    padding:0px 30px;
    display:flex;
    flex:1;
    max-width:400px;
    flex-direction:column;  
    margin:auto 0; 
    label{
        display:flex;
        align-items:center;
        color:#aaa;
    }
`;
const Input = styled.input`
    padding:15px 10px;
    background:${props => props.theme.background};
    color:${props => props.theme.color};
    font-size:18px;
    width:100%;
    border:none;
    border-bottom:1px solid #aaa;
    outline:0px;
`