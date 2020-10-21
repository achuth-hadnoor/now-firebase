import styled from "styled-components";
import Icon from "react-icons-kit";
 
export const IconValue = styled(Icon)`
    padding:10px;
    cursor:pointer;
    &:hover{
        background:${({theme})=>theme.colors.secondary};
        border-radius:10px
    }
`;
