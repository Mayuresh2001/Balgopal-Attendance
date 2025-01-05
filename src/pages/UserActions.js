import React from 'react'
import { Link } from 'react-router-dom'

const UserActions = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: "20px", justifyContent: 'center', padding: '20px 0 20px 0' }} >
      
      <Link className='action-button' to={"/register-balgopal"}>Register New Balgopal</Link>
      <Link className='action-button' to={"/mark-attendance"}>Mark Attendance</Link>
      <Link className='action-button' to={"/report-generation"}>Report Generation</Link>
    </div>
  )
}

export default UserActions