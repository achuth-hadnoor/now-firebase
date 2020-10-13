import styled from "styled-components";

export const HeaderWrapper = styled.header`
  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
    align-items:center;
    display:flex;
    margin:0px 10px ;
    font-size:18px; 
`
export const BubbleWrapper = styled.ul`
    list-style:none;
    position: absolute; 
    background: #fff;
    color:#444; 
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
export const Options = styled.div`
    display:flex;
    align-items:center;
`