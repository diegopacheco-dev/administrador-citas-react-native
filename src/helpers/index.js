export const formatearFecha = date => {
  const fechaFormateada = new Date(date);
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return fechaFormateada.toLocaleDateString('es-ES', opciones);
};
