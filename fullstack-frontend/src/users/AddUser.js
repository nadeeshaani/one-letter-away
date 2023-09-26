import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",
        username:"",
        age:0,
        gender:"",
        message:"",
        country:"",
        profileImageUrl:""

    })

    const{name,username,email,age,gender,message,country,profileImageUrl}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }


    const onSubmit = async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user)
        navigate("/")


    };

   

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Register User</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='Name' className='form-label'>
                        Name
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your name'
                    name='name'
                    value={name}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>
                        Username
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your username'
                    name='username'
                    value={username}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        Email
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your email address'
                    name='email'
                    value={email}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
    <label htmlFor='profileImageUrl' className='form-label'>
        Profile Image URL
    </label>
    <input
        type="url"
        className='form-control'
        name='profileImageUrl'
        value={profileImageUrl}
        onChange={(e) => onInputChange(e)}
    />
</div>


                <div className='mb-3'>
                    <label htmlFor='Age' className='form-label'>
                        Age
                    </label>
                    <input type={"age"}
                    className='form-control'
                    placeholder='Enter your age'
                    name='age'
                    value={age}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Country' className='form-label'>
                        Country
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your country'
                    name='country'
                    value={country}
                    onChange={(e)=>onInputChange(e)}/>       
                </div>

                <div className='mb-3'>
                    <label htmlFor='Message' className='form-label'>
                        Message
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your message'
                    name='message'
                    value={message}
                    onChange={(e)=>onInputChange(e)}/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Gender' className='form-label mx-2'>
                        Gender
                    </label>
                    <select id="gender" name="gender" value={gender} onChange={(e)=>onInputChange(e)}>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Other">Other</option>
</select>     
                </div>



                <button type="Submit" className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-2' to="/">Cancel</Link>
                </form>


                


            </div>
        </div>
    </div>
  )
}
