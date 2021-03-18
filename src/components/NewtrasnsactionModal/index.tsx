import { Container } from './styled'

import Modal from 'react-modal';


interface NewtrasnsactionModalProps{
    isOpen:boolean;
    onRequestClose:()=>void;
}

export function NewtrasnsactionModal({isOpen, onRequestClose}:NewtrasnsactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
        >
            <h2>Cadastra transação</h2>
        </Modal>
    )
}