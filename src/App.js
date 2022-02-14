import React, { useState } from 'react';
import Login from './components/Home/Login';
import { Provider } from './context/context';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import History from './components/History/History';
import UserDashboard from './components/Dashboard/UserDashboard';
import Register from './components/Home/Register';

const App = () => {

const [loggedInName, setLoggedInName] = useState("");
const [loggedInId, setLoggedInId] = useState("");

  return (
    <div>
         <Router>
<Provider>

<Routes>
  
       <Route exact path="/" element= {<Login/>}/>

      <Route path="/dashboard" element={<UserDashboard/>} />
      
        <Route path="/history" element={<History/>}/>
        <Route path="/register" element={<Register/>}/>
        {/* <Route path="/write" element={user ? <Write /> : <Register />}/>
        <Route path="/settings" element={user ? <Settings /> : <Register />}/>
        <Route path="/post/:postId" element={ <Single />}/> */}
       </Routes>  
      
</Provider>
</Router>
    </div>
   
  );
};

export default App;
