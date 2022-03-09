import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}

interface TransactionsProviderProps {
    children: ReactNode;
}

type TransactionsInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsContextData {
    transactions: Transaction[];
    CreateTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            // .then(response =>console.log(response.data))
            .then(response => setTransaction(response.data.transactions))
    }, []);

    async function CreateTransaction(transactionInput: TransactionsInput) {
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date()
        })
        const { transaction } = response.data;

        setTransaction([
            ...transactions,
            transaction,
        ])
    }

    return (
        <TransactionsContext.Provider value={{ transactions, CreateTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

