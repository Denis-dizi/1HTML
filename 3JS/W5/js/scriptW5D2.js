window.addEventListener('load', function() {
    document.getElementById('save-btn')
    .addEventListener('click', () => {
        const form = document.getElementById('user-form').elements;     
        // validation:
        if (isFormValid(form)) {
            console.log('can be saved')
        }else{
            console.log('form not valid')
        }
    })
console.log('loader')
    
    // validation:
function isFormValid(form) {
    let isFormValid = true;

    const errorMsgBlock =  document.getElementsByClassName('error-msg');
    Object.values(errorMsgBlock).forEach(function(block) {
        block.innerHTML = ''
    })


    const username = form.namedItem('username').value;
    if (username.length < 6){
        const errorMsg =  document.getElementsByClassName('error-msg username')[0];
        errorMsg.innerHTML = "Min 6 characters for username"
        isFormValid = false;
    }

    const email = form.namedItem('email').value;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test()) {
        const errorMsg =  document.getElementsByClassName('error-msg email')[0];
        errorMsg.innerHTML = "Not a valid email"
        isFormValid = false;

    }

    console.log(username);
    return isFormValid;

}

})

// document.getElementById("saveName").addEventListener("click", function() {
//     const nameInput = document.getElementsByClassName('name')[0];
//     // console.log('click');
//     // console.log(nameInput);
//     console.log(nameInput.value);

//     let users = localStorage.users;

//     if (users) {
//         users = users.split(",");
//         users.push(nameInput.value);

//     } else {
//         console.log("no users");
//         users = [];
//         users.push(nameInput.value);
//         console.log(users);
//     }

//     localStorage.users = users.toString();
//     renderTable();
// });

// function renderTable() {

//     table = document.getElementsByClassName("userTable")[0];
//     table.innerHTML = '';

//     const usersArray = localStorage.users.split(",");

//     usersArray.forEach(function(name) {            
//         table.innerHTML += '<tr><td>'+ name +'</td></tr>';
//     })
//     }
//     renderTable();

// const usersArray = localStorage.users.split(",");
// usersArray.forEach(function(name) {
//     table = document.getElementsByClassName("userTable")[0];

//     console.log(table);
//     table.innerHtml += '<tr><td>'+ name +'</td></tr>';
// });