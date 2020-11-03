# miniServer
Esta carpeta contiene un proyecto armado en Node.js con un enrutador de direccion basico que envia al usuario la pagina estatica creada en el proyecto de React, ya compilada obviamente. Para correrlo se debe usar los comandos `npm run start` o `npm run dev` en caso de necesitar cambiar cosas sobre la marcha.

Este mini servidor solo contiene el enrutador para el cliente, los endPoint que utiliza estan en el server api. Estos estan separados para funcionar independientemente del estado de este servidor. Pero los mismos endPoint pueden implementarse en este mismo proyecto para tener todo en un solo lugar.
