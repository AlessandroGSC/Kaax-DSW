import axios from 'axios';
import { URL_API } from '../utils/enviroments';

export async function getSolicitudDetalle(idPostulacion) {
  console.log('Valor de postulacion:', idPostulacion);
  try {
    const response = await axios.get(URL_API + `postulaciones/postulacion/${idPostulacion}`);
    console.log('Respuesta de la API:', response.data);
    const data = response.data.map(detalle => ({
      idPostulacion: detalle[0],
      tituloPublicacion: detalle[1],
      nombreUsuario: detalle[2],
      userImage: detalle[3],
      fechaPostulacion: detalle[4],
      comment: detalle[5],
    }));
    console.log('Datos de la API:', data);
    return data;
  } catch (error) {
    console.error('Error al obtener las postulaciones:', error);
    return [];
  }
}

export async function aceptarPostulacion(idPostulacion) {
  try {
    const response = await axios.post(URL_API + `postulaciones/${idPostulacion}/aceptar`);
    console.log('acp:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al aceptar la postulación:', error);
    throw error;
  }
}

export async function rechazarPostulacion(idPostulacion) {
  try {
    const response = await axios.post(URL_API + `postulaciones/${idPostulacion}/rechazar`);
    console.log('rech:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error al rechazar la postulación:', error);
    throw error;
  }
}
