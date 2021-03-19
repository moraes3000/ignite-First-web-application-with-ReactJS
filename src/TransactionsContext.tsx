import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api';

interface Trasaction {
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

export const TransactionsContext = createContext<Trasaction[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransaction] = useState<Trasaction[]>([])
    useEffect(() => {
        api.get('transactions')
            // .then(response =>console.log(response.data))
            .then(response => setTransaction(response.data.transactions))
    }, []);

    return (
        <TransactionsContext.Provider value={transactions}>
            {children}
        </TransactionsContext.Provider>
    )
}

