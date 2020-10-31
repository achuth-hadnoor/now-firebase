import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(1px);
`;

export const Inner = styled.div`
    height: auto;
    min-width: 250px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
`;

export const Body = styled.div`
    display: flex;
    margin: 10px;
    
`;