//Elementos que usaremos para conectar Moralis. 
const appId = "n3rg89swjLYr3w8QJApUcBJ8XpNlLPYdllWTFuqY"; 
const serverUrl = "https://m02z2ncyupuz.bigmoralis.com:2053/server";

//Elementos que usaremos para conectar la web3. 
let web3; 
const CONTRACT_ADDRESS_LAUNCH = "0x4ae8d2756ab677C909b539E981Df865277706D44"; //Está en Rinkeby, si lo usas en otra red te regresará vacio.

//És necesario iniciar Moralis con start paara cualquier operación. 
//Y todo lo que se hace aquí es con Moralis, no hay nada que se haga directo a la web3. 
objeto = Moralis.start({ serverUrl, appId });
console.log("Conectados a Moralis");

async function init(){
  console.log("Estoy ejecutando el init()...")
  //Primero revisa si hay un usuario de Moralis que se haya conectado previamente. 
    let currentUser = Moralis.User.current();
    console.log("Usuario Actual:")
    console.log(currentUser);
    //Éste bloque es para poner alguna acción que quieras que haga al detectar que no hay un user de Moralis, 
    //..previamente conectados.
    if(!currentUser){
        //windows.location.pathname = "/index.html";
        console.log("No hay usuario...");
        try{
     

          web3 = await Moralis.Web3.enable(); 
          console.log("Conectados a Web3:");
          console.log(web3);
          console.log("Datos obtenidos de la cadena:")
          const chainIdHex = web3.currentProvider.chainId;
          const chainIdDec = await web3.eth.getChainId();
          console.log(chainIdHex);
          console.log(chainIdDec);
        }
        catch (error) {
          //Esto saca un prompt alertando que no estás conectado via Metamask o lo que sea.      
          //alert(error.message);
          console.log(error);
          console.log(error.message);
          console.log("Como aún no estamos conectados, no hay más que hacer aquí por el momento.")
             }
    } 
}

async function launch(){

  console.log("Launch se empezó a ejecutar");
    //Lo primero que hago es obtener los valores que el usuario ya introdujo.
    //let name = document.getElementById("field1").value //Aquí iría un elemento que cachamos q varia según ambiente.
    let name = document.getElementById("field1").value
    let symbol = document.getElementById("field2").value
    //let amount = parseInt(document.getElementById("field3").value)
    let amount = document.getElementById("field3").value
    
    //Ahora si checa si está en la red correcta, por ahora la única red correcta será BNB Moralis.
    try {
            await web3.currentProvider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x4" }]
            });
          } catch (error) {
            alert(error.message);
          }
    
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS_LAUNCH);
    console.log(contract);
    console.log(name);
    console.log(symbol);
    console.log(amount);
    console.log("Los valores si fueron obtenidos..");
    console.log(contract.methods);
    //Así estás llamando a la función int dentro del contrato en la blockchain, debes de poner los params que pide. 
    //Va a pedir mucho en gas si el usuario no tiene BNB en la cuenta, en el futuro salta ésta parte para...
    //.. advertirle antes al usuario de la falta de presuesto y que no parezca carísima de gas o ejecución por diseño.
    resultado = contract.methods.createToken(amount, name, symbol).send({from: accounts[0], value: Moralis.Units.ETH("0.001")})
    //contract.methods.payout().send({from: accounts[0], value: Moralis.Units.ETH("0")})
    .on("receipt", function(receipt)
    {
        alert(receipt.blockNumber); 
        console.log(receipt);
        console.log(resultado);
        
    })

   
    const printAddress = async () => {
        const a = await resultado;

        console.log("Evento:");
        console.log(a.events[0]);
        console.log("Contrato de tu nuevo token:");
        console.log(a.events[0].address);
        console.log("Creado en el bloque:");
        console.log(a.events[0].blockNumber);
      };
      
    printAddress();

   
}

//document.getElementById("submit_launch").onclick = launch;

//init(); 

