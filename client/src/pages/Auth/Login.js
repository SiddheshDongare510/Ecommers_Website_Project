    import React , {useState} from 'react'
    import Layout from '../../components/Layout/Layout'
    import axios from 'axios'
    import {useNavigate} from 'react-router-dom'
    import toast from 'react-hot-toast'
    import "../../style/AuthStyle.css";
    import { useAuth } from '../../context/auth';

    // //form function 
    // const handleSubmit =async(e)=> {
    //     e.preventDefault();
    // try {
    // const res = await axios.post(`http://localhost:8080/api/v1/auth/register`, {
    // email,
    // password,
    // });
    // if(res && res.data.success){
    // toast.success(res.data.message);
    // setAuth({
    //     ...auth,
    //     user: res.data.user,
    //     token : res.data.token,
    // });
    // localStorage.setItem('auth',JSON.stringify(res.data))
    // navigate("/");
    // }else{
    // toast.error(res.data.message)
    // }
    // }
    // catch (error){
    //     console.log(error)
    //     toast.error('Something went wrong')

        
    // }
    // };

    const Login = () => {
        
        const [email,setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [auth,setAuth] = useAuth();
        const navigate=useNavigate()

          //form function 
            const handleSubmit =async(e)=> {
                e.preventDefault();
            try {
            const res = await axios.post(`http://localhost:3000/api/v1/auth/register`, {
            email,
            password,
            });
            if(res && res.data.success){
            toast.success(res.data.message);
            setAuth({
                ...auth,
                user: res.data.user,
                token : res.data.token,
            });
            localStorage.setItem('auth',JSON.stringify(res.data))
            navigate("/");
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
            <form onSubmit ={handleSubmit}>
                <h4 className="title">LOGIN FORM</h4>
        <div className="mb-3">
        
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
        </div>
    
        <button type="submit" className="btn btn-primary">LOGIN</button>
    </form>

            </div>
        </Layout>
    )
    }

export default Login
