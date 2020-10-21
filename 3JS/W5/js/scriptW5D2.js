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

    const username = form.namedItem('username').value;
    if (username.length < 6)
        isFormValid = false;

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