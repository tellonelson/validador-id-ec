// Verifica si una cadena contiene solo números
export function esNumero(valor) {
    return /^[0-9]+$/.test(valor);
}