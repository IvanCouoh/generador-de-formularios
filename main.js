const modal = document.getElementById('modal');
const btnExport = document.getElementById('btn-export');
const btnReset = document.getElementById('btn-reset-form');
const closeModal = document.getElementById('close-icon');
const container = document.getElementById('container_inputs');
const getForm = document.querySelector('#container_inputs')
var clipboard = new Clipboard('.btn');
const copyCode = document.getElementById('copy-code');
const alertID = document.getElementById('alert');

copyCode.addEventListener("click", () => {
    alertID.style.display = "block";
    setTimeout(() => {
        alertID.style.display = "none";
    }, 3000);
})

btnExport.addEventListener("click", () => {
    modal.style.display = "block";
    let text = document.getElementById("form").innerHTML;
    document.getElementById("code").innerText = text;
})

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
})

const removeElement = (label, input) => {
    const img = document.createElement('span');
    img.innerHTML = ' <i class="far fa-trash-alt" id="icon"></i> ';
    img.classList.add('remove-icon');
    container.appendChild(img, " ")
    img.addEventListener('click', function () {
        label.remove();
        input.remove();
        img.remove();
    });
}

const addInputSelect = () => {
    const elemSelect = document.createElement("select");
    const options = ["Selecciona una opción", "Opción A", "Opción B", "Opción C"];
    const elemLabel = document.createElement("label");

    for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];
        elemSelect.appendChild(option);
    }
    elemLabel.innerHTML = "Select";
    elemLabel.style.fontWeight = '600';
    elemLabel.style.marginTop = '10px';
    container.appendChild(elemLabel);
    container.appendChild(elemSelect);
    removeElement(elemSelect, elemLabel);
}

const addInput = (type) => {
    const elemInput = document.createElement("input");
    const elemLabel = document.createElement("label");
    elemLabel.style.marginTop = '10px';
    elemInput.type = type;

    switch (type) {
        case 'checkbox':
            elemLabel.innerHTML = 'Casilla de verificación';
            break;
        case 'date':
            elemLabel.innerHTML = 'Fecha';
            break;
        case 'datetime-local':
            elemLabel.innerHTML = 'Fecha y hora';
            break;
        case 'email':
            elemLabel.innerHTML = 'Email';
            break;
        case 'file':
            elemLabel.innerHTML = 'Archivo';
            break;
        case 'month':
            elemLabel.innerHTML = 'Calendario de meses';
            break;
        case 'number':
            elemLabel.innerHTML = 'Número';
            break;
        case 'password':
            elemLabel.innerHTML = 'Contraseña';
            break;
        case 'radio':
            elemLabel.innerHTML = 'Selección';
            break;
        case 'range':
            elemLabel.innerHTML = 'Rango';
            break;
        case 'reset':
            elemLabel.innerHTML = 'Botón de reiniciar formulario';
            break;
        case 'submit':
            elemLabel.innerHTML = 'Botón';
            elemInput.value = 'Botón';
            break;
        case 'tel':
            elemLabel.innerHTML = 'Teléfono';
            break;
        case 'text':
            elemLabel.innerHTML = 'Caja de texto';
            break;
        case 'time':
            elemLabel.innerHTML = 'Hora';
            break;
        case 'url':
            elemLabel.innerHTML = 'URL';
            break;
        case 'week':
            elemLabel.innerHTML = 'Calendario de semanas';
            break;
        default:
            console.log("No existe");
            break;
    }

    container.append(elemLabel, " ", elemInput, " ");
    removeElement(elemLabel, elemInput);

    btnReset.addEventListener("click", () => {
        getForm.innerHTML = "";
    });
}

