import React, { useContext } from 'react'
import { MoneyManagerContext } from '../../context/context';


const ItemList = () => {

  const {transactions} = useContext(MoneyManagerContext);

  return (
    <div>
      {transactions ? (      
      <ul>
{transactions.map((transaction)=>(
  <li key={transaction.id}>
     <div>
       icon
     </div>
     <div>
       {/* change div class according to the type of expense */}
       <p>{transaction.category},{transaction.amount},{transaction.date}</p>
     </div>
     <button className="btn btn-danger">
       Delete
     </button>
  </li>
))}
      </ul>
      ) :
       (<h4>No transactions to display</h4>)}

    </div>
  )
}

export default ItemList