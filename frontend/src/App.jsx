import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [message, setMessage] = useState('')
  useEffect(()=>{
      axios.get('/api/mydata').then(res=>{
        setMessage(res.data.message)
      }).catch(err=>{
        console.log('Error',err);
      })

  },[])


  return (
    <>
     <div>
    <h2>HII, {message}</h2>

     </div>
    </>
  )
}

export default App
