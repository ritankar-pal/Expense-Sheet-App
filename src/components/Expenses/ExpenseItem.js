import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// import { useState } from "react";
// import ItemCode from "./ItemCode";

const ExpenseItem = (props) => {
  // const expenseDate = new Date();
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 294.71;  

  const cssColor = {
    // color: "white",
    // fontWeight: "bold",
  };

  // const months = props.date.toLocaleString('en-US', {month: 'long'});
  // const years = props.date.getFullYear();
  // const days = props.date.toLocaleString('en-US', {day: 'numeric'});




  //Example of useState: 
  // const [title, setTitle] = useState(props.title);
  // console.log("Expense Item being Revaluated");


  // const clickHandler = () =>{
  //   setTitle('Updated!!!')            
  //   console.log(title);                
  // }

  return (
    <Card className="expense-item" style={cssColor}>
      {/* <div> */}
      {/* {expenseDate.toLocaleDateString()}*/}
      {/* <h2>Car Insurance</h2> */}

      {/* {props.date.toLocaleDateString()} */}

      {/* We want to display in calendar way */}

      {/* <div>{months}</div>
        <div>{years}</div>
        <div>{days}</div> */}
      {/* </div> */}

      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item_description">
        {/* <span>{`Product ID: ${props.code}`}</span> */}
        {/* <ItemCode code = {props.code}></ItemCode> */}

        <h2>{props.title}</h2>

        <div className="expense-item_price">{`$ ${props.amount}`}</div>
      </div>

      {/* // Testing */}
      {/* <ItemCode code = {props.code} title = {props.title} amount = {props.amount}></ItemCode> */}


      {/* Example of States */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>  
  );
}

export default ExpenseItem;
