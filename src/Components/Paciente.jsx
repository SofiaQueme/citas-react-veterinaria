        //import Button from "../Components/Button"

const Paciente = ({paciente, setPaciente,eliminarPaciente})=>{

        
       
    return (
<div className="m-5 bg-indigo-400 rounded-md ">
                <div className="pt-3 pb-3 pl-5">
                    <label  className="block  uppercase font-bold ml-2 m-5">Nombre Mascota: {""} 
                            <span className="font-normal normal-case">{paciente.nombre} </span>
                    </label> 
                    
                    <label  className="block  uppercase font-bold ml-2 m-5">Nombre Propietario: {""} 
                            <span className="font-normal normal-case">{paciente.propietario} </span>
                    </label> 

                    <label  className="block  uppercase font-bold ml-2 m-5">Correo Electronico: {""} 
                            <span className="font-normal normal-case">{paciente.email} </span>
                    </label> 

                    <label  className="block  uppercase font-bold ml-2 m-5">Fecha Ingreso: {""} 
                            <span className="font-normal normal-case">{paciente.fecha} </span>
                    </label> 

                    <label  className="block  uppercase font-bold ml-2 m-5">Comentario: {""} 
                            <span className="font-normal normal-case">{paciente.comentario} </span>
                    </label> 
                    <label  className="block  uppercase font-bold ml-2 m-5">Id: {""} 
                            <span className="font-normal normal-case">{paciente.id} </span>
                    </label> 

                    <div className="flex justify-center mt-5">
                        <button  className="mr-10"
                        onClick={()=>setPaciente(paciente)}
                        type="button"
                        >  EDITAR </button> 

                        <button  onClick={()=> eliminarPaciente(paciente)}> ELIMINAR</button>
                    </div>
                    
                </div>
            </div>
)

}

export default Paciente