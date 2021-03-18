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
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <Container>

            <h2>Cadastra transação</h2>
            <input placeholder="Título"/>
            
            <input type="number" placeholder="Valor" />

            <input placeholder="Categoria"/>

           <button type="submit">Cadastrar</button>

            </Container>

        </Modal>
    )
}