import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: valuwe });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log(formData);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-96">
      <h1 className="text-2xl font-semibold mb-6">Registro de Usuario</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-gray-600">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="border w-full p-2 rounded"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border w-full p-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            className="border w-full p-2 rounded"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-600">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="border w-full p-2 rounded"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Registrarse</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
