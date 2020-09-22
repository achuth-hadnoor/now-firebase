import styled from "styled-components";

const Avatar = (props)=>(
    <>
        {
            props.src ?
            <div
                style={{outline:'none'}}
               {...props}
            >
                <Img src={props.src} 
                   title={props.name} 
                   /> 
            </div>
            : <div  
               {...props}
                  style={{ cursor:'pointer'}}>{props.name.substring(1,2)}</div>
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