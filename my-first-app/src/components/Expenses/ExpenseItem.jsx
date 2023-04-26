// import React, { useState } from 'react';
import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurrance';
  // const expenseAmount = 294.67;
  // const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItems evaluated by React');
  // let title = props.title;

  // const clickHandler = () => {
  //   // console.log('Clicked!!!!!')
  //   // title = 'updated!';
  //   setTitle('Updated!!');
  //   console.log(title);
  // }

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title} </h2>
          <div className="expense-item__price"> ${props.amount} </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
