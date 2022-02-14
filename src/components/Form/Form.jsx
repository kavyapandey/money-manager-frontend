import React, { useState, useContext } from 'react'
import { MoneyManagerContext } from '../../context/context'
import {v4 as uuidv4} from 'uuid';
import './form.css';
import formatDate from '../../formatDate';
import { incomeCategories, expenseCategories } from '../../constants/categories';
import { MdAddCircle } from 'react-icons/md';
import axios from 'axios';

const intitalState = {
  amount : '',
  category : '',
  type : 'Income',
  date : formatDate(new Date())
}
const user = JSON.parse(localStorage.getItem("user")) || null;
const Form = () => {
  const [formData, setFormData] = useState(intitalState);
  const {addTransaction} = useContext(MoneyManagerContext);
 
  const createTransaction = async() =>{
   if(Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
   const transactionData = {...formData,
    amount : Number(formData.amount),
     id : uuidv4(),
     userId : user.uId
   }
   try {
    const res = await axios.post("https://managemoney-backend.herokuapp.com/transactions", transactionData);
   const transaction = {...res.data,date : formatDate(res.data.date) };
   addTransaction(transaction);
   setFormData(intitalState);
  } catch (err) {
    console.log(err)
  }
  
    
  }
  return (
    <div>
       
       <div className='row'>
       <div class="form-group col-sm-6">
    <label for="exampleFormControlInput1"><b>Type</b></label>
    <select className="form-control form-control-sm" 
    value ={formData.type} onChange={(e)=> setFormData({...formData, type: e.target.value})}
    >
  <option value="Income">Income</option>
  <option value="Expense">Expense</option>
</select>
  </div>
  <div class="form-group col-sm-6">
    <label for="exampleFormControlInput1"><b>Category</b></label>
    <select className="form-control form-control-sm"
    value ={formData.category} onChange={(e)=> setFormData({...formData, category: e.target.value})}
    >
       <option value="">Select option</option>
      {
        formData.type === 'Income' ? 
        
          incomeCategories.map((income)=>(
            <option value={income.type}>{income.type}</option>
          ))
          :
          expenseCategories.map((expense)=>(
            <option value={expense.type}>{expense.type}</option>
          ))
        
      }
</select>
  </div>
       </div>
<div className='row'>
<div class="form-group col-sm-6">
    <label for="exampleFormControlTextarea1"><b>Amount</b></label>
    <input class="form-control" type="number"
    value ={formData.amount} onChange={(e)=> setFormData({...formData, amount: e.target.value})}
    ></input>
  </div>
  <div class="form-group col-sm-6">
    <label for="exampleFormControlTextarea1"><b>Date</b></label>
    <input type="date" class="form-control"
    value ={formData.date} onChange={(e)=> setFormData({...formData, date: formatDate(e.target.value)})}
    ></input>
  </div>
</div>
<div className="alignAddCenter">
<button className='btn d-flex align-items-sm-center' onClick={createTransaction}><MdAddCircle color="#0B5ED7" size={50}/></button>
</div>     
    </div>
  )
}

export default Form