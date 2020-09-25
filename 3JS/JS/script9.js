for(var i=0; i<6; i++){
    setTimeout(function(){
        console.log(`var`, i)
    }, 0)
}

for(let k=0; k<6; k++){
    setTimeout(function(){
        console.log(`let`, k)
    }, 0)
}