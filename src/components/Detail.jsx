import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Detail({id}) {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`
        const token = localStorage.getItem("webb21")
        fetch(url, {
            headers: {
                "Content-type": "application/json",
                "authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
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
        .then(res => navigate("/home"))}
    return (
        <div>
            <div>
                {data ? 
                <p>
                    <p>{data.name}</p>
                    <p>{data.organisationNr}</p>
                    <p>{data.vatNr}</p>
                    <p>{data.paymentTerm}</p>
                    <p>{data.email}</p>
                    <p>{data.phoneNumber}</p>
                    <p>{data.reference}</p>
                    <p>{data.website}</p>
                </p>
            :"Laddar"}
            <form onSubmit={handleOnSubmit}>
                <button className='btn btn-primary '>DELETE</button>
            </form>
            </div>          
        </div>
    )
}
