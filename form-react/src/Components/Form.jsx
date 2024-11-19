import React, { useState } from 'react'

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');  
    const [number, setNumber] = useState('');

    const getName = (event) => {
        let nameValue = event.target.value;
        setName(nameValue);
    }

    const getEmail = (event) => {
        let emailValue = event.target.value;
        setEmail(emailValue);
    }
    
    const getNumber = (event) => {
        let numberValue = event.target.value;
        setNumber(numberValue);
    }
    const submitbtn = () => {       
        if (name == "" || number ==""){
            console.log("Invalid values");
        }else{
            alert(name)
            console.log("Success");
            console.log("Name" + name);
            console.log("Email" + email);
            console.log("Number" + number);
        }
        alert(`${name},$   {email},${number}`)
        document.getElementById("display").innerHTML=`${name},${email},${number}`
    }

  return (
    <div>
      <h1>React Form</h1>
      
      <div>
        <input onChange={getName} type="text" name='name' placeholder='Enter Your Name '/>
      </div>
      <div>
        <input onChange={getEmail} type="text" name='email' placeholder='Enter Your Email'/>
      </div>
      <div>
        <input onChange={getNumber} type="text" name='number' placeholder='Enter Your Mobile Number' />
      </div>
      <div>
        <button onClick={submitbtn}>Submit</button>
      </div>
      <div style={{width:"100px",height:"100px", backgroundColor:"red"}} id='display'>
        
      </div>
    </div>
  )
}
