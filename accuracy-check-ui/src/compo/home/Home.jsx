import React, { useState } from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import { Button } from 'primereact/button'
import Axios from 'axios'
const SERVER_API = 'http://localhost:4050/solve'

const Home = () => {
  const [value, setValue] = useState('')
  const fixError = async () => {
    console.log('make request');
    await Axios.post(SERVER_API, {text:value}).then((response) => console.log(response.data)).catch((err) => console.log(err))
  }
  return (
    <>
      <span className="p-float-label md-4">
        <InputTextarea autoResize id="username" value={value} onChange={(e) => setValue(e.target.value)} rows={5} cols={30} />
        <label htmlFor="username">Username</label>
      </span>
      <Button label="Submit" type="submit" onClick={fixError} icon="pi pi-check" />
    </>
  )
}

export default Home