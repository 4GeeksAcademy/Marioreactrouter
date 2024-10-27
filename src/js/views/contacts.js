import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const Contacts = () => {
    const {store, actions} = useContext(Context)
    useEffect (()=> {
        actions.crearAgenda()
        actions.obtenerContactos()
        console.log(store.contacts);
        
    },[])
    return (
        <>
         <div className="container">
            {store.contacts.map((contact) => {
                console.log(contact);
                
                return(
                    <div className="card mb-3 mx-auto" style={{ maxWidth: "1500px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img
                        src="https://via.placeholder.com/150" 
                        className="img-fluid rounded-start"
                        alt="Profile"
                        />

                        </div>
                        
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{contact.name}</h5>
                                <p className="card-text" >
                                    <i class="fa-sharp fa-solid fa-location-pin"></i>
                                {contact.address}
                                </p>
                                <p className="card-text">
                                    <i class="fa-solid fa-phone"></i>
                                    {contact.phone}        
                                </p>
                                <p className="card-text">
                                <i class="fa-solid fa-envelope"></i>
                                    {contact.email}        
                                </p>
                            </div>
                            <div>
                            <button onClick={()=>actions.eliminarContacto(contact.id)} className="btn btn-danger">
                                Delete
                            </button>
                            <Link to={`/editcontacts/${contact.id}`} className="btn btn-primary ms-2">
                                Edit
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
            </div>
        </>
    )
};

export default Contacts;


