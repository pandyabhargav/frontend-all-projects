import { useState } from 'react'

import './App.css'


function App() {
  const [nameinput ,setName] = useState("");
  const [emailInput ,setemail] = useState("");
  const [phnInput ,setcontact] = useState("");

  
  const handleName = (e) => {
  
    setName(e.target.value);
  
  
  }
  const handleemail = (e) => {
  
  setemail(e.target.value);
  
  
  }
  const handlecotact = (e) => {
  
  setcontact(e.target.value);
  
  
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    let obj = {

        name: nameinput,
        email: emailInput,
        contact: phnInput
    }

    console.log("Data>>>>", obj);

    // setUser(obj);

    setName('');
    setemail('');
    setcontact('')
}




  return (
    <>
      <div >

<form onSubmit={(e)=> handleSubmit(e)}>
  <label>
    name
  </label>
  <input type="text"  name ="name" value={nameinput} onChange={(e)=> handleName(e)} />
  <br />
  <br />
  <label>
    Email
  </label>
  <input type="text" name='email' value={emailInput} onChange={(e)=> handleemail(e)} />
  <br />
  <br />
  <label>
    contact
  </label>
  <input type="text" name='contact' value={phnInput} onChange={(e)=> handlecotact(e)} />
  <br />
  <br />
  <button  type='submit'>submit</button>
</form>
      </div>
    </>
  )
}

export default App
