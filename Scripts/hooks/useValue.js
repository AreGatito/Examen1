export const useValues = () =>{
    let val = {
        Value: 0
    }

    const subirval = () =>{
        val.Value++
    }

    const bajarval = () =>{
        if(val.Value === 0){
            val.Value = 0
        } else{
            val.Value--
        }
    }

    const updateval = (el) => {
        el.innerHTLM = val.Value;
    } 


    return{
       val,
       subirval,
       bajarval,
       updateval
    }

}