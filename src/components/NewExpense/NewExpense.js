import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

import { useState } from 'react';

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);


    const saveExpenseDatahandler = (enteredExpenseData) =>{     //Data is coming from the ExpenseForm.JS

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        // console.log(expenseData);

        props.onAddExpense(expenseData);  //this is to send the data to the parent of NewExpense which is "App.js"
        setIsEditing(false)               //to cancel the form submission
    }



    const startEditingHandler = () =>{ 
        setIsEditing(true)
    }
    
    const stopEditingHandler = () =>{
        setIsEditing(false)
    }


  return <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandler}>Add New Expenses</button>}

    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDatahandler} onCancel={stopEditingHandler}></ExpenseForm>}

  </div>;
}

export default NewExpense;
