/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../adduser/add.css";
import toast from 'react-hot-toast';

const Edit = () => {

 const users = {
    fname: "",
    lname: "",
    email: "",
    role: "" // Add the role field
 }

 const {id} = useParams();
 const navigate = useNavigate();
 const [user, setUser] = useState(users);
 const [adminExists, setAdminExists] = useState(false); // State to track if admin already exists

 const inputChangeHandler = (e) =>{
    const {name, value} = e.target;
    setUser({...user, [name]: value});
 }

 useEffect(()=>{
    // Fetch the user data
    axios.get(`http://localhost:8000/api/getone/${id}`)
    .then((response)=>{
        setUser(response.data);
        // Check if the current user is an admin and if admin already exists
        if (response.data.role === 'Admin') {
            setAdminExists(true);
        }
    })
    .catch((error)=>{
        console.log(error);
    });

    // Check if an admin exists on load
    axios.get("http://localhost:8000/api/getall")
    .then((response) => {
        const adminUser = response.data.find(user => user.role === 'Admin');
        if (adminUser) {
            setAdminExists(true);
        }
    })
    .catch((error) => {
        console.log(error);
    });
 }, [id]);

 const submitForm = async(e) => {
    e.preventDefault();
    // If trying to make another user an admin and admin already exists, show error
    if (user.role === 'Admin' && adminExists) {
        toast.error('An admin already exists. Only one admin is allowed!', { position: "top-right" });
        return;
    }

    await axios.put(`http://localhost:8000/api/update/${id}`, user)
    .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
    })
    .catch((error) => console.log(error));
 }

 return (
    <div className='addUser'>
        <Link to={"/"}>Back</Link>
        <h3>Update User</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First Name</label>
                <input 
                    type="text" 
                    value={user.fname} 
                    onChange={inputChangeHandler} 
                    id="fname" 
                    name="fname" 
                    autoComplete='off' 
                    placeholder='First Name' 
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">Last Name</label>
                <input 
                    type="text" 
                    value={user.lname} 
                    onChange={inputChangeHandler} 
                    id="lname" 
                    name="lname" 
                    autoComplete='off' 
                    placeholder='Last Name' 
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    value={user.email} 
                    onChange={inputChangeHandler} 
                    id="email" 
                    name="email" 
                    autoComplete='off' 
                    placeholder='Email' 
                />
            </div>
            <div className="inputGroup">
                <label htmlFor="role">Role</label>
                <select 
                    name="role" 
                    id="role" 
                    value={user.role} 
                    onChange={inputChangeHandler} 
                    disabled={adminExists && user.role === 'Admin'} // Disable role change if the current user is admin
                >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                    <option value="Guest">Guest</option> {/* Added the Guest role */}
                </select>
            </div>
            <div className="inputGroup">
                <button type="submit">UPDATE USER</button>
            </div>
        </form>
    </div>
 )
}

export default Edit;