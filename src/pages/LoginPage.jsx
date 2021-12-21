import React, { useState } from 'react'
import Input from '../components/Input'
import { Link } from 'react-router-dom'
export default function LoginPage() {
    const url = "https://frebi.willandskill.eu/api-token-auth/"
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    function handleOnSubmit(e){
        e.preventDefault()
        const payload = {
        email,
        password
    }
        fetch(url, {
        method:"POST",
        headers: {"Content-Type": "Application/json"},
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
        const token = data.token
        localStorage.setItem("webb21", token)
        console.log(token)
    })
    }
    return (
        <div>
            <div className='container'>
                <div>
                    
                </div>
                <form onSubmit={handleOnSubmit}>
                {/* {renderInput("text", "email", email, setEmail)} */}
                <Input type="text" placeholder="email" value={email} setValue={setEmail}/>
                <Input type="password" placeholder="password" value={password} setValue={setPassword}/>
                {/* {renderInput("password", "password", password, setPassword)} */}
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
            <Link to="/auth/create">Dont have a account?</Link>
            </div>
            
            {email}
        </div>
    )
}
