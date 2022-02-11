import React from 'react'
import Form from '../Form/Form'
import ItemList from '../Lists/ItemList'

const Main = () => {
  return (
    <div class="card">
    <div class="card-body">
      <h5 class="card-title">Expense Form</h5>
     <h5>Total balance</h5>
     <Form/>
     <ItemList/>
    </div>
  </div>
  )
}

export default Main