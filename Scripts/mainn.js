import {getControlesBottoms} from "./helpers/getControlesBottoms.js";
import {getCurrentValue} from "./helpers/getCurrentValue.js";
import {useValue} from "./hooks/useValue.js";

document.addEventListener("DOMContentLoaded", () => {

    const{Michi} = getCurrentValue ();
    const{ValueUp,ValueDown} = getControlesBottoms ();
    const{val,subirValor,bajarValor,updateValor } = useValue ();

    Michi.innerHTML = localStorage.getItem('Michi');

    ValueUp.onclick = () => {
    subirValor();
    updateValor(Michi);
    }

    ValueDown.onclick = () => {
    bajarValor();
    updateValor(val);
    }

});


