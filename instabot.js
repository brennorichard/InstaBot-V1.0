//InstaBot - Seguidor
let contador = 0
let arr = document.querySelectorAll('.L3NKy');
arr.forEach((v , i) => {
    setTimeout (() =>{
        if(!v.classList.contains('_8A5w5')){
            v.click();
            contador++;
            console.log('InstaBot já seguiu '+contador+' pessoas');
        } else {
            console.log('');
        }
    }, i * 10000 )
});
