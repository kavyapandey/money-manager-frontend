import React from 'react';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import { Provider } from './context/context';

const App = () => {
  return (
    <div className='container'>
<Provider>
<Details title = 'Income'/>
    <Main/>
    <Details title = 'Expense'/>
</Provider>
 
    </div>
   
  );
};

export default App;
