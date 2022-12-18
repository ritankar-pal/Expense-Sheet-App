import ExpenseList from "./components/Expenses/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";

import { useState } from "react";

//We will execute the below expenses array of object outside the function:
 const DUMMY_EXPENSES = [
   { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14)},
   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
   { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
   { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12)},
];

const App = () => {

  //Initial Stage:
  // const expenses = [
  //   {id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14)},
  //   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  //   { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
  //   { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12)},
  // ];


  //From Module 5: (Lec 64): 
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)


  const addExpenseHandler = (expense) =>{
      // console.log(expense);
      setExpenses((previousExpenses) => {
        return [expense, ...previousExpenses]
      })
  }

  return (
    <div>
      <h2>Let's Get Started</h2>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      {/* Initial Stage */}

      {/*<ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date} code = {expenses[0].id}></ExpenseItem>
      <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date} code = {expenses[1].id}></ExpenseItem>
      <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date} code = {expenses[2].id}></ExpenseItem>
      <ExpenseItem title = {expenses[3].title} ad:mount = {expenses[3].amount} date = {expenses[3].date} code = {expenses[3].id}></ExpenseItem> */}

      {/* Below is an example of hard-coding the values instead of above which is dynamic */}
      {/* <ExpenseItem title = "This is Hard-Coded" amount = "79" date = {new Date(2022, 5, 12)} code = "e6"></ExpenseItem> */}




      {/* Second Stage: We moved the Initial Stage Part to the ExpenseList file */}

      <ExpenseList items = {expenses}></ExpenseList>
     

      {/* Third Stage: If We moved the array of expenses to the ExpenseList file (Trying out) */}
      {/* <ExpenseList></ExpenseList> */}
      
    </div>
  );
}

export default App;
