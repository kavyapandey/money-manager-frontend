import React, { useState, useContext } from 'react'
import { MoneyManagerContext } from '../../context/context'
import {v4 as uuidv4} from 'uuid';
import formatDate from '../../formatDate';
import { incomeCategories, expenseCategories } from '../../constants/categories';
const intitalState = {
  amount : '',
  category : 'Business',
  type : 'Income',
  date : formatDate(new Date())
}
const Form = () => {
  const [formData, setFormData] = useState(intitalState);
  const {addTransaction} = useContext(MoneyManagerContext);
  const createTransaction = () =>{
   
  const transaction = {...formData,
     amount : Number(formData.amount),
      id : uuidv4()
    }
    
    addTransaction(transaction);
    setFormData(intitalState);
  }
  return (
    <div>
       
       <div className='row'>
       <div class="form-group col-sm-6">
    <label for="exampleFormControlInput1">Type</label>
    <select className="form-control form-control-sm" 
    value ={formData.type} onChange={(e)=> setFormData({...formData, type: e.target.value})}
    >
  <option value="Income">Income</option>
  <option value="Expense">Expense</option>
</select>
  </div>
  <div class="form-group col-sm-6">
    <label for="exampleFormControlInput1" >Category</label>
    <select className="form-control form-control-sm"
    value ={formData.category} onChange={(e)=> setFormData({...formData, category: e.target.value})}
    >
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
    <label for="exampleFormControlTextarea1">Amount</label>
    <input class="form-control" type="number"
    value ={formData.amount} onChange={(e)=> setFormData({...formData, amount: e.target.value})}
    ></input>
  </div>
  <div class="form-group col-sm-6">
    <label for="exampleFormControlTextarea1">Date</label>
    <input type="date" class="form-control"
    value ={formData.date} onChange={(e)=> setFormData({...formData, date: formatDate(e.target.value)})}
    ></input>
  </div>
</div>

<button className='btn btn-primary' onClick={createTransaction}>Create</button>
        
    </div>
  )
}

export default Form