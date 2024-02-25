import React, { useState } from "react"
import { Button } from "react-bootstrap"

const Formulario = ({ agregarColaborador, setAlertMessage, setAlertColor }) => {
  const [colaborador, setColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !colaborador.nombre ||
      !colaborador.correo ||
      !colaborador.edad ||
      !colaborador.cargo ||
      !colaborador.telefono
    ) {
      setAlertMessage("¡Completa todos los campos!");
      setAlertColor("danger");
      return;
    }
    agregarColaborador(colaborador);
    setColaborador({
      nombre: "",
      correo: "",
      edad: "",
      cargo: "",
      telefono: "",
    });
    setAlertMessage("Colaborador agregado exitosamente");
    setAlertColor("success");
  };

  const handleChange = (e) => {
    setColaborador({
      ...colaborador,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={colaborador.nombre}
            onChange={handleChange}
            placeholder="Nombre del colaborador"
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={colaborador.correo}
            onChange={handleChange}
            placeholder="Email del colaborador"
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            className="form-control"
            id="edad"
            name="edad"
            value={colaborador.edad}
            onChange={handleChange}
            placeholder="Edad del colaborador"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="cargo"
            name="cargo"
            value={colaborador.cargo}
            onChange={handleChange}
            placeholder="Cargo del colaborador"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={colaborador.telefono}
            onChange={handleChange}
            placeholder="Teléfono del colaborador"
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary" size="lg">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
