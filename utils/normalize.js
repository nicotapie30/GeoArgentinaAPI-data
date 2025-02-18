// Función para normalizar cadenas de texto
export const normalize = (str) => {
  return str
    .replace(/ /g, "_")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};
