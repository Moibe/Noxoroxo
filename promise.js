  let myPromise = new Promise(function(myResolve, myReject) {

    let x = 0;

  
  // The producing code (this may take some time)
  console.log("Estoy ejecutando el login()...")
  //Primero revisa si hay un usuario de Moralis que se haya conectado previamente. 
    let currentUser = Moralis.User.current();
    console.log("Usuario Actual:")
    console.log(currentUser);
    //Éste bloque es para poner alguna acción que quieras que haga al detectar que no hay un user de Moralis, 
    //..previamente conectados.
    if(!currentUser){
        //windows.location.pathname = "/index.html";
        console.log("Como no hay usuario abriré Metamask para que se conecte...");
        try{
          console.log("Me estoy conectando ahora a la Web3...")
          web3 = await Moralis.Web3.enable(); 
          console.log("Conectados a Web3:");
          console.log(web3);
          console.log("Datos obtenidos de la cadena:")
          const chainIdHex = web3.currentProvider.chainId;
          const chainIdDec = await web3.eth.getChainId();
          console.log(chainIdHex);
          console.log(chainIdDec);
          console.log("Cambiaremos x a uno para indicar que nos logueamos.")
          x = 1; 
        }
        catch (error) {
          //Esto saca un prompt alertando que no estás conectado via Metamask o lo que sea.      
          //alert(error.message);
          console.log(error);
          console.log(error.message);
          console.log("Como aún no estamos conectados, no hay más que hacer aquí por el momento.")
             }
    }

    if (x == 1) {
      myResolve("OK");
    } else {
      myReject(error);
    }
  });
  
  myPromise.then(
    function(value) {launch();}, //Si funcionó entonces ejecuta el launch();
    function(error) {console.log(error);}  //Si no funcionó por ahora solo despliega el error. 
  );