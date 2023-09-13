import React from 'react';
import React, { useState } from 'react';
import './Donaciones.css'; // Agrega los estilos correspondientes

function Donaciones() {
  const [donationData, setDonationData] = useState({
    nombre: '',
    cantidad: '',
  });

  const [donors, setDonors] = useState([]);// Estado para almacenar la lista de donantes

  // Manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonationData({ ...donationData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar la donación a la lista de donantes
    setDonors([...donors, donationData]);
    // Limpiar los campos del formulario
    setDonationData({ nombre: '', cantidad: '' });
  };

  return (
    <div className="donaciones">
      <h1>Donaciones</h1>
      <form className="donation-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={donationData.nombre}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cantidad"
          placeholder="Cantidad"
          value={donationData.cantidad}
          onChange={handleInputChange}
        />
        <button type="submit">Donar</button>
      </form>
      <div className="recent-donors">
        <h2>Últimos Donantes</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.nombre}</td>
                <td>{donor.cantidad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Donaciones;



