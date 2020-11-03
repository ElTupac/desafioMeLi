# api
Esto es un simple handler de request del cliente que se encarga de ordenar los datos pedidos por el cliente. Tiene solo 2 endPoints los cuales son:
- `api/items?search=[busqueda]`
- `api/items/:_id`

El primero se encarga de devolver los resultados de la busqueda, en este caso con un limite de 4 articulos pero es modificable mediante un archivo .env en el root del proyecto.
El segundo endPoint es para devolver los datos particulares de un producto. Dado un id consultara por ese producto en particular en la api de mercadolibre y armara un nuevo json con los datos que se desean.

El proyecto en node puede correrse con `npm run start` o `npm run dev` para desarrollo.
