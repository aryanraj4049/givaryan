import React from 'react'
import { useNavigate } from 'react-router-dom'

const Errror = () => {


    const history = useNavigate();

  return (
    <>
            <div className='container'>
            <div className="error d-flex flex-column justify-content-lg-center align-items-center">
                <h4>Welcome user! Create an Account to use our App</h4>
                <button className='btn btn-primary' onClick={()=>history("/")}>Redirect Signin Page</button>
            </div>

        </div>
    </>
  )
}

export default Errror
