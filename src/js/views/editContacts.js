import React, { useContext,useEffect } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
const EditContacts = () => {
    const {id}= useParams()
    const {store} = useContext(Context)
    
    const[name,setName]= useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    useEffect(() => {
        const contacto = store.contacts.filter((contact)=> contact.id == id)
        console.log(contacto);
        
        setName(contacto[0].name)
        setEmail(contacto[0].email)
        setPhone(contacto[0].phone)
        setAddress(contacto[0].address)
    },[])
    const {actions} = useContext(Context)
    const handleSubmit= (e) => {
        e.preventDefault();
        const info = {
                "name": name,
                "phone": phone,
               "email": email,
                "address": address,
                "id":id   
        }

        actions.editarContacto(info)
    }
    
    return(
    <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column">
            <p>AÑADIR CONTACTOS</p>
            <label>Full Name</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input>
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
export default EditContacts 