import React from 'react';
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';
const Details = ({title}) => {
  
  const {total, chartData} = useTransactions(title);
  return (
    

        <div class="col-sm-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text"> Total : {total}</p>
          <Doughnut data = {chartData}/>
           </div>
        </div>
      </div>
   
  )
}

export default Details