import React,{Component} from "react";
import '../CSS/form.css';
import '../CSS/button.css'


export default class Formulario extends Component{


    constructor(props){
        super(props);
        this.state = {
            nombre:"",
            usuario:"",
            correo:"",
        };
    }

    AgregarUsuario = (e) => {
        e.preventDefault();

        this.props.FuncionAgregar(this.state.nombre, this.state.usuario, this.state.correo);

        //AGREGAR EL USUARIO
        this.InicializarEstado();
    }

    InicializarEstado = (e) => {
        this.setState({nombre: "" , usuario: "", correo: ""});
    }


    AsignarEstados = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }




    render(){
        return(
            <div>
                <form id="formularioUsuario" onSubmit={this.AgregarUsuario}>
                    <input 
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingrese el nombre del usuario"
                        required={true}
                        value={this.state.nombre}
                        onChange={this.AsignarEstados}
                    />
                    <input 
                         type="text"
                         id="usuario"
                         name="usuario"
                         placeholder="Ingrese el usuario"
                         required={true}
                         value={this.state.usuario}
                         onChange={this.AsignarEstados}
                    />
                     <input 
                         type="email"
                         id="correo"
                         name="correo"
                         placeholder="usuario@dominio.ext"
                         required={true}
                         value={this.state.correo}
                         onChange={this.AsignarEstados}
                    />

                    <div>
                        <button className="success">Agregar Usuario</button>
                        <button className="warning">Limpiar</button>
                    </div>
                </form>
            </div>
            
            )
    }
}