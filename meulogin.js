var done = 0

let senha = prompt("Confirme a sua senha")

if (senha.toLocaleLowerCase=="jakobifoda"){
    window.location="matematica.html"; done = 1 
}
else {
    done = 0
}

if(done==0){
    window.location=""
}