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

// interface TransactionsInput{
//     title: string,
//     amount: number,
//     type: string,
//     category: string,
// }
type TransactionsInput = Omit<Trasaction, 'id' | 'createdAt'>;


interface TransactionsContextData {
    transactions: Trasaction[];
    CreateTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

    const [transactions, setTransaction] = useState<Trasaction[]>([])

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
        const {transaction} = response.data;

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

