import React, { Component } from "react";
import './Search.css';
import ListItem from './ListItems';
import NoResults from './NoResults';
import Loading from './Loading';
import API_URL from './API_URL';



class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            'searchInfo': undefined
        };
    }

    getInfo(searchKey){
        fetch(`${API_URL}?search=${searchKey}`)
        .then(respuesta => respuesta.json())
        .then(data => {
            this.setState({'searchInfo': data});
        });
    }

    componentDidMount(){
        let param = (new URL(document.location)).searchParams;
        let searchKey = param.get('search');
        this.getInfo(searchKey);
    }

    render(){
        
        if(this.state.searchInfo){
            if(!this.state.searchInfo.items.length){
                let param = (new URL(document.location)).searchParams;
                let searchKey = param.get('search');
                return <NoResults searchKey={searchKey}/>;
            }

            const data = this.state.searchInfo;
            var categorias = '';
            if(data.categories.length > 0){
                categorias = data.categories[0].name;
                for(let i = 1; i < data.categories.length; i++){
                    categorias += ` > ${data.categories[i].name}`;
                }
            }

            return(
                <div className="searchContainer">
                    <p className="breadCrumb">{categorias}</p>
                    {
                        data.items.map((item, index) => {
                            return <ListItem key={item.id} data={item}/>;
                        })
                    }
                </div>
            )
        }else{
            //Poner un gif de "cargando"
            return <Loading/>
        }
    }
}

export default Search;