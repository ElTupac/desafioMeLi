import { Component } from "react";
import './NoItem.css';

class NoItem extends Component{
    render(){
        return(
            <div className="noItemContainer">
                <div className="noItem2Container">
                    <div className="noItemIconContainer">
                        <img src="./noPage.png" alt="404Item"/>
                    </div>
                    <div className="noItemInfoContainer">
                    <h3 className="noItemTitle">No encontramos el item "<strong>{this.props.wrongId}</strong>"</h3>
                    <p className="noItemCheck">Intenta buscarlo nuevamente</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoItem;