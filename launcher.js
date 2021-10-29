const appId = "n3rg89swjLYr3w8QJApUcBJ8XpNlLPYdllWTFuqY"; 
const serverUrl = "https://m02z2ncyupuz.bigmoralis.com:2053/server";
const CONTRACT_ADDRESS_LAUNCH = "0x4ae8d2756ab677C909b539E981Df865277706D44";

Moralis.start({ serverUrl, appId });

let web3; 

async function init(){

    let currentUser = Moralis.User.current();
    if(!currentUser){
        //windows.location.pathname = "/index.html";
        console.log("Not user, por el momento no haré nada.");

    }

    web3 = await Moralis.Web3.enable(); 
    console.log("Conectados a Moralis");
    console.log(web3);
    const chainIdHex = web3.currentProvider.chainId;
        const chainIdDec = await web3.eth.getChainId();
        console.log(chainIdHex);
        console.log(chainIdDec);

        try {
            await web3.currentProvider.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x89" }]
            });
          } catch (error) {
            alert(error.message);
          }


    let accounts = await web3.eth.getAccounts(); 
     

}

async function launch(){
    console.log("El botón SUMBMIT si sirvió!");
    //let name = document.getElementById("token_name").value //Aquí iría un elemento que cachamos q varia según ambiente.
    let name = document.getElementById("token_name").value
    let symbol = document.getElementById("token_symbol").value
    //let amount = parseInt(document.getElementById("token_amount").value)
    let amount = document.getElementById("token_amount").value
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(contractAbi, CONTRACT_ADDRESS_LAUNCH);
    console.log(contract);
    console.log(name);
    console.log(symbol);
    console.log(amount);
    console.log("Los valores si fueron obtenidos..");
    console.log(contract.methods);
    //Así estás llamando a la función int dentro del contrato en la blockchain, debes de poner los params que pide. 
    resultado = contract.methods.createToken(amount, name, symbol).send({from: accounts[0], value: Moralis.Units.ETH("0.001")})
    //contract.methods.payout().send({from: accounts[0], value: Moralis.Units.ETH("0")})
    .on("receipt", function(receipt)
    {
        alert(receipt.blockNumber); 
        console.log(receipt);
        console.log(resultado);
        
    })

    // const printAddress = () => {
    //     resultado.then((a) => {
    //       console.log("Ahora estoy imprimiendo el resultado...");
    //       console.log(a.blockNumber);
    //       console.log(a.cumulativeGasUsed);
    //       console.log(a.transactionHash);
    //     });
    //   };
      
      
    //   printAddress();

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

document.getElementById("submit_launch").onclick = launch;

init(); 

