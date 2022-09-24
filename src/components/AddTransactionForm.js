import React, {useState} from "react";

function AddTransactionForm() {
//adding a new transaction
const[formData,setFormData] =useState({
Date:"",
Description:"",
Category:"",
Amount:""
})

function handleChange(event){
  const name = event.target.name;
  let value = event.target.value;
};

setFormData({
  ...formData,
  [name].value
});
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
