import { useState, useEffect } from "react";
import Header from  "./Components/Header"
import Formulario from "./Components/Formulario"
import ListadoPacientes from "./Components/ListadoPacientes"


function App() {
  
  const [listaPacientes, setlistaPacientes] = useState([]);
  const [paciente, setPaciente]= useState({});

  useEffect(()=>{
    const ObtenerLocalStorage = ()=>{
      const PacientesLocalStorage = JSON.parse(localStorage.getItem('ListaPacientes'))??[];
      setlistaPacientes(PacientesLocalStorage);
    }
    ObtenerLocalStorage();
  })

  useEffect(()=>{
    localStorage.setItem('ListaPacientes',  JSON.stringify(listaPacientes));
  }, [listaPacientes])
  
  const eliminarPaciente = (idpaciente)=>{
    
    let confirmation  = false; 
        confirmation = confirm("Esta seguro que desea eliminar el registro");
        if (confirmation){
          
          if (Object.keys(idpaciente).length>0)
          {
            
              let backuplistap =  listaPacientes.filter((pacientex)=>
                       (pacientex.id !==idpaciente.id)
                 )
                 
                if (backuplistap.length >0 ){
                  debugger
                  setlistaPacientes(backuplistap);
                }
                else {
                  debugger
                  setlistaPacientes([]);
                }
          }
        }
  }

  return (
    <div className="container mx-auto mt-20 bg-gray-200">
       <Header/> 
        <div className="mt-12  md:flex"> 
            <Formulario 
            listaPacientes= {listaPacientes}
            setlistaPacientes = {setlistaPacientes} 
            paciente = {paciente}
            setPaciente ={setPaciente}
            />

            <ListadoPacientes
              listaPacientes={listaPacientes} 
              setPaciente ={setPaciente}
              setlistaPacientes = {setlistaPacientes}
              eliminarPaciente = {eliminarPaciente}
              />
            
        </div>
    </div>
  )
}

export default App
