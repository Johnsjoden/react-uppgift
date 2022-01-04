import React, {useContext} from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../App'
import Input from './Input'
export default function Detail({id}) {
    const [data, setData] = useState(null)
    const [name, setName] = useState("")
    const [organisationNr, setOrganisationNr] = useState("")
    const [vatNr, setVatNr] = useState("SE")
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")
    const [website, setWebSite] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const navigate = useNavigate()
    const {
        fetchData
    } = useContext(DataContext)
    useEffect(() => {
        fetchCostumerData()
    }, [])
    function fetchCostumerData(){
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem("webb21")
        fetch(url, {
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => 
            handleData(data)
        )
    }
    function handleData(data){
        setData(data)
        setEmail(data.email)
        setName(data.name)
        setOrganisationNr(data.organisationNr)
        setVatNr(data.vatNr)
        setReference(data.reference)
        setWebSite(data.website)
        setPhoneNumber(data.phoneNumber)
        setPaymentTerm(data.paymentTerm)
    }
    function handleOnSubmit(e) {
        e.preventDefault()
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem("webb21")
        fetch(url, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        })
        .then(res => fetchData(), navigate("/home"))}
        function handleOnUpDate(e){
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
            .then(res => fetchCostumerData())
        }
    return (
        <div>
            <div>
                {data &&
                <p>
                    <p>{data.name}</p>
                    <p>{data.organisationNr}</p>
                    <p>{data.vatNr}</p>
                    <p>{data.paymentTerm}</p>
                    <p>{data.email}</p>
                    <p>{data.phoneNumber}</p>
                    <p>{data.reference}</p>
                    <p>{data.website}</p>
                </p>}
            <form onSubmit={handleOnSubmit}>
                <button className='btn btn-primary '>DELETE</button>
            </form>
            </div>
            <div>
            <form onSubmit={handleOnUpDate}>
            <Input type="text" placeholder="name" value={name} setValue={setName}/>
            <Input type="text" placeholder="organisationNr" value={organisationNr} setValue={setOrganisationNr}/>
            <Input type="text" placeholder="vatNr" value={vatNr} setValue={setVatNr}/>
            <Input type="text" placeholder="reference" value={reference} setValue={setReference}/>
            <Input type="text" placeholder="paymentTerm" value={paymentTerm} setValue={setPaymentTerm}/>
            <Input type="text" placeholder="website" value={website} setValue={setWebSite}/>
            <Input type="text" placeholder="email" value={email} setValue={setEmail}/>
            <Input type="text" placeholder="phoneNumber" value={phoneNumber} setValue={setPhoneNumber}/>
                <button className='btn btn-primary'>Update</button>
            </form>
        </div>
        </div>
    )
}
