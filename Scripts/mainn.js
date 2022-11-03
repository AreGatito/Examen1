import {getControlesBottoms} from "./helpers/getControlesBottoms.js";
import {getCurrentValue} from "./helpers/getCurrentValue.js";
import {useValues} from "./hooks/useValue.js";

document.addEventListener("DOMContentLoaded", () => {

    const{Michi} = getCurrentValue();
    const{ValueUp,ValueDown} = getControlesBottoms();
    const{val,subirval,bajarval,updateval} = useValues();

    Michi.innerHTML = val.Value;

    ValueUp.onclick = () => {
    subirval();
    updateval(ValueUp);
    }

    ValueDown.onclick = () => {
    bajarval();
    updateval(ValueDown);
    }

});

