import React, { useState } from 'react';
import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    SetIsNewTransactionModalOpen(true)
  }

  function handleCloseTransactionModal() {
    SetIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenTransactionModal} />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      >
        <h2>Cadastra transação</h2>
      </Modal>'
      <GlobalStyle />
    </>
  );
}


