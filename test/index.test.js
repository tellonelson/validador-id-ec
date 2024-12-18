import { expect } from 'chai';
import { validar_nui, validar_ruc } from '../src/index.js';

describe('Validador de Identidad de Ecuador', () => {
    describe('validar_nui', () => {
        it('Debe validar un NUI correcto', () => {
            expect(validar_nui('1719690487')).to.be.true;
        });

        it('Debe rechazar un NUI con longitud incorrecta', () => {
            expect(validar_nui('09266878')).to.be.false;
        });

        it('Debe rechazar un NUI con caracteres no numéricos', () => {
            expect(validar_nui('09266878A2')).to.be.false;
        });
    });

    describe('validar_ruc', () => {
        it('Debe validar un RUC correcto', () => {
            expect(validar_ruc('0990828237001')).to.be.true;
        });

        it('Debe rechazar un RUC con longitud incorrecta', () => {
            expect(validar_ruc('092668785')).to.be.false;
        });

        it('Debe rechazar un RUC con caracteres no numéricos', () => {
            expect(validar_ruc('0926687852A01')).to.be.false;
        });
    });
});
