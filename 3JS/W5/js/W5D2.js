window.addEventListener('load', function () { //because of this comand script link could be placed in htlml head.
    document.getElementById('save-btn')
        .addEventListener('click', () => {
            const form = document.getElementById('user-form').elements;
            // validation:
            if (isFormValid(form)) { //(1:26:) local  Storage
                let userList = localStorage.userList;

                if (userList) {
                    userList = JSON.parse(userList);
                } else {
                    userList = []; // if no data, create new list
                }

                const user = { //(1:33:)
                    username: form.namedItem('username').value,
                    email: form.namedItem('email').value
                };
                //(2:47)) push if empty, change if not empty
                const userId = form.namedItem('user-id').value
                if (userId) {
                    userList[userId] = JSON.stringify(user);
                } else {
                    userList.push(JSON.stringify(user));
                }

                localStorage.userList = JSON.stringify(userList);
                renderTable();
                console.log('can be saved')
            } else {
                console.log('form not valid')
            }
        })
    console.log('loader')

    // validation:
    function isFormValid(form) {
        let isFormValid = true;

        // resets error alerts (1:20:)
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

    function renderTable() { //(1:40:)

        const table = document.getElementById("users-table");
        //(2:55:)
        const tBody = table.getElementsByTagName('tbody')[0];
        tBody.innerHTML = '';
        // const userList = JSON.parse(localStorage.userList); //(2:31:) changed
        const userList = localStorage.userList ? JSON.parse(localStorage.userList) : [];

        userList.forEach(function (user, index) { //(1:48:)
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
            //(2:28:)
            // <button class = "delete-btn" title = ` + index + `>Delete</button>
        })
        //(2:21:)
        const editBtns = document.getElementsByClassName('edit-btn');
        //(2:22:/26)
        Object.values(editBtns).forEach(function (btn) {
            btn.addEventListener('click', function (event) {
                const userId = event.target.getAttribute('user-id'); //gets index from button (2:26:)
                console.log('Trigger edit user: ' + userId);
                //(2:35:) by userId get user from localStorage
                const userList = JSON.parse(localStorage.userList);
                let user = userList[userId];
                user = JSON.parse(user);
                //(2:41:)
                const form = document.getElementById('user-form').elements;
                //(2:41:) to edit data from localStorage and send to form
                form.namedItem('username').value = user.username
                form.namedItem('email').value = user.email
                //(2:50)
                form.namedItem('user-id').value = userId

                console.log(user);
            })
        })
        // (0:08: W5D3)
        const deleteBtns = document.getElementsByClassName('delete-btn');

        Object.values(deleteBtns).forEach(function (btn) {
            btn.addEventListener('click', function (e_click) {
                const userId = e_click.target.getAttribute('user-id')
                console.log('Delete btn presed')
                const userList = JSON.parse(localStorage.userList);
                //(0:15: W5D3)
                userList.splice(userId, 1); //erase one element by index 'userId'
                //save changed array
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