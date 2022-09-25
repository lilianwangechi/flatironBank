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

setFormData({
  ...formData,
  [name]:value,
});
}
function handleSubmit(event){
  event.preventDefault();
  console.log(formData)
}

  return (
    <div className="ui segment">
      <form onSubmit ={handleSubmit} className="ui form">
        <div className="inline fields">
          <input type="date" onChange={handleChange} name="date" value={formData.date}/>
          <input type="text" onChange={handleChange} name="description"  value={formData.description} placeholder="Description" />
          <input type="text" onChange={handleChange} name="category" value={formData.category} placeholder="Category" />
          <input type="number" onChange={handleChange} name="amount"value={formData.amount}  placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
