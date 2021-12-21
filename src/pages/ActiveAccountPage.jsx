import React from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import { useNavigate } from 'react-router-dom'
export default function ActiveAccountPage() {
        const navigate = useNavigate()
        let location = useLocation()
        let url = new URL("http://localhost:3000/login?uid=OTI2&token=5wr-eb7341373af03951694f")
        let params = new URLSearchParams(url.search)
        let token = params.get("token")
        let uid = params.get("uid")
        console.log(token)
        console.log(uid)
        useEffect(() => {
            const url = "https://frebi.willandskill.eu/auth/users/activate/"
            const payload = {
                token,
                uid
            }
            fetch(url, {
                method: "POST",
                headers: {"content-type": "application/json"},
                body: JSON.stringify(payload)
            })
            .then(res => navigate("/"))
        },[])
    return (
        <div>
            
        </div>
    )
}
