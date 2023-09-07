import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function Form() {

  const [name, setName] = useState()
  const [address, setAddress] = useState()

  const navigate=useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, address)
    axios.post('http://localhost:8081/form', { name, address })
      .then(result => {
        console.log(result)
      navigate('/submitpage')
      })

      .catch(err => console.log(err))

  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25" >
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>

            <input type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address">
              <strong>Address</strong>
            </label>
            <input type="text"
              placeholder="Enter Address"
              autoComplete="off"
              name="address"
              className="form-control rounded-0"
              onChange={(e) => setAddress(e.target.value)}

            />
          </div>


          <button type="submit" className="btn btn-success w-100 rounded-0">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}


export default Form;