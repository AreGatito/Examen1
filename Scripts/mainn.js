import {getControlesBottoms} from "./helpers/getControlesBottoms.js";
import {getCurrentValue} from "./helpers/getCurrentValue.js";
import {useValues} from "./hooks/useValue.js";

document.addEventListener("DOMContentLoaded", () => {

    const{Current} = getCurrentValue();
    const{ValueUp,ValueDown} = getControlesBottoms();
    const{number,subirval,bajarval,updatenumber} = useValues();

    Current.innerHTML = number.value;

    ValueUp.onclick = () => {
    subirval();
    updatenumber(Current);
    }

    ValueDown.onclick = () => {
    bajarval();
    updatenumber(Current);
    }

});

