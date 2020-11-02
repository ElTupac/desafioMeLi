import { Component } from 'react';
import './Item.css';
import Loading from './Loading';
import NoItem from './NoItem';
import API_URL from './API_URL';

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
            if(this.state.infoArticulo.err) return <NoItem wrongId={this.props.match.params.id}/>

            let data = this.state.infoArticulo;
            let categorias = '';
            if(data.item.categories.length > 0){
                categorias = data.item.categories[0].name;
                for(let i = 0; i < data.item.categories.length; i++){
                    categorias += ` > ${data.item.categories[i].name}`;
                }
            }

            const condition = (this.state.infoArticulo.item.condition == "new") ? "Nuevo" : "Usado";
            let disponibles;
            if(this.state.infoArticulo.item.price.amount == 1) disponibles = "Ultimo disponible!";
            else if(this.state.infoArticulo.item.price.amount > 1) disponibles = `${this.state.infoArticulo.item.price.amount} disponibles`;
            else disponibles = "No queda stock!";

            const currency = (this.state.infoArticulo.item.price.currency == "ARS") ? "$" : this.state.infoArticulo.item.price.currency;
            const priceInt = parseInt(this.state.infoArticulo.item.price.decimals);
            const priceDecimals = this.state.infoArticulo.item.price.decimals - priceInt;
            let stringDecimals = (`${priceDecimals}`.length == 1) ? (priceDecimals + "0") : priceDecimals;

            return(
                <div className="fullItemContainer">
                    <p className="breadCrumb">{categorias}</p>
                    <div className="itemGeneral">
                        <div className="blockSup">
                            <img className="itemPicture" src={this.state.infoArticulo.item.picture} alt={"thumbnail_" + this.state.infoArticulo.item.id}/>
                            <div className="itemDetailContainer">
                                <p>{condition} - {disponibles}</p>
                                <h3>{this.state.infoArticulo.item.title}</h3>
                                <div className="priceContainer">
                                    <h1 className="itemPrice">{currency} {priceInt}</h1>
                                    <span>{stringDecimals}</span>
                                </div>
                                <button className="comprarButton">Comprar</button>
                            </div>
                        </div>
                        <div className="blockBot">
                            <h2>Descripcion del producto</h2>
                            <p>{this.state.infoArticulo.item.description}</p>
                        </div>
                    </div>
                </div>
                
            )
        }

        return (
            <Loading/>
        )
    }
}

export default Item;