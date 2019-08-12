 function Login(){
    var done=0;
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    psswaord=password.toLowerCase();

  
  
    if (username=="matematica" && password=="jakobifoda") { window.location="matematica.html"; done=1; }
    if (username=="sociologia" && password=="jakobifoda") { window.location="sociologia.html"; done=1; }
    if (username=="fisica" && password=="jakobifoda") { window.location="fisica.html"; done=1; }
    if (username=="biologia" && password=="jakobifoda") { window.location="biologia.html"; done=1; }
    if (username=="quimica" && password=="jakobifoda") { window.location="quimica.html"; done=1; }
    else if (username=="matematica" && password=="netopaucolosso") {window.location="matematica.html"; done=1; }
    else if (username=="sociologia" && password=="netopaucolosso") {window.location="sociologia.html"; done=1; }
    else if (username=="fisica" && password=="netopaucolosso") {window.location="fisica.html"; done=1; }
    else if (username=="biologia" && password=="netopaucolosso") {window.location="biologia.html"; done=1; }
    else if (username=="quimica" && password=="netopaucolosso") {window.location="quimica.html"; done=1; }
    //netofodasse//
    else if (username=="biologia" && password=="fernanda") {window.location="biologia.html"; done=1; }
    else if (username=="quimica" && password=="fernanda") {window.location="quimica.html"; done=1; }
    //fernandafodasse//
    else if (username=="matematica" && password=="biarod") {window.location="matematica.html"; done=1; }
    else if (username=="sociologia" && password=="biarod") {window.location="sociologia.html"; done=1; }
    else if (username=="fisica" && password=="biarod") {window.location="fisica.html"; done=1; }
    else if (username=="biologia" && password=="biarod") {window.location="biologia.html"; done=1; }
    else if (username=="quimica" && password=="biarod") {window.location="quimica.html"; done=1; }
    //biagayzassademaiskkk//
    else if (username=="matematica" && password=="vinigay") {window.location="matematica.html"; done=1; }
    else if (username=="sociologia" && password=="vinigay") {window.location="sociologia.html"; done=1; }
    else if (username=="fisica" && password=="vinigay") {window.location="fisica.html"; done=1; }
    else if (username=="biologia" && password=="vinigay") {window.location="biologia.html"; done=1; }
    else if (username=="quimica" && password=="vinigay") {window.location="quimica.html"; done=1; }
    //digaoviadasso??//
    else if (username=="biologia" && password=="dumbledore") {window.location="biologia.html"; done=1; }//sofia//
    if (done==0) { alert("Seu bosta!");}
    }
  