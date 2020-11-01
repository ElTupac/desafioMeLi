import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './ListItem.css';

class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            'goToItem': false
        }
    }

    render(){
        if(this.state.goToItem){
            const url = `/items/${this.props.data.id}`;
            return <Redirect to={url}/>;
        }

        if(this.props.data.free_shipping){
            var freeShipping = <img src="./circle.png" alt="Free Shipping" className="freeShippingIcon"/>
        }
        return(
            <div className="itemContainer">
                <a className="imgContainer" onClick={(e) => {this.setState({'goToItem': true})}}>
                    <img src={this.props.data.picture} alt={"thumbnail_" + this.props.data.id} className="imgItem"/>
                </a>
                <div className="infoContainer">
                    <p className="price">{"$" + this.props.data.price.decimals} {freeShipping}</p>
                    <a onClick={(e) => {this.setState({'goToItem': true})}} className="title">{this.props.data.title}</a>
                </div>
            </div>
            
        )
    }
}

export default ListItem;

//<Redirect to={`/items/${this.props.data.id}`}/>