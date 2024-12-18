# Validador-ID-EC 📋  
**Validador de números de identidad (NUI) y RUC de Ecuador**  

---

## **Descripción** 📝  
`validador-id-ec` es una librería ligera en JavaScript que valida números de identificación de ciudadanía (NUI) y Registro Único de Contribuyentes (RUC) específicos de Ecuador. Es ideal para aplicaciones web o backend que necesiten verificar la autenticidad de estos números.

---

## **Instalación** 💻  

Instala la librería desde **npm** usando el siguiente comando:

```bash
npm install validador-id-ec
```

---

## **Requisitos Previos** 🚀  

- **Node.js**: Versión `>=16.0.0`  
- **npm**: Asegúrate de tener **npm >=8.0.0** para una mejor compatibilidad.

---

## **Uso** 🛠️  

### **Importación en tu proyecto**  

Como la librería está configurada como **ES Module**, debes usar `import`:

```javascript
import { validar_nui, validar_ruc } from 'validador-id-ec';
```

---

### **Validar NUI (Número Único de Identidad)**

```javascript
import { validar_nui } from 'validador-id-ec';

const nuiValido = '0926687852';
const nuiInvalido = '1234567890';

console.log(validar_nui(nuiValido)); // true
console.log(validar_nui(nuiInvalido)); // false
```

---

### **Validar RUC (Registro Único de Contribuyentes)**

```javascript
import { validar_ruc } from 'validador-id-ec';

const rucValido = '0926687852001';
const rucInvalido = '1234567890001';

console.log(validar_ruc(rucValido)); // true
console.log(validar_ruc(rucInvalido)); // false
```

---

## **API** 📚  

### **1. validar_nui(nui)**  
Valida si un número de identificación ecuatoriano (NUI) es correcto.  
- **Parámetro**: `nui` → `string` o `number` (Debe contener exactamente 10 dígitos numéricos).  
- **Retorno**: `boolean` → `true` si es válido, `false` si es inválido.  

#### Ejemplo:  
```javascript
validar_nui('0926687852'); // true
validar_nui('1234567890'); // false
```

---

### **2. validar_ruc(ruc)**  
Valida si un número RUC ecuatoriano es correcto.  
- **Parámetro**: `ruc` → `string` o `number` (Debe contener exactamente 13 dígitos numéricos).  
- **Retorno**: `boolean` → `true` si es válido, `false` si es inválido.  

#### Ejemplo:  
```javascript
validar_ruc('0926687852001'); // true
validar_ruc('1234567890001'); // false
```

---

## **Ejecutar Pruebas** 🧪  

El proyecto cuenta con pruebas unitarias usando **Mocha** y **Chai**.

1. Clona el repositorio:  
   ```bash
   git clone https://github.com/gabvillacis/validador-id-ec.git
   cd validador-id-ec
   ```

2. Instala las dependencias:  
   ```bash
   npm install
   ```

3. Ejecuta las pruebas:  
   ```bash
   npm test
   ```

---

## **Compatibilidad** ✅  

| Requisito          | Versión mínima |
|---------------------|---------------|
| Node.js            | 16.0.0        |
| npm                | 8.0.0         |

---

## **Licencia** 📄  

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo `LICENSE` para más detalles.

---

## **Contribuciones** 🤝  

¡Las contribuciones son bienvenidas! Si deseas mejorar esta librería, puedes hacerlo de la siguiente manera:  

1. Haz un **fork** del repositorio.  
2. Crea una nueva rama:  
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz **commit**:  
   ```bash
   git commit -m "Agrega nueva funcionalidad X"
   ```
4. Sube tus cambios:  
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un **Pull Request**.

---

## **Notas Finales** 📌  

Esta librería es ideal para desarrolladores y equipos que trabajen en aplicaciones ecuatorianas donde la validación de números de identificación sea necesaria.

¡Espero que te sea útil! 🎉

---

### **Comandos Rápidos**

- **Instalación**: `npm install validador-id-ec`  
- **Ejecutar pruebas**: `npm test`  
- **Importar**: `import { validar_nui, validar_ruc } from 'validador-id-ec';`  