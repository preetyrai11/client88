import React from 'react'
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { getUser, deleteUser} from "./redux/userSlice";
import { Link } from 'react-router-dom';


function Users() {
   
  const dispatch = useDispatch() 
  const users = useSelector(state => state.users.users)
  console.log(useSelector(state => state.users.users));

  // useEffect(() => {
  //   const fetchData = async() => {
  //     try {
  //       const response = await axios.get('http://localhost:3001');
  //       dispatch(getUser(response.data));
  //     } catch(err) {
  //        console.log(err);
  //     }
  //   }

  //   fetchData();
  // }, []) 


  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deleteuser/'+id)
    .then(res => {
      dispatch(deleteUser({id}))
      // console.log(useSelector(state => state.users.users)) 
    }).catch(err => console.log(err))

  }


 

  return (
    <div className="d-flex vh-100 bg-primary justigy-content-center align-items-center"> 
      <div className="w-50 bg-white rounded p-3"> 
         <button className="btn btn-success btn-sm"> 
           <Link to="/create" className="btn btn-success btn-sm"> 
             Add + 
           </Link>
         </button>
         <table className="table"> 
           <thead> 
             <tr> 
               <th>Name</th>
               <th>Email </th>
               <th> Age </th>
               <th> Action </th>
             </tr>
           </thead>
           <tbody> 
            {
              users.map(user => {
                return <tr> 
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td> 
                    <Link to={'/edit/${user.id}'} className="btn btn-sm btn-success me-2">Update </Link>
                    
                    <button className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              })
            }
           </tbody>
         </table>
      </div>
    </div>
    
    
    
    
  )
}

export default Users;
