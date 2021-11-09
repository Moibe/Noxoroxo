state = "A";
const lanzamiento; 

function myInputOne(e) {
    document.getElementById('nameText').innerHTML = e.value;
}

const myInputTwo = (e) => {
    document.getElementById('lastnameText').innerHTML = e.value;
}
const myInputFour = (e) => {
    document.getElementById('numberText').innerHTML = e.value;
}

const printResult = async () => {
    const a = await lanzamiento;

    console.log("Esto se debería estar escribiendo hasta que tenemos un resultado de launch!!!:");
    
  };


function optionButton(e) {
    if (e.classList.contains('optionOne')) {
        e.classList.remove('optionOne');
        e.classList.add('optionTwo');
        e.innerHTML = `Option B`;
        formText.innerHTML = `My Form Version B`;
        body.classList.remove('gradient');
        body.classList.add('gradient1');
        // $('.growing_bar').css('background','red')
        $('#adddedSuccessfull').css('display', 'none');
        $('#barid').css('visibility', 'hidden');
        console.log("Sucedió Opción A");
        state = "B";
    }
    else {
        e.classList.remove('optionTwo');
        e.classList.add('optionOne');
        e.innerHTML = `Option A`;
        formText.innerHTML = `My Form Version A`;
        body.classList.remove('gradient1');
        body.classList.add('gradient');
        $('#adddedSuccessfull').css('display', 'none');
        $('#barid').css('visibility', 'hidden');
        // $('.growing_bar').css('background','rgba(236, 0, 140, .6)')
        state = "A";
    }
}
const myClick = (e) => {

    // if()
    if(buttonOption.classList.contains('optionOne')){

        $('#barid').css('visibility', 'visible')
        $('.growing-bar').removeClass('growing_barB')
        $('.growing-bar').addClass('growing_bar')
        e.setAttribute("disabled", "false")
    
        setTimeout(function () {
            // $('#barid').css('visibility', 'hidden')
        }, 13000)
        setTimeout(function () {
            $('#adddedSuccessfull').css('display', 'block')
            e.removeAttribute("disabled", "true")
            field1.value='';
            field2.value ='';
            field3.value='';
    
        }, 13000)
    }
    else{
        //alert(true)
        console.log("En la siguiente línea llamamos a Launch()");
        printResult();

        lanzamiento = launch().then( () => {

            console.log("Esto lo hace hasta que el launch se llevó a cabo.");
            $('#barid').css('visibility', 'visible')
        $('.growing-bar').removeClass('growing_bar')
        // $('.growing-bar').css('animation-play-state','play')
        $('.growing-bar').addClass('growing_barB')
        e.setAttribute("disabled", "false")
    
        setTimeout(function () {
            // $('#barid').css('visibility', 'hidden')
        }, 13000)
        setTimeout(function () {
            $('#adddedSuccessfull').css('display', 'block')
            e.removeAttribute("disabled", "true")
            field1.value='';
            field2.value ='';
            field3.value='';
    
        }, 13000)

        });

        
    }
    // if (nameOne.value >= '0' && (lastnameOne.value >= '0') && (numberOne.value >= '0')) {
        
    // }
    //  else {
    //     alert('fill inputs ')
    // }
    // e.preventDefault()
}