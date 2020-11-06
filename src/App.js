
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';
import axios from 'axios';

function App() {

  //definir state
  const [ buscarletra, guardarBuscarletra ] = useState({});
  const [ letra, guardarLetra ] = useState("");
  const [ info, guardarInfo ] = useState({});

  useEffect(()=>{

    if(Object.keys(buscarletra).length === 0) return;

    const consultarAPILetra = async () =>{
      const { artista, cancion } = buscarletra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([
          axios(url),
          axios(url2),
      ]);

      console.log(letra.data.lyrics);
      
      guardarLetra(letra.data.lyrics);
      guardarInfo(informacion.data.artists[0]);

    }

    consultarAPILetra();

  },[buscarletra])

  return (
    <>
      <Formulario 
        guardarBuscarletra={guardarBuscarletra}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">  
            <Info 
              info={info}
            />
          </div>
          <div className="col-md-6">
            <Cancion 
              letra={letra}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
