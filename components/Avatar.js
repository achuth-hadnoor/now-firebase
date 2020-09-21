import styled from "styled-components";

const Avatar = ({src,name,onClick})=>(
    <>
        {
            src ? <Img src={src} title={name} onClick={onClick}/> : <div onClick={onClick} style={{ cursor:'pointer'}}>{name.substring(1,2)}</div>
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