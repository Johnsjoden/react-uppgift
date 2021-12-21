import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../App'
export default function UserDetail() {
    const {
        data,
        setData
    } = useContext(DataContext)
    console.log(data)
    return (
        <div>
            <p>{data.firstName} {data.lastName} {data.email}</p>
            
        </div>
    )
}
