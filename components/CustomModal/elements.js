import { Inner, Header, Body, Container } from './components';

export default function CustomModal({ children, ...restProps }) {

    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )

}

CustomModal.Header = function CustomModalHeader({ children, ...restProps }) {
    return (
        <Header {...restProps}>
            {children}
        </Header>
    )
}

CustomModal.Body = function CustomModalBody({ children, ...restProps }) {
    return (
        <Body {...restProps}>
            {children}
        </Body>
    )
}