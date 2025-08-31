function add(a,b){
    console.log(arguments)
    const param = [...arguments]
    console.log(param)
}

add(88,77,7,5,3)
