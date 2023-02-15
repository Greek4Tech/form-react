import React from "react"
import {Route, Routes} from 'react-router-dom'
import "./App.css"
// import UserForm from './components/form'
// import SignUp from "./components/template"
import ComboForm from "./components/comboForm"
// import ResetPasswordForm from "./components/validator";
import Success from './components/Success'


function App() {
  return (
    
    <div>
      {/* <UserForm />
      <SignUp /> */}
      <ComboForm />
      <Routes> 
        <Route path = '/success' element = {<Success />} />
      </Routes>
      {/* <ResetPasswordForm /> */}
    </div>
  );
}

export default App;