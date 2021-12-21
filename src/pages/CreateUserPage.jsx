import React from 'react'
import Input from '../components/Input'
import { useState } from 'react'
export default function CreateUserPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [organisationKind, setOrganisationKind] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    function handleOnSubmit(e){
        e.preventDefault()
        const url = "https://frebi.willandskill.eu/auth/users/"
        const payload = {
            email,
            password,
            organisationKind,
            firstName,
            lastName
        }
        fetch(url, {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <Input type="text" placeholder="firstName" value={firstName} setValue={setFirstName} />
                <Input type="text" placeholder="lastName" value={lastName} setValue={setLastName} />
               <Input type="text" placeholder="email" value={email} setValue={setEmail}/>
                <Input type="password" placeholder="password" value={password} setValue={setPassword}/>
                <Input type="text" placeholder="organisationKind" value={organisationKind} setValue={setOrganisationKind}/> 
                <button className='btn btn-primary'>submit</button>
            </form>
            
        </div>
    )
}
