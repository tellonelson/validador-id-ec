import { esNumero } from './utils.js';

// Valida el Número Único de Identidad (NUI)
export function validar_nui(nui) {
    if (typeof nui === 'number') {
        nui = nui.toString();
    }

    if (typeof nui !== 'string') {
        throw new Error('El NUI debe ser una cadena de texto');
    }

    if (!esNumero(nui)) return false; // Verifica que solo contenga números
    if (nui.length !== 10) return false; // El NUI debe tener exactamente 10 dígitos

    const codigoProvincia = parseInt(nui.substring(0, 2));
    if (codigoProvincia <= 0 || (codigoProvincia >= 25 && codigoProvincia !== 30)) return false;

    const digitos = nui.split('').map(Number);
    const digitoVerificador = digitos.pop();
    const calculado = digitos.reduce(
        (anterior, actual, indice) =>
            anterior - (actual * (2 - indice % 2)) % 9 - (actual === 9) * 9,
        1000
    ) % 10;

    return calculado === digitoVerificador;
}

// Valida el RUC
export function validar_ruc(ruc) {
    if (typeof ruc === 'number') {
        ruc = ruc.toString();
    }

    if (typeof ruc !== 'string') {
        throw new Error('El RUC debe ser una cadena de texto');
    }

    if (!esNumero(ruc)) return false;
    if (ruc.length !== 13) return false;

    const codigoProvincia = parseInt(ruc.substring(0, 2));
    const ultimoDigito = parseInt(ruc.substring(12, 13));

    if (ultimoDigito <= 0) return false;
    if (codigoProvincia <= 0 || (codigoProvincia >= 25 && codigoProvincia !== 30)) return false;

    return true;
}
