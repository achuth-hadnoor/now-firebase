import styled from "styled-components/macro";

const Avatar = (props)=>(
    <>
        {
            props.src ?
            <div
                style={{outline:'none'}}
                onClick={props.signout}
            >
                <Img src={props.src} 
                   title={props.name} 
                   title={props.name}
                   /> 
            </div>
            : <div  
               onClick={props.signout}
                  style={{ cursor:'pointer'}}>{props.name?.substring(1,2)}</div>
        }
    </>
) 
const Img = styled.img`
    height:30px;
    width:30px;
    border-radius:25px;
    cursor:pointer;
`

export default Avatar;