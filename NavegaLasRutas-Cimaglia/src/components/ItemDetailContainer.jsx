import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const productos = [
      { id: '1', nombre: 'Hotel Patagonia', descripcion: 'Vista al lago, desayuno incluido.' },
      { id: '2', nombre: 'Excursión Cerro Catedral', descripcion: 'Día completo en la nieve.' },
      { id: '3', nombre: 'Renta de Auto 4x4', descripcion: 'Vehículo para 5 personas.' },
    ];

    const productoEncontrado = productos.find((p) => p.id === id);
    setProducto(productoEncontrado);
  }, [id]);

  if (!producto) {
    return <p>Cargando detalles del producto...</p>;
  }

  return (
    <div className="detalle-producto">
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
    </div>
  );
}

export default ItemDetailContainer;
