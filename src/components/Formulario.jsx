import { useState } from "react";
import Error from "./Error";



  const Formulario = ({setEstudiantes, estudiantes}) => {

    const [documento, setDocumento] = useState('')
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [error, setError] = useState(false)

    const enviarFormulario = (e) =>{
      e.preventDefault()

      //validar campos
      if( [documento, nombre, apellido, correo, telefono].includes('') ){
        setError(true)
        return
      }else setError(false)

      //guardando
      const obj = {documento, nombre, apellido, correo, telefono}
      obj.id = getId()
      setEstudiantes([...estudiantes, obj])
      limpiarCampos()
   
    }

    
    const getId = () => {
   let id = (Math.random().toString(36)+Date.now().toString(36).substring(2)+Date.now().toString(36))
   return id 
    }
     
    const limpiarCampos = () => {
      setDocumento('')
      setNombre('')
      setApellido('')
      setTelefono('')
      setCorreo('')
      setError(false)
      }
  


    
 

  return (
    <div className="col-md-5 mt-2">
      <form onSubmit={enviarFormulario}>
        <div className="card">
          <div className="card-header">Formulario</div>
          { error && <Error otra="mas props" mensaje= 'Los campos son obligatorios' /> }
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Documento:
              </span>
              <input type="number" className="form-control" value= {documento}
              onChange = { (e) => setDocumento(e.target.value)}/>
          
              
              
            
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1" >
                Nombre:
              </span>
              <input type="text" className="form-control" value={nombre} onChange = { (e) => setNombre(e.target.value)}/>
              
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Apellido:
              </span>
              <input type="text" className="form-control" value={apellido} onChange = { (e) => setApellido(e.target.value)}/>
            
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Teléfono:
              </span>
              <input type="tel" className="form-control" value={telefono}  onChange = { (e) => setTelefono(e.target.value)}/>
             
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                Correo:
              </span>
              <input type="email" className="form-control"value={correo}   onChange = { (e) => setCorreo(e.target.value)}/>
            
            </div>

            <div className="d-grid ">
              <input type="Submit" className="btn btn-success" />
            </div>

            <div className="d-grid ">
              <input type="reset" className="btn btn-info my-2" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Formulario;
