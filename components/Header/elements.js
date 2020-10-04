import styled from "styled-components/macro";

export const HeaderWrapper = styled.header`
    display:flex;
    align-items:center;
    padding:10px 15px ;
    font-size:18px;
`
export const BubbleWrapper = styled.ul`
    list-style:none;
    position: absolute;
    top: 50px;  
    background: #fff;
    color:#444;
    right: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,.05);
    border-radius: 10px;
    opacity:0;
    animation: gztygP 0.16s 0.3s ease-in-out forwards;
    font-size:${({ theme }) => theme.font.x};
    padding:0;
    margin:0;
    width:250px;
    overflow:hidden; 
    z-index:999;
    `;
export const BubbleItem = styled.li`
    align-items:center;
    cursor:pointer;
    padding: 10px;
    display:flex;
    &:hover{
        background:${props => props.theme.colors.secondary}
    }
    border-bottom:1px solid #f1f1f1;
`;
