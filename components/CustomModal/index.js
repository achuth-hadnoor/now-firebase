import CustomModal from './elements';

export default ( { children, isOpen, afterOpen, closeModal } ) => {
    return (
        <CustomModal isOpen={isOpen} onAfterOpen={afterOpen} onRequestClose={closeModal}>
            <CustomModal.Header>
                <span>Modal</span>
                <button onClick={closeModal}>close</button>
            </CustomModal.Header>
            <CustomModal.Body>
                {children}
            </CustomModal.Body>
        </CustomModal>
    )
}