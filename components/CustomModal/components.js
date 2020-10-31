import styled from 'styled-components';
import Modal from 'react-modal';
import { theme } from 'rich-markdown-editor';

Modal.defaultStyles.overlay.background='rgba(229, 229, 229, 0.6)';

export const Container = styled(Modal)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
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
    font-size: ${({ theme }) => theme.font.xxx};
`;

export const Body = styled.div`
    display: flex;
    margin: 10px;
    
`;