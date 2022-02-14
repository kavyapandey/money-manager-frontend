import React, { useContext } from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { MoneyManagerContext } from '../../context/context';

const History = () => {
  const {transactions} = useContext(MoneyManagerContext);
  return (
    <div class="container-fluid">
    <div class="row min-vh-100 flex-column flex-md-row">
        <Dashboard/>
    <main class="col bg-faded py-3 flex-grow-1">
    {transactions ? (   
        <table class="table">
        <thead>
          <tr>
          <th scope="col">Type</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
        
         
    
{transactions.map((transaction)=>(
    <tr key={transaction._id}>
         <td>{transaction.type}</td>   
    <td>{transaction.category}</td>
    <td>{transaction.amount}</td>
    <td>{transaction.date}</td>
  </tr>

))}
    </tbody>
          </table>     
      ) :
       (<h4>No transactions to display</h4>)}
</main>
</div>
</div>
  )
}

export default History