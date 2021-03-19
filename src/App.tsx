import React, { useState } from 'react';
import styled from 'styled-components'
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';
import { NewtrasnsactionModal } from './components/NewtrasnsactionModal';

import { TransactionsContext } from './TransactionsContext';

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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransitionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewtrasnsactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}


