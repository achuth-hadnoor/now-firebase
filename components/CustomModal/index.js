import CustomModal from './elements';
import { IconValue as Icon } from '@/components/styles'
import { x } from 'react-icons-kit/feather'

export default ( { children, isOpen, afterOpen, closeModal } ) => {
    return (
        <CustomModal isOpen={isOpen} onAfterOpen={afterOpen} onRequestClose={closeModal}>
            <CustomModal.Header>
                <span>Modal</span>
                <Icon icon={x}  onClick={closeModal} />
            </CustomModal.Header>
            <CustomModal.Body>
                {children}
            </CustomModal.Body>
        </CustomModal>
    )
}