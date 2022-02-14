import React, { useContext } from 'react'
import Details from '../Details/Details'
import Form from '../Form/Form'
import ItemList from '../Lists/ItemList'
import Dashboard from './Dashboard'
import { MoneyManagerContext } from '../../context/context'

const UserDashboard = () => {
const {balance} = useContext(MoneyManagerContext);
  return (
    <div class="container-fluid">
    <div class="row min-vh-100 flex-column flex-md-row">
        <Dashboard/>
    <main class="col bg-faded py-3 flex-grow-1">
       <div className='col-md-12 col-sm-12 padding-15'>
    <div className='row'>
<div className='col-md-8 col-sm-12'>
<div className='row'>
    <div className='col-sm-6'>
    <Details title="Income"/>
    </div>
    <div className='col-sm-6'>
    <Details title="Expense"/>
</div>
</div>
<div className='col-md-12'>
<Form/>
</div>
</div>
<div className='col-md-4'>
  <div className='row'>
  <ItemList/>
  </div>
<div className='row'>
<div className='balanceStyle'>
Balance : {balance}
</div>
</div>
</div>

    </div>
</div>
</main>
</div>
</div>
  )
}

export default UserDashboard