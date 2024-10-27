import { stringify } from "query-string";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts : [],
			contacto: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			obtenerContactos: () =>{
				fetch('https://playground.4geeks.com/contact/agendas/mario-ab/contacts')
				.then((response) =>{console.log(response)
					if (!response.ok) {
						getActions().crearAgenda()
					} else{
						return response.json()
					}
				})
				.then((data) =>{
					console.log(data)
					setStore({contacts: data.contacts })
					const store = getStore()
					console.log(store.contacts)
				})
				.catch((error)=> {console.log(error);
				})
	
				},
				crearAgenda: () => {
					fetch('https://playground.4geeks.com/contact/agendas/mario-ab', { 
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify()
					})
					.then((response) => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log(data);
						
						
					})
					.catch((error) => {console.log(error);
					});
				},
				crearContacto: (contacto) => {
					fetch('https://playground.4geeks.com/contact/agendas/mario-ab/contacts',{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contacto)
					})
					.then((response) => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log(data);
						
						
					})
					.catch((error) => {console.log(error);
					});

				},
				editarContacto: (contacto) => {
					fetch(`https://playground.4geeks.com/contact/agendas/mario-ab/contacts/${contacto.id}`,{
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contacto)
					})
					.then((response) => {
						console.log(response);
						return response.json();
					})
					.then((data) => {
						console.log(data);
						getActions().obtenerContactos();
						
						
					})
					.catch((error) => {console.log(error);
					});
				},
				
				eliminarContacto: (id) => {
					const myHeaders = new Headers();
					myHeaders.append("accept", "application/json");
					const requestOptions = {
					  method: "DELETE",
					  headers: myHeaders,
					};
					fetch(
					  `https://playground.4geeks.com/contact/agendas/mario-ab/contacts/${id}`,
					  requestOptions
					)
					  .then(() => {
						getActions().obtenerContactos();
					  })
					  .catch((error) => console.error(error));
				  },

			}
				
		}
		
	};
		
		
	


export default getState;
