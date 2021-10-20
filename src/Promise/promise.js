function Promise(executor) {

    this.status = 'pending' // fullfilled rejected
    this.value = null;
    this.reason = null
    this.onfullfilled = null;
    this.onrejected = null


    const resolve = (value) => {
        if(value instanceof Promise){
            return value.then()
        }
        this.status = 'fullfilled'
        if(this.onfullfilled){
            this.onfullfilled
        }
    }

    const reject = () => {

    }

    executor(resolve, reject)

}

Promise.prototype.then = (onfullfilled=Function.prototype,onrejected=Function.prototype) => {

}


Promise.prototype.catch = () => {

}

Promise.prototype.finally = () => {

}