import React, { useState } from 'react';
/* import PropTypes from 'prop-types';
 */
const Formulario = ({guardarBuscarletra}) => {

   //state
   const [ buscar, guardarBuscar ] = useState({
      artista: '',
      cancion: ''
   });
   const [ error, guardarError ] = useState(false);

   const { artista, cancion } = buscar;

   //funcion a cada input para leer su contenido
   const actualizarState = e =>{
      guardarBuscar({
         ...buscar,
         [e.target.name]: e.target.value
      });
   }

   const buscarInformacio = e =>{
      e.preventDefault();

      if(artista.trim() === '' || cancion.trim === ''){
         guardarError(true);
         return;
      }

      guardarError(false);
      
      //Todo bien, para el comenente principal
      guardarBuscarletra(buscar);
   }

   return (
      <div className="bg-info">
         <div className="container">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorio</p>: null}
            <div className="row">
               <form
                  onSubmit={buscarInformacio}
                  className="col card text-white bg-transparent mb-5 pt-5 pb-2"
               >
                  <fieldset>
                     <legend className="text-center">Buscador Letras</legend>

                     <div className="row">
                        <div className="col-md-6">
                           <div className="form-group">
                              <label>Artista</label>
                              <input 
                                 type="text"
                                 className="form-control"
                                 name="artista"
                                 placeholder="Nombre Artista"
                                 onChange = {actualizarState}
                                 value={artista}
                              />
                           </div>
                        </div>
                        <div className="col-md-6">
                           <div className="form-group">
                              <label>Canción</label>
                              <input 
                                 type="text"
                                 className="form-control"
                                 name="cancion"
                                 placeholder="Nombre Canción"
                                 onChange = {actualizarState}
                                 value={cancion}
                              />
                           </div>
                        </div>
                     </div>

                     <button
                        type="submit"
                        className="btn btn-primary float-right"
                     >Buscar</button>
                  </fieldset>
               </form>
            </div>
         </div>
      </div>
   );
};

/* Formulario.propTypes = {
   
}; */

export default Formulario;