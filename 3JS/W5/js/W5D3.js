window.addEventListener('load', function () { //because of this comand script link could be placed in htlml head.
    document.getElementById('save-btn')
        .addEventListener('click', () => {
            const form = document.getElementById('user-form').elements;
            
            if (isFormValid(form)) { //local  Storage
                let userList = localStorage.userList;

                if (userList) {
                    userList = JSON.parse(userList);
                } else {
                    userList = []; // if no data, create new list
                }

                const user = {
                    username: form.namedItem('username').value,
                    email: form.namedItem('email').value
                };

                const userId = form.namedItem('user-id').value
                if (userId) {
                    userList[userId] = JSON.stringify(user);
                } else {
                    userList.push(JSON.stringify(user));
                }

                localStorage.userList = JSON.stringify(userList);

                console.log('can be saved')
            } else {
                console.log('form not valid')
            }
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

        const table = document.getElementById("users-table");
        
        const tBody = table.getElementsByTagName('tbody')[0];
        tBody.innerHTML = '';
        
        const userList = localStorage.userList ? JSON.parse(localStorage.userList) : [];

        userList.forEach(function (user, index) {
            user = JSON.parse(user) // from string to object
            tBody.innerHTML += `
        <tr>
            <td>` + user.username + `</td>
            <td>` + user.email + `</td>
            <td> 
                <button class = "edit-btn" user-id = ` + index + ` >Edit</button>
                <button class = "delete-btn" user-id = ` + index + `>Delete</button>
            </td>
        </tr>`;
        })
        
        const editBtns = document.getElementsByClassName('edit-btn');
        
        Object.values(editBtns).forEach(function (btn) {
            btn.addEventListener('click', function (event) {
                const userId = event.target.getAttribute('user-id'); //gets index from button (2:26:)
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
        })
        
        const deleteBtns = document.getElementsByClassName('delete-btn');

        Object.values(deleteBtns).forEach(function (btn) {
            btn.addEventListener('click', function (e_click) {
                const userId = e_click.target.getAttribute('user-id')
                console.log('Delete btn presed')
                const userList = JSON.parse(localStorage.userList);
                
                userList.splice(userId, 1); //erase one element by index 'userId'
                
                localStorage.userList = JSON.stringify(userList);

                const table = document.getElementById('users-table');
                const tBody = table.getElementsByTagName('tbody')[0];
                const tRowToDelete = tBody.getElementsByTagName('tr')[userId];

                tRowToDelete.innerHTML = '';
            })
        })
    }
    renderTable();

})