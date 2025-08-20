import { Link } from 'react-router-dom';

function ItemListContainer({ greeting }) {
  const productos = [
    { id: '1', nombre: 'Hotel Patagonia', descripcion: 'Vista al lago, desayuno incluido.' },
    { id: '2', nombre: 'Excursión Cerro Catedral', descripcion: 'Día completo en la nieve.' },
    { id: '3', nombre: 'Renta de Auto 4x4', descripcion: 'Vehículo para 5 personas.' },
  ];

  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <Link to={`/producto/${producto.id}`}>Ver más</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
