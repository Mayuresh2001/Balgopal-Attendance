import React from 'react'
import { Link } from 'react-router-dom'

const UserActions = () => {
  return (
    <div style={{display:'flex', flexDirection:'row', gap: "20px", justifyContent:'center', padding:'20px 0 20px 0'}} >
      <Link className='action-button'  to={"/register-balgopal"}>Register New Balgopal</Link> 
      <button  className='action-button'>Mark Attendance</button> 
      <button  className='action-button'>Report Generation</button> 
    </div>
  )
}

export default UserActions