// window.addEventListener('load', function () { //because of this comand script link could be placed in htlml head.
// $(window).on('load', function(){ // - relativ long comand
$(function () { // -short comand
    // document.getElementById('save-btn').addEventListener('click', () => {
    $('#save-btn').on('click', () => {
        // const form = document.getElementById('user-form').elements;
        const $form = $('#user-form');
        const formData = $form.serializeArray();

        console.log(formData);

        // if (isFormValid(form)) { //local  Storage
        let userList = localStorage.userList;

        if (userList) {
            userList = JSON.parse(userList);
        } else {
            userList = []; // if no data, create new list
        }

        // console.log(formData.find(function(row){return row.name ==='username'}));
        console.log(formData.find((row) => row.name === 'username'));
        console.log(formData.find((row) => row.name === 'email'));
        const user = {
            // username: form.namedItem('username').value,
            username: formData.find(function (row) {
                return row.name === 'username'
            }).value,
            // email: form.namedItem('email').value
            email: formData.find((row) => row.name === 'email').value,
        };

        // const userId = form.namedItem('user-id').value
        const userId = formData.find((row) => row.name === 'user-id').value
        if (userId) {
            userList[userId] = JSON.stringify(user);
        } else {
            userList.push(JSON.stringify(user));
        }

        localStorage.userList = JSON.stringify(userList);
        renderTable();
        console.log('can be saved')
        // } else {
        console.log('form not valid')
        // }
    })
    console.log('loader')

    // validation:
    function isFormValid(form) {
        let isFormValid = true;

        const errorMsgBlock = document.getElementsByClassName('error-msg');
        Object.values(errorMsgBlock).forEach(function (block) {
            block.innerHTML = ''
        })

        const username = form.namedItem('username').value;
        if (username.length < 6) {
            const errorMsg = document.getElementsByClassName('error-msg username')[0];
            errorMsg.innerHTML = "Min 6 characters for username"
            isFormValid = false;
        }

        const email = form.namedItem('email').value;
        // re - regular expression comand
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(email)) {
            const errorMsg = document.getElementsByClassName('error-msg email')[0];
            errorMsg.innerHTML = "Not a valid email"
            isFormValid = false;
        }

        console.log(username);
        console.log(email);
        return isFormValid;

    }

    function renderTable() {
        // const table = document.getElementById("users-table");
        // const tBody = table.getElementsByTagName('tbody')[0];
        const $tBody = $('#users-table').find('tbody');
        // tBody.innerHTML = '';
        const userList = localStorage.userList ? JSON.parse(localStorage.userList) : [];

        const $trExample = $('.tr-example');
        $tBody.html('');

        userList.forEach(function (user, index) {
            const $newTr = $trExample.clone().show();
            // $newTr.show();
            user = JSON.parse(user) // from string to object

            console.log($newTr.find('.username'));

            $newTr.find('.username').text(user.username);
            $newTr.find('.email').text(user.email);

            // tBody.innerHTML += `
            $tBody.append($newTr);
            // $tBody.append(`
            //     <tr>
            //         <td>` + user.username + `</td>
            //         <td>` + user.email + `</td>
            //         <td> 
            //             <button class = "edit-btn" user-id = ` + index + ` >Edit</button>
            //             <button class = "delete-btn" user-id = ` + index + `>Delete</button>
            //         </td>
            //     </tr>
            // `);
        })

        // const editBtns = document.getElementsByClassName('edit-btn');
        // Object.values(editBtns).forEach(function (btn) {
        // btn.addEventListener('click', function (event) {
        // $('.edit-btn').on('click', function (event) {
        $('.edit-btn').on('click', function () {
            // const userId = event.target.getAttribute('user-id'); //gets index from button (2:26:)
            const userId = $(this).attr('user-id'); //gets index from button (2:26:)
            console.log('Trigger edit user: ' + userId);

            const userList = JSON.parse(localStorage.userList);
            let user = userList[userId];
            user = JSON.parse(user);

            const form = document.getElementById('user-form').elements;

            form.namedItem('username').value = user.username
            form.namedItem('email').value = user.email
            form.namedItem('user-id').value = userId

            console.log(user);
        })
        // })

        // const deleteBtns = document.getElementsByClassName('delete-btn');
        // Object.values(deleteBtns).forEach(function (btn) {
        // btn.addEventListener('click', function (e_click) {
        $('.delete-btn').on('click', function () {
            // const userId = e_click.target.getAttribute('user-id')
            const userId = $(this).attr('user-id')
            console.log('Delete btn presed')
            const userList = JSON.parse(localStorage.userList);

            userList.splice(userId, 1); //erase one element by index 'userId'

            localStorage.userList = JSON.stringify(userList);

            const table = document.getElementById('users-table');
            const tBody = table.getElementsByTagName('tbody')[0];
            const tRowToDelete = tBody.getElementsByTagName('tr')[userId];

            tRowToDelete.innerHTML = '';
        })
        // })
    }
    renderTable();

    //(1:04:)
    // const trExample = $('.tr-example');
    // const newTr = trExample.clone();
    // newTr.find('email').text("test email")
    // newTr.find('username').text("test username")
    // $('tbdoy').append(newTr);

    //(1:48:)
    //put ajax data to html
    function responseHandler(response) {
        console.log(response)
        $('body').append('<ul class = "list"></ul>')

        response.data.forEach(function (user) {
            $('.list').append('<img src=' + user.avatar + '>');
            $('.list').append('<img alt="' + user.first_name + ' ' + user.last_name + ' ' + '">');
            // $('.list').append('<li>'+ '<img src='+user.avatar.value> + " "+ user.email + '</li>');
            // '<img src="img/icons.png">'
        })
    }  

    // (1:41:) Request to the server
    $.ajax({
        method: "GET",
        url: "https://reqres.in/api/users"
    }).done(responseHandler)
    // .done(function( response ) {
    //     $('body').append('<ul class="new-list"></ul>')
    //     console.log(response)

    //     response.data.forEach(function(val) {
    //         $('.new-list').append('<li>'+val.email+'</li>')
    //     })
    // });

})