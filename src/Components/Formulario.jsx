import { useState, useEffect } from "react";

const Formulario =({listaPacientes,setlistaPacientes, paciente,setPaciente})=>{
    
    
 const  [nombre, setNombre] = useState('');
 const  [propietario, setpropietario] = useState('');
 const  [fecha, setFecha] = useState('');
 const  [comentario, setComentario] = useState('');
 const  [email, setEmail] = useState('');
 

 useEffect(() => {
    
    if (Object.keys(paciente).length>0)
    {
        setNombre(paciente.nombre);
        setpropietario(paciente.propietario);
        setFecha(paciente.fecha);
        setComentario(paciente.comentario);
        setEmail(paciente.email);
    }

  },[paciente]);

 const agregarid=()=>{
    const numero = Math.random().toString(36).substr(2);
    const fecha  =  Date.now().toString(36);
    return numero+fecha; 
 }

 const objetoPaciente = {
    nombre
    , propietario
    , fecha
    , comentario
    , email 
    , id: agregarid()
 } 
    
 

const EnvioFormulario =(e)=> {
    debugger
    e.preventDefault();
        
        if ([nombre,propietario,fecha,comentario,email].includes('')){
            alert("campos vacios");
        }
         
        if (Object.keys(paciente).length>0){
            
           const backuplistap =  listaPacientes.map((xpaciente)=>{
                                    if (xpaciente.id ===paciente.id){
                                            return  objetoPaciente 
                                    }else {
                                            return  xpaciente 
                                    }
            });
            
            setlistaPacientes(backuplistap);
            setPaciente =({});
        }
        else {
            setlistaPacientes([...listaPacientes,objetoPaciente]);
        }
        setNombre('');
        setpropietario('');
        setFecha('');
        setComentario('');
        setEmail('');
}


    

return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center"> Seguimiento Pacientes</h2>
        <p className="text-indigo-600 font-black text-center m-5"> 
            Agregar y Administrar Pacientes
        </p>

        <form className="bg-white shadow-md rounded-lg py-10 px-5" onSubmit={EnvioFormulario}> 
            <div className="mb-3">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota </label> 
                <input 
                    id="mascota" 
                    type="text" 
                    placeholder="Nombre de la mascota" 
                    className="border-2 w-full p-1 mt-2 placeholder-blue-500"
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    
                />
            </div>

            <div className="mb-3">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre Propietario </label> 
                <input id="propietario" type="text"
                 placeholder="Nombre propietario"
                  className="border-2 w-full p-1 mt-2 placeholder-blue-500"
                  value={propietario}
                   onChange={(e)=>setpropietario(e.target.value)}
                   
                  />
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Correo Electronico </label> 
                <input id="email" type="email" placeholder="Correo  Electronico"
                   className="border-2 w-full p-1 mt-2 placeholder-blue-500"
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   
                 />
            </div>

            <div className="mb-3">
                <label htmlFor="fechaalta" className="block text-gray-700 uppercase font-bold">Fecha Ingreso </label> 
                <input id="fechaalta" type="date"
                 placeholder="Fecha Alta"
                 value={fecha}
                 onChange={(e)=>setFecha(e.target.value)}
                 className="border-2 w-full p-1 mt-2 placeholder-blue-500"/>
            </div>

            <div className="mb-3">
                <label htmlFor="Sintomas" className="block text-gray-700 uppercase font-bold">Comentario </label> 
                <textarea id="Sintomas" 
                 placeholder="comentario" 
                 value={comentario}
                 onChange={(e)=>setComentario(e.target.value)}
                 className="border-2 w-full p-1 mt-2 placeholder-blue-500"/>
            </div>
            <input type="submit" 
                            className="bg-indigo-700 w-full rounded-lg p-2 text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer mb-3"
                            value = { (paciente.id)? "EDITAR" :  "AGREGAR PACIENTE"
                            } /> 
            
                         
                        
            </form>
    </div>
)

}
export default Formulario