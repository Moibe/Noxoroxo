// use this variable to set the timing of progress bar
let timing = 5;
const myInputOne = (e) => {
    document.getElementById('nameText').innerHTML = e.value;
    glass2.style.opacity = 1;
    glass2.classList.add('animate__fadeInRight')
    if (field1.value >= '0' && (field2.value >= '0') && (field3.value >= '0')) {
        $('.confetti__button').removeAttr('disabled', '');
        $('.confetti__button').css('cursor', 'default');
        $('.confetti__button').css('cursor', 'pointer');
        $('.button__text').css('background', '#3867d6');
    }
    else {
        $('.confetti__button').attr('disabled', 'false')
        $('.confetti__button').css('cursor', 'default');
        $('.button__text').css('background', 'grey');
    }
}

const myInputTwo = (e) => {
    document.getElementById('lastnameText').innerHTML = e.value;
    glass2.style.opacity = 1;
    glass2.classList.add('animate__fadeInRight')
    if (field1.value >= '0' && (field2.value >= '0') && (field3.value >= '0')) {
        $('.confetti__button').removeAttr('disabled', '');
        $('.confetti__button').css('cursor', 'pointer');
        $('.button__text').css('background', '#3867d6');
    }
    else {
        $('.confetti__button').attr('disabled', 'false')
        $('.confetti__button').css('cursor', 'default');
        $('.button__text').css('background', 'grey');
    }
}
const myInputFour = (e) => {
    document.getElementById('numberText').innerHTML = e.value;
    glass2.style.opacity = 1;
    glass2.classList.add('animate__fadeInRight')
    if (field1.value >= '0' && (field2.value >= '0') && (field3.value >= '0')) {
        $('.confetti__button').removeAttr('disabled', '');
        $('.button__text').css('background', '#3867d6');
        $('.confetti__button').css('cursor', 'pointer');
    }
    else {
        $('.confetti__button').attr('disabled', 'false')
        $('.confetti__button').css('cursor', 'default');
        $('.button__text').css('background', 'grey');
    }
}
const optionButton = (e) => {
    if (e.classList.contains('optionOne')) {
        e.classList.remove('optionOne')
        e.classList.add('optionTwo')
        e.innerHTML = `Option B`;
        formText.innerHTML = `My Form Version B`
        body.classList.add('gradient1')
        body.classList.remove('gradient');
        // $('#adddedSuccessfull').css('display', 'none')
        $('.growing-bar').removeClass('growing_barA')
        $('.growing-bar').removeClass('growing_barBPurple')
        $('.growing-bar').addClass('growingBarAnimation')
        glass2.classList.remove('animate__fadeInRight')
        glass2.classList.remove('animate__fadeIn')
        $('.confetti__button').attr('disabled', 'false');
        $('.confetti__button').css('cursor', 'default');
    }
    else {
        e.classList.remove('optionTwo');
        e.classList.add('optionOne');
        e.innerHTML = `Option A`;
        formText.innerHTML = `My Form Version A`
        body.classList.remove('gradient1')
        body.classList.add('gradient')
        // $('#adddedSuccessfull').css('display', 'none')
        $('.growing-bar').removeClass('growingBarAnimation')
        $('.growing-bar').removeClass('growing_barBPurple')
        $('.growing-bar').addClass('growing_barA')
        glass2.classList.remove('animate__fadeInRight')
        glass2.classList.remove('animate__fadeIn')
        $('.confetti__button').attr('disabled', 'false')
        $('.confetti__button').css('cursor', 'default');
    }
}

// submit functionality after this
const myClick = (e) => {

    // check if all the fields are filled
    if (field1.value >= '0' && (field2.value >= '0') && (field3.value >= '0')) {
        glass1.classList.add('animate__fadeOut');
        $('#glass1').css('opacity', '0');
        optionDIv.classList.add('buttonDIvOptoveride')
        $('.button__text').css('background-color', '#3867d6')
        $('.confetti__button').attr('disabled', 'true')
        $('.confetti__button').css('cursor', 'default');
        $('.button__text').css('background-color', 'grey')
        // console.log(e);
        setTimeout(function () {
            $('#glass2').css('position', 'absolute')
            glass2.classList.remove('animate__fadeInRight')
            glass2.classList.add('animate__fadeInRight1')
        }, 1000);
    }
    else {
        e.setAttribute("disabled", "")
        $('.button__text').css('background-color', 'grey')
    }

    if (buttonOption.classList.contains('optionOne')) {
        handleOptionOne();

        // call the function to simulate the long running process
        fakeProcess();
    }
    else {
        handleOptionTwo();

        // call the function to simulate the long running process
        fakeProcess();
    }


    function handleOptionOne() {
        $('#barid').css('visibility', 'visible');
        $('.growing-bar').removeClass('growing_barB');
        $('.growing-bar').addClass('growing_bar');
        // $('.growing-bar').css('animation',`${timing}s linear 0s 1 normal none running fill`);
        $('.growing-bar').addClass('growing_barA');
        $('.button-center').css('display', 'none');
        $('.confetti__button').attr('disabled', 'false');
        $('.confetti__button').css('cursor', 'default');
        $('.button__text').css('background', 'grey');
        // e.setAttribute("disabled", "false")
    }

    function handleOptionTwo() {
        //indeterminateAnimation 1s infinite linear;
        $('#barid').css('visibility', 'visible');
        $('.growing-bar').removeClass('growing_bar');
        $('.growing-bar').removeClass('growing_barA');
        $('.button-center').css('display', 'none');
        $('.confetti__button').attr('disabled', 'false');
        $('.confetti__button').css('cursor', 'default');
        $('.button__text').css('background', 'grey');
        // $('.growing-bar').css('animation',`${timing}s linear 0s 1 normal none running fill`);
        // e.setAttribute("disabled", "false")
    }
}

// reset the form
const clickToReturn = (e) => {
    location.reload();
}

// use this function to stop the progress bar
function stopProgressBar() {
    $('.growing-bar').css('animation', 'asad');
    $('#clickReturn').css('display', 'block');
    field1.value = '';
    field2.value = '';
    field3.value = '';
}

// long running process goes here
function fakeProcess() {
    let x = "Hello world! Done!!";

    // set fake timeout to simulate a long process
    // when the process is done, show the success message
    // and hide the progress bar
    setTimeout(function () {
        console.log("Timeout of 5 seconds...");

        $('#adddedSuccessfull').html(x);
        $('#adddedSuccessfull').css('display', 'block');
        stopProgressBar();
    }, 5000);
}