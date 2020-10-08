import { useState } from "react"
import styled from "styled-components";

export default function New (){
    let[val,setVal] = useState('');
    return(
        <FormWrapper>
            <Form onSubmit={()=>{}}>
                <label>
                    <span style={{display:'none'}}>Slate</span>
                    <input type="text" onChange={(e)=>{
                            setVal(e.target.value);
                    }}
                    value={val}
                    />
                </label>
            </Form>
        </FormWrapper>
    )
} 
const FormWrapper = styled.div`
    display:flex; 
    max-width:400px;  
    height:100%;
`  
const Form = styled.form`
    max-width:400px;
    margin:auto 0;

`