//Conexion

const listaProductos = () => fetch('https://').then(respuesta => respuesta.json());

const crearProducto = (nombre, precio, imagen, categoria, descripcion) => {
  return fetch('    ', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, precio, imagen, id: uuid.v4(), categoria, descripcion })
  });
};

const eliminarProducto = (id) => {
  return fetch(`.app/productos/${id}`, {
    method: "DELETE"
  });
};

//Detalles del producto por ID

const detalleProducto = async (id) => {
  return fetch(`.app/productos/${id}`).then(respuesta => respuesta.json());
};

const actualizarProducto = (nombre, precio, imagen, id, categoria, descripcion) => {
  return fetch(`.app/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, precio, imagen, categoria, descripcion })
  }).then(respuesta => respuesta).catch(error => console.log(error));
};

export const clientServices = {
  listaProductos,
  detalleProducto,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};



