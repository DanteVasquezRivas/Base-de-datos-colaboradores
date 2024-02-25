import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Listado from "./components/Listado"
import Formulario from "./components/Formulario"
import Alert from "./components/Alert"
import Buscador from "./components/Buscador"
import { BaseColaboradores } from "./assets/js/BaseColaboradores"

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colaboradoresOriginal, setColaboradoresOriginal] = useState(BaseColaboradores);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertColor, setAlertColor] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    if (
      !nuevoColaborador.nombre ||
      !nuevoColaborador.correo ||
      !nuevoColaborador.edad ||
      !nuevoColaborador.cargo ||
      !nuevoColaborador.telefono
    ) {
      setAlertMessage("Por favor completa todos los campos");
      setAlertColor("danger");
    } else {
      setColaboradores([
        ...colaboradores,
        { id: colaboradores.length + 1, ...nuevoColaborador },
      ]);
      setColaboradoresOriginal([
        ...colaboradoresOriginal,
        { id: colaboradoresOriginal.length + 1, ...nuevoColaborador },
      ]);
      setAlertMessage("Colaborador agregado exitosamente");
      setAlertColor("success");
    }    
  };

  return (
    <>
      <div class="row  justify-content-center">
        <div class="col-sm-7">
          <div class="text-left">
            <div class="card-body ">
              <h1 class="card-title">Lista de colaboradores</h1>
              <Buscador
                colaboradores={colaboradores}
                setColaboradores={setColaboradores}
                colaboradoresOriginal={colaboradoresOriginal}
              />
              <Listado colaboradores={colaboradores} />
            </div>
          </div>
        </div>
        <div class="col-sm-3 mt-5">
          <div class="card-body">
            <h2 class="card-title mb-4">Agregar Colaborador</h2>
            <Formulario
              agregarColaborador={agregarColaborador}
              setAlertMessage={setAlertMessage}
              setAlertColor={setAlertColor}
            />
            <br />
            <Alert message={alertMessage} color={alertColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
