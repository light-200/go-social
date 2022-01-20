import React,{useState} from 'react';
import '../style/login.css';

export default function Login() {

    const [form,setForm] = useState({email:'',password:''});

    const handleSubmit = (e)=>{
        e.preventDefault();
    }

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setForm((p)=>({...p,[name]:value}));
    }

    return (
        <div className="page">
            <div className="container">
                <span  className="img">
                    <img src="sd" alt="adad"/>
                </span>
                <form onSubmit={handleSubmit} className="form">
                    <h1 style={{textAlign:"center"}}>Welcome</h1>  
                    <label htmlFor="name" className="materialLabel">Email:</label>
                    <input type="text" name="email" placeholder="you@company.com" className="materialInput" value={form.email}  onChange={handleChange}  />
                    <label htmlFor="name" className="materialLabel">Password:</label>
                    <input type="text" name="password" placeholder="123456" className="materialInput" value={form.password}  onChange={handleChange}  />
                    <button type="submit" className="materialButton">Login</button>
                </form>
            </div>
        </div>
    )
}
