//import React, {Component} from "react";
import { Component } from 'react';
import API_URL from './API_URL';
import './Item.css';

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            'infoArticulo': undefined
        }
    }

    getInfo(_id){
        fetch(`${API_URL}/${_id}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            this.setState({'infoArticulo': data});
        });
    }

    componentDidMount(){
        const idArticulo = this.props.match.params.id;
        this.getInfo(idArticulo);
    }

    render(){
        if(this.state.infoArticulo){
            let data = this.state.infoArticulo;
            let categorias = '';
            if(data.item.categories.length > 0){
                categorias = data.item.categories[0].name;
                for(let i = 0; i < data.item.categories.length; i++){
                    categorias += ` > ${data.item.categories[i].name}`;
                }
            }

            return(
                <div className="itemDetailContainer">
                    <p className="breadCrumb">{categorias}</p>
                </div>
                
            )
        }

        return (
            <div></div>
        )
    }
}

export default Item;