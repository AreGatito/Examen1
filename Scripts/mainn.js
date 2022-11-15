window.onload = () => {
    const current = document.querySelector('#Current');
    const subir = document.querySelector('#Value-up');
    const bajar = document.querySelector('#Value-Down');

    const counter = {
        value: 0,

        defValue() {
            current.innerHTML = this.value
        },
        subir() {
            this.value++;
            this.defValue();
        },
        bajar() {
            if(this.value ===0) {
                this.value = 0;
            }else {
                this.value--;
                this.defValue();
            }
        }
    }

    counter.defValue();

    subir.onclick = () => {
        counter.subir();
    }

    bajar.onclick = () => {
        counter.bajar();
    }
}

