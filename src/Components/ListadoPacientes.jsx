import { useState, useEffect } from "react";
import Paciente from "./Paciente"

const ListadoPacientes = ({listaPacientes, setPaciente,eliminarPaciente})=> {

    return (
        <div className="md:w-1/2 ">
            <h2 className="font-black text-3xl text-center"> Listado de Pacientes</h2>
            <p className="text-indigo-600 font-black text-center m-5  "> 
                Administrar Pacientes
            </p>
            
              { 
                    listaPacientes.map((paciente)=>
                    
                            <Paciente paciente={paciente} 
                                      setPaciente={setPaciente}
                                      eliminarPaciente = {eliminarPaciente}
                                      key={paciente.id}
                            />  
                    )
              }
            

            
        </div>
    )
}

export default ListadoPacientes;
