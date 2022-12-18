// import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

import Expenses from "./Expenses";

import ExpensesChart from "./ExpensesChart"


const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveExpenseYearHandler = (e) => {
    // console.log(e);
    setFilteredYear(e);
  };

  //TO filter items based on date:
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  
  // let expensesContent = <p>No Expenses Found</p>;
  // if(filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //       code={expense.id}
  //     />
  //   ))
  // }

  return (
    <li>
      <Card className="expenses">
      
        <ExpensesFilter
          selected={filteredYear}
          onSaveExpenseYear={saveExpenseYearHandler}
        ></ExpensesFilter>


        {/* We will use map() method to execute the same thing below: */}

        {/* {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          code={expense.id}
        />
      ))} */}

        {/* {expensesContent}; */}    


        {/* We can also write the above thing as: */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses Found</p>}
        {filteredExpenses.length > 0 && filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          code={expense.id}
        />
      ))} */}

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

        {/* Lec 67 */}
        <Expenses items={filteredExpenses} />






        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        code={props.items[0].id}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        code={props.items[1].id}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        code={props.items[2].id}
      ></ExpenseItem>

      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
        code={props.items[3].id}
      />                                 */}
      </Card>
    </li>
  );
};
export default ExpenseList;

// Another Method:
// import ExpenseItem from "./ExpenseItem";

// function ExpenseList() {
//   const items = [
//     { id: "e1", title: "Toilet Paper", amount: 94.12, date: new Date(2020, 7, 14)},
//     { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
//     { id: "e3", title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28)},
//     { id: "e4", title: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12)},
//   ];

//   return (
//     <div>
//       <ExpenseItem
//         title={items[0].title}
//         amount={items[0].amount}
//         date={items[0].date}
//         code={items[0].id}
//       ></ExpenseItem>

//       <ExpenseItem
//         title={items[1].title}
//         amount={items[1].amount}
//         date={items[1].date}
//         code={items[1].id}
//       ></ExpenseItem>

//       <ExpenseItem
//         title={items[2].title}
//         amount={items[2].amount}
//         date={items[2].date}
//         code={items[2].id}
//       ></ExpenseItem>

//       <ExpenseItem
//         title={items[3].title}
//         amount={items[3].amount}
//         date={items[3].date}
//         code={items[3].id}
//       ></ExpenseItem>
//     </div>
//   );

// }

// export default ExpenseList;
