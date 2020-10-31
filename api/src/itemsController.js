const fetch = require('node-fetch');

const apiML = 'https://api.mercadolibre.com';
const limite = 4;
const miNombre = {
    'name': 'Nehuen',
    'lastname': 'Covelo'
};
const infoNeeded = 'id,title,price,currency_id,available_quantity,thumbnail,condition,shipping,sold_quantity,category_id'

module.exports = {
    async getSearch(req, res){
        let searchKey = req.query.search;

        searchKey.replace(" ", "%20");

        fetch(`${apiML}/sites/MLA/search?q=${searchKey}&limit=${limite}&attributes=results,filters`)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            let categorias;
            if(respuesta.filters[0]) categorias = respuesta.filters[0].values[0].path_from_root;
            else categorias = [];
            let items = respuesta.results;
            let busqueda = new Busqueda(miNombre, categorias, items);

            return res.json(busqueda.busqueda);
        })
        .catch(err => {
            console.log(err);
            return res.json({'err': 'Error interno del servidor'});
        });
    },

    async getItem(req, res){
        let _id = req.params.id;

        fetch(`${apiML}/items/${_id}?attributes=${infoNeeded}`)
        .then(respuesta => respuesta.json())
        .then(respuesta => {

            if(respuesta.status == 404) return res.json({'err': 'ID de item inexistente'});
            
            const datos = respuesta;
            console.log(respuesta);
            var articulo = new Item(datos);

            fetch(`${apiML}/items/${_id}/description?attributes=plain_text`)
            .then(respuesta => respuesta.json())
            .then(respuesta => {
                if(respuesta.plain_text)articulo.agregarDescripcion(respuesta.plain_text);
                fetch(`${apiML}/categories/${datos.category_id}?attributes=path_from_root`)
                .then(respuesta => respuesta.json())
                .then(respuesta => {
                    if(respuesta.path_from_root)articulo.agregarCategorias(respuesta.path_from_root);
                    articulo.agregarAutor(miNombre);

                    return res.json(articulo.item);
                })
                .catch(err => {
                    console.log(err);
                    return res.json({'err': 'Error interno del servidor'});
                })
            })
            .catch(err => {
                console.log(err);
                return res.json({'err': 'Error interno del servidor'});
            })
        })
        .catch(err => {
            console.log(err);
            return res.json({'err': 'Error interno del servidor'});
        });
    }
}

class Busqueda{
    constructor(author, categorias, itemsCrudos){
        this.busqueda = {
            'author': {
                'name': author.name,
                'lastname': author.lastname
            },
            'categories': categorias,
            'items': this.organizarItems(itemsCrudos)
        }
    }

    organizarItems = (array) => {
        let nuevoArray = [];
        array.forEach(item => {
            nuevoArray.push(new Item(item).item);
        });

        return nuevoArray;
    };
}

class Item{     
    constructor(itemCrudo){
        this.item = {
            'id': itemCrudo.id,
            'title': itemCrudo.title,
            'price': {
                'amount': itemCrudo.available_quantity || 0,
                'currency': itemCrudo.currency_id || '',
                'decimals': itemCrudo.price || 0
            },
            'picture': itemCrudo.thumbnail || '',
            'condition': itemCrudo.condition || '',
            'free-shipping': itemCrudo.shipping ? itemCrudo.shipping.free_shipping : '',
            'description': "",
            'categories': []
        }
    }

    agregarAutor = (autor) => {
        this.item = {
            'author': {
                'name': autor.name,
                'lastname': autor.lastname
            },
            'item': this.item
        }
    }

    agregarDescripcion = (descripcion) => {
        this.item.description = descripcion;
    }

    agregarCategorias = (categorias) => {
        this.item.categories = categorias;
    }
}