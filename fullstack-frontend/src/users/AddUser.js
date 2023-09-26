import React, { useState } from 'react'

export default function AddUser() {

    const [user,setUser]=useState({
        name:"",
        username:"",
        age:0,
        gender:"",
        message:"",
        country:"",
        profileImage:null

    })

    const{name,username,email,age,gender,message,country,profileImage}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className='text-center m-4'>Register User</h2>
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
  <label htmlFor='profileImage' className='form-label'>
    Profile Image
  </label>
  <input type="file" className='form-control' name='profileImage' accept='image/*' value={profileImage} onChange={(e)=>onInputChange(e)}/>
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
                <button type="Cancel" className='btn btn-outline-danger mx-2'>Cancel</button>


                


            </div>
        </div>
    </div>
  )
}
