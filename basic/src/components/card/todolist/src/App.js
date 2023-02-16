
 import React from "react";
 import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom";
 import Formula from "./component/pages/Formula";
 import Freecourse from "./component/pages/Freecourse";
 import Subject from './component/pages/Subject'
 import Login from "./component/pages/Login";
 import Navbar from './component/Navbar/Navbar'
 import MyDay from './component/pages/MyDay'
 import Assigment from './component/pages/Assigment'
 import Completed from './component/pages/Completed'
 import Todo from './component/pages/Todo'
 import SignIn from "./component/sign-in-form/Sign-in-form.component";
 const App = () => {
   return (
     <div className="Apps">
       <Router>
          <Navbar/>
          <Routes>
           <Route path='/' element={<Todo/>} />
           <Route path="/formula" element={<Formula/>}/>
           <Route path="/freeCourse" element={<Freecourse/>}/>
           <Route path="/subject" element={<Subject/>} />
           <Route path='/login' element={<Login/>}/>
           <Route path="/myday"  element={<MyDay/>}/>
           <Route path="/assigment"  element={<Assigment/>}/>
           <Route path="/completed" element={<Completed/>}/>
          </Routes>
       </Router>
     </div>
   );
 };

 export default App;


