import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";
const AddContacts = () => {
    const [fullName,setFullName] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const {actions} = useContext(Context)
    const handleSubmit= (e) => {
        e.preventDefault();
        const info = {
                "name": fullName,
                "phone": phone,
               "email": email,
                "address": address   
        }

        actions.crearContacto(info)
    }
    return(
    <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column">
            <p>AÑADIR CONTACTOS</p>
            <label>Full Name</label>
            <input type="text" value={fullName} onChange={(e)=> setFullName(e.target.value)}></input>
            <label>Email</label>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <label>Phone</label>
            <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)}></input>
            <label>Address</label>
            <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)}></input>
            <button>Enviar</button>
            
        </div>
        </form>
    )
}
export default AddContacts