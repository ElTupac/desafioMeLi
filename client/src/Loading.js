import { Component } from "react";
import './Loading.css';


class Loading extends Component{
    render(){
        return(
        <div className="loadingContainer">
            <img src="./rollingCharging.gif" alt="Cargando..."/>
        </div>
        )
    }
}

export default Loading;