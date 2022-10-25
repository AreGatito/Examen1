export const useValue = () =>{
    let val = {
        value: localStorage.getItem('Michi')
    }

    const subirValor = () =>{
        val.value++
    }

    const bajarValor = () =>{
        if(val.value <= 0){
            val.value= 0
        } else{
            val.value--
        }
    }

    const updateValor = (el) => {
        localStorage.setItem('Michi',val.value);
        const currentValue = localStorage.getItem('Michi')
        el.innerHTLM = currentValue;
    } 


    return{
       val,
       subirValor,
       bajarValor,
       updateValor 
    }

}