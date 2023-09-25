import React from 'react'

export default function AddUser() {
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
                    name='name'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Username' className='form-label'>
                        Username
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your username'
                    name='username'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Email' className='form-label'>
                        Email
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your email address'
                    name='email'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Age' className='form-label'>
                        Age
                    </label>
                    <input type={"number"}
                    className='form-control'
                    placeholder='Enter your age'
                    name='age'/>
                </div>

                <div className='mb-3'>
                    <label htmlFor='Country' className='form-label'>
                        Country
                    </label>
                    <input type={"text"}
                    className='form-control'
                    placeholder='Enter your country'
                    name='country'/>       
                </div>

                <div className='mb-3'>
                    <label htmlFor='Country' className='form-label mx-2'>
                        Gender
                    </label>
                    <select id="gender" name="gender">
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
