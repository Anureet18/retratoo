import React, { useEffect, useState } from 'react'
import { useAuth } from '../../store/auth'

export const AdminUsers = () => {
    const { authorizationToken } = useAuth();
    const [users, setUsers] = useState([]);

    const getAllUsersData = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                }
            })
            const data = await response.json();
            console.log(`users ${data}`)
            //now we need to store this data i.e. useState so that we can use loop/map
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <>
        <div className='container'>
            <h1>Admin Users Data</h1>
            {users.map((curUser, index) => {
                return <h2 key={index}>
                    {curUser.username}
                </h2>
            })}
        </div>
        </>
    )
}
