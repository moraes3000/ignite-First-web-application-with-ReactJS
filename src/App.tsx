import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';

import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';

import { TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <Header onOpenNewTransitionModal={handleOpenTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}


