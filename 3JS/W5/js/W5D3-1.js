// W5D3-1. Use in console with W5D3 or W5D2
//(0:36:)
$('#users-table')
//similar to:
document.getElementById('users-table')

//(0:39:)
$('.edit-btn').addEventListener()
// replaces:
Object.values(editBtns).forEach(function (btn) {})
//(0:41:) multy selector:
$('table, input, #save-btn')

$('.error-msg.email')
$('.error-msg')

//(0:43:) Pseudo-selectors:
$('.error-msg').filter('email')
$('#user-form').find('[name=email]')

//(0:48:)
//if one of element is: display: none;
$('.error-msg:visible') //- shows visible element
$('.error-msg:hidden') //- shows hidden element

$('.error-msg').is(':visible') // we are asking
false // console replys
$('.error-msg').is(':hidden')
true

//(0:50:) Add class
$('.error-msg').filter('.email').addClass('red') // or remove

//(0:53:) add style
$('table').css('color', 'red')
$('table').css('font-size', '12px')
// at once multi
$('table').css({
    background: "#123456",
    "font-decoration": "underline"
})

//(1:03:) copy html elements with jQuery
const trExample = $('.tr-example');
const newTr = trExample.clone();
newTr.find('email').text("test email")
newTr.find('username').text("test username")
$('tbdoy').append(newTr);

//(1:13:)
$('table').width() //or  .height
113.6 // console replys
$(window).height()
$('body').height()

// (1:17:) Record corrupted
$('body').scrollTop(100)

//(1:20:)
$('[name=email]').insertAfter('table')
$('[name=email]').insertBefore('[name=username]')

//(1:21:) Manipulations
$('table').append('test1')
$('table').prepend('test4')
$('[name=username]').appendTo('table')

//(1:24:) Visual effects
$('[name=username]').hide() // or .show()
$('[name=username]').fadeOut(2000)
$('[name=username]').slideUp(2000) // .slideDown()

// (1:34:) Event Handling
$('selector').on('click', function () {}) // Adds the function to all elements
// same as:
var allElements = document.getElementsByTagName('selector');
for (var i = 0; i < allElements.length; i++) {
    allElements[i].addEventListener('click', function () {})
}

//put handling when full html is not ready:
//?????????? not clear
$('table').on('click', '.edit-btn', function () {})

// (1:39:) Request to the server
$.ajax({
    method: "GET",
    url: "https://reqres.in/api/users"
}).done(responseHandler)

//(1:48:)
//put ajax data to html
function responseHandler(response) {
    console.log(response)
    $('body').append('<ul class = "list"></ul>')

    response.data.forEach(function (user) {
        $('.list').append('<img src=' + user.avatar + '>');
    })
}