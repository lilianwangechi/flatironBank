import React, {useState} from "react";

function AddTransactionForm() {
//adding a new transaction
const[formData,setFormData] =useState({
date:"",
description:"",
category:"",
amount:""
})

function handleChange(event){
  const name = event.target.name;
  let value = event.target.value;
};

setFormData({
  ...formData,
  [name]:value
});
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" value={formData.date}/>
          <input type="text" name="description" value={formData.description} placeholder="Description" />
          <input type="text" name="category" value={formData.category} placeholder="Category" />
          <input type="number" name="amount"value={formData.amount}  placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
