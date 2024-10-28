import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import CardContact from "../component/CardContact";
import { useContext,useEffect } from "react";


export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.contacts);

	useEffect(() => {
		actions.crearAgenda()
    	actions.obtenerContactos()
	}, [])


	return(
	<div className="text-center mt-5">
		<h1>Mis Contactos!</h1>
		<p>
				<img src="https://img.freepik.com/vector-gratis/icono-suministros-escolares-bloc-notas_24877-83689.jpg?semt=ais_hybrid" alt="Icono de suministros escolares" />
			</p>
	</div>
);

}

