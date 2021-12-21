import React, { useEffect } from 'react'
import { useState } from 'react'
import Input from './Input'
export default function CostumDetail({id}) {
        const [name, setName] = useState("")
        const [organisationNr, setorganisationNr] = useState("")
        const [vatNr, setVatNr] = useState("SE")
        const [reference, setReference] = useState("")
        const [paymentTerm, setPaymentTerm] = useState("")
        const [website, setWebSite] = useState("")
        const [email, setEmail] = useState("")
        const [phoneNumber, setPhoneNumber] = useState("")
    function handleOnSubmit(e){
        e.preventDefault()
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem("webb21")
        const payload = {
            name,
            organisationNr,
            vatNr,
            reference,
            paymentTerm,
            website,
            email,
            phoneNumber

        }
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify(payload) 
        })
    }
    return (
        <div>
            <form onSubmit={handleOnSubmit}>
            <Input type="text" placeholder="name" value={name} setValue={setName}/>
            <Input type="text" placeholder="organisationNr" value={organisationNr} setValue={setorganisationNr}/>
            <Input type="text" placeholder="vatNr" value={vatNr} setValue={setVatNr}/>
            <Input type="text" placeholder="reference" value={reference} setValue={setReference}/>
            <Input type="text" placeholder="paymentTerm" value={paymentTerm} setValue={setPaymentTerm}/>
            <Input type="text" placeholder="website" value={website} setValue={setWebSite}/>
            <Input type="text" placeholder="email" value={email} setValue={setEmail}/>
            <Input type="text" placeholder="phoneNumber" value={phoneNumber} setValue={setPhoneNumber}/>
                <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
