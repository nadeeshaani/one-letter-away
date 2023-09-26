import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const [users,setUsers]=useState([])

    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
        console.log(result.data)
    }

    const deleteUser=async (id)=>{
      await axios.delete(`http://localhost:8080/user/${id}`)
      loadUsers()
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">profile picture</th>
      <th scope="col">Username</th>
      <th scope="col">Country</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">email</th>
      <th scope="col">message</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index)=>
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td><img width="100px" height="100px" src={user.profileImageUrl} alt={`Image for ${user.username}`} /></td>
        <td>{user.username}</td>
        <td>{user.country}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.message}</td>
        <td className='d-flex align-items-center'>
            <button className="btn btn-dark mx-2">View</button>
            <Link className="btn btn-outline-dark mx-2" to={`/edituser/${user.id}`}>Edit</Link>
            <button className="btn btn-outline-danger mx-2" onClick={()=>deleteUser(user.id)}>Delete</button>
        </td>
        

      </tr>
        )
    }

   
    
  </tbody>
</table>
        </div>
    </div>
  )
}
