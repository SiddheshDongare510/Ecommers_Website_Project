import React , {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import "../../style/AuthStyle.css";
import { authEndPoints } from '../../service/auth' 
const Register = () => {
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const [phone, setPhone]=useState("")
    const [address, setAddress]=useState("")
    const navigate=useNavigate()

        //form function 
        const handleSubmit =async(e)=> {
            e.preventDefault();
          try {
            console.log("printing register api: ", authEndPoints.register)
    const res = await axios.post(`${authEndPoints.register}`, {
      name,
      email,
      password,
      phone,
      address,
    });
    if(res && res.data.success){
        toast.success(res.data.message)
        navigate('/Login');
    }else{
        toast.error(res.data.message)
    }
          }
          catch (error){
            console.log(error)
            toast.error('Something went wrong')

            
          }
        };

  return (
    <Layout title="Register-Ecommerce app">
      <div className='form-container'>
          <h1>Register Page</h1>
          <form onSubmit ={handleSubmit}>
    <div className="mb-3">
    
      <input type="text"  value ={name}  
      onChange={(e) => setName(e.target.value)}
          className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' required/>
    
    </div>


    <div className="mb-3">
    
      <input type="email"  value ={email} 
      onChange={(e) => setEmail(e.target.value)}
      className="form-control" id="exampleInputEmail" placeholder='Enter Your Email' required/>
    
    </div>

    

    <div className="mb-3">

      <input type="password" value ={password} 
      onChange={(e) => setPassword(e.target.value)}
      className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required />
    </div>

    <div className="mb-3">

      <input type="text" value ={phone} 
      onChange={(e) => setPhone(e.target.value)}
      className="form-control" id="exampleInputEmail2 " placeholder='Enter Your Phone' required/>
    </div>

    <div className="mb-3">
    
      <input type="text"  value ={address} 
      onChange={(e) => setAddress(e.target.value)}
      className="form-control" id="exampleInputEmail3" placeholder='Enter Your Address' required/>
    
    </div>
  
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>

          </div>
    </Layout>
  )
}

export default Register
