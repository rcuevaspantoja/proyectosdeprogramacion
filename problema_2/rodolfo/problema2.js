
class nodo{
    constructor( valor ){
        this.value = valor;
        this.estado = "unlocked"; /* puede tener 2 estados => bloqueado y desbloqueado | Cada nuevo nodo creado está desbloqueado hasta que se diga lo contrario */
        this.left = null;
        this.right = null;
    }

    add( value ){
        if( value < this.value ){
            this.AgregarIzquierda( value )
        } else {
            this.AgregarDerecha( value )
        }
    }

    AgregarIzquierda( value ){
        if( this.left ) {
            this.left.add( value )
        } else {
            this.left = new nodo( value )
        }
    }

    AgregarDerecha( value ){
        if( this.right ){
            this.right.add( value )
        } else {
            this.right = new nodo( value )
        }
    }

/* FUNCIONES PARA BLOQUEAR */
    bloquear( value ){
        if( value == this.value ){
            this.estado = "locked"
        }
        if( value < this.value ){
            this.BloquearIzquierda( value )
        }
        if( value > this.value ){
            this.BloquearDerecha( value )
        }
    }

    BloquearIzquierda( value ){
        if( this.left ){
            this.left.bloquear( value )
        } else{
            console.log("NO SE PUEDE BLOQUEAR "+ value +" PORQUE NO EXISTE EN EL ÁRBOL")
        }
    }

    BloquearDerecha( value ){
        if( this.right ){
            this.right.bloquear( value )
        } else{
            console.log("NO SE PUEDE BLOQUEAR "+ value +" PORQUE NO EXISTE EN EL ÁRBOL")
        }
    }

/* FUNCIONES PARA DESBLOQUEAR */
    desbloquear( value ){
        if( value == this.value ){
            this.estado = "unlocked"
        }
        if( value < this.value && this.estado == "unlocked" ){   /* Nodo desbloqueado permite bajar de nivel  */
            this.DesbloquearIzquierda( value )
        }

        if( value > this.value && this.estado == "unlocked" ){   /* Nodo desbloqueado permite bajar de nivel  */
            this.DesbloquearDerecha( value )
        }
        if( this.estado == "locked" ){
            console.log("No se puede seguir recorriendo el Nodo por el estado del Nodo(" +this.value+ ") -> "+ this.estado)
        }
    }

    DesbloquearIzquierda( value ){
        if( this.left ){
            this.left.desbloquear( value )
        } else {
            console.log("NO SE PUEDE DESBLOQUEAR "+ value +" PORQUE NO EXISTE EN EL ÁRBOL")
        }
    }

    DesbloquearDerecha( value ){
        if( this.right ){
            this.right.desbloquear( value )
        } else {
            console.log("NO SE PUEDE DESBLOQUEAR "+ value +" PORQUE NO EXISTE EN EL ÁRBOL")
        }
    }

}


const nexo = new nodo(60);
nexo.add(20);
nexo.add(5);
nexo.add(25);
nexo.add(61);
nexo.add(21);

nexo.bloquear(60)
nexo.bloquear(5)
console.log(nexo);

/* nexo.desbloquear(60)
console.log(nexo) */

nexo.desbloquear(5)
console.log(nexo)