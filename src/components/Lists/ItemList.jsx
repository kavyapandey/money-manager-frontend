import React, { useContext } from 'react'
import { MoneyManagerContext } from '../../context/context';
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
import './lists.css'

const ItemList = () => {

  const {transactions,deleteTransaction} = useContext(MoneyManagerContext);
  const handleDelete = async(id) =>{
deleteTransaction(id);
try {
  await axios.delete(`https://managemoney-backend.herokuapp.com/transactions/${id}`);
 
} catch (err) {
    console.log(err)
}
           
         }
  

  return (
    <div className='table-wrap'>
      {transactions ? (   
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
        
         
    
{transactions.map((transaction)=>(
    <tr key={transaction.id}>
           
    <td>{transaction.category}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.date}</td>
    <td> <button  className='btn' onClick={()=>handleDelete(transaction._id)}>
<MdDelete color='#C9452C'/>
</button></td>
  </tr>

))}
    </tbody>
          </table>     
      ) :
       (<h4>No transactions to display</h4>)}

    </div>
  )
}

export default ItemList