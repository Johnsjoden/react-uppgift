import React, {useContext, useState}from 'react'
import Heading1 from '../components/Heading1'
import Input from '../components/Input'
import { Link, useNavigate} from 'react-router-dom'
import { DataContext } from '../App'
export default function HomePage() {
    const Navigation = useNavigate()
    const [name, setName] = useState("")
    const [organisationNr, setorganisationNr] = useState("")
    const [vatNr, setVatNr] = useState("SE")
    const [reference, setReference] = useState("")
    const [paymentTerm, setPaymentTerm] = useState("")
    const [website, setWebSite] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const {
        data,
        setData,
        list,
        setList,
        fetchData
    } = useContext(DataContext)
    function handleOnSubmit(e){
        e.preventDefault()
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
        const token = localStorage.getItem("webb21")
        const url = "https://frebi.willandskill.eu/api/v1/customers/"
        fetch(url, {
            method:"POST", 
            headers: {
                "Content-Type": "Application/json",
                "authorization": `Bearer ${token}`
            },
            body: JSON.stringify(payload)
        })
        .then(res => fetchData())
        }
        
        return (
        <div>
            <Heading1 text="Hello world" />
            <p>{data.firstName} {data.lastName} {data.email}</p>
            <form onSubmit={handleOnSubmit}>
            <Input type="text" placeholder="name" value={name} setValue={setName}/>
            <Input type="text" placeholder="organisationNr" value={organisationNr} setValue={setorganisationNr}/>
            <Input type="text" placeholder="vatNr" min="10" max="10" value={vatNr} setValue={setVatNr}/>
            <Input type="text" placeholder="reference" value={reference} setValue={setReference}/>
            <Input type="text" placeholder="paymentTerm" value={paymentTerm} setValue={setPaymentTerm}/>
            <Input type="text" placeholder="website" value={website} setValue={setWebSite}/>
            <Input type="text" placeholder="email" value={email} setValue={setEmail}/>
            <Input type="text" placeholder="phoneNumber" value={phoneNumber} setValue={setPhoneNumber}/>
                <button className='btn btn-primary'>Submit</button>
            </form>
            {list ? list.map((item, index ) => {
                return <p key={index}>
                    <Link to={`/home/${item.id}`}>{item.name}</Link>
                </p>
            }) : "Laddar"}
        </div>
    )
}
