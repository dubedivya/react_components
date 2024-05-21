import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "expense",
    amount: 0,
    description: "",
  });

  const [transactionType, setTransactionType] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  const handleFormSubmit = (currentFormData) => {
    // console.log(currentFormData);
    if (!currentFormData.description || currentFormData.amount) {
      setAllTransactions([
        ...allTransactions,
        { ...currentFormData, id: Date.now() },
      ]);
    }
  };

  console.log(allTransactions);
  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        transactionType,
        setTransactionType,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
