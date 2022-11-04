export const useValues = () =>{
    let number = {
        value: 0
    }

    const subirval = () =>{
        number.value++
    }

    const bajarval = () =>{
        if(number.value === 0){
            number.value = 0
        } else{
            number.value--
        }
    }

    const updatenumber = (el) => {
        el.innerHTLM = number.value;
    } 


    return{
       number,
       subirval,
       bajarval,
       updatenumber
    }

}