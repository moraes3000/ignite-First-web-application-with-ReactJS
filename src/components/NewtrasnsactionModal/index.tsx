import Modal from 'react-modal';

import { Container } from './styled'

import closeImg from '../../assets/close.svg'




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
            <button type='button' onClick={onRequestClose} className='react-modal-close'>
                <img src={closeImg} alt="Fechar Modal"/>
            </button>
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