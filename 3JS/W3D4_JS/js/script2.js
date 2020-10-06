//W3D4-2   2020.10.02
//(:31:)
//jQuery

// $ jQuery's global object

// jQuery code starts
//(:31:)
$(document).ready(function(){
    console.log($('#but1'))
    $('#text2').hide()
  
    //(:41:)
    $('#but1').click(function(){
      console.log('I\'m clicked by jQuery')
      //(:54:)(1:21:)
      $('#text1').slideToggle(700)
      $('#text2').fadeToggle(700)
      //(1:16:)
      //'slow' = 700ms
      //'fast' = 300ms
    })
  
    //(1:26:)
    $.get('https://jsonplaceholder.typicode.com/users', function(data, status){
      console.log('Get by jSON data, status:')
      console.log(data)
      console.log(status)
    })
  
    //(1:35/47:)
    $('#fsubmit').click(()=>{
      // $.post("http://192.168.1.151/test.php",
      //(2:04:)
      $.post("http://localhost/php/test2.php",
      {
        name: $('#user').val(),
        city: $('#pass').val()
      },
      function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
        //(1:51:)(2:13:)
        if(status == 'success') {
          // (2:16:)
          console.log($('#modal').html())
          $('#modal').html('<h1>Succes Login!</h1>')
          setTimeout(()=>{
          location.reload()
          }, 15000);
        }
      })
    })
  })
  // jQuery code ends
  
  // NATIVE JS starts
  // (1:03:)
  const modal = document.getElementById('modal')
  
  //(:43:))
  // onclick event from native js
  document.getElementById('but2').onclick = function(){
    console.log('Onclick event from native js')
    //(1:03:)
    modal.classList.toggle('showed')
  }
  
  //(:44:))
  // addEventListener from native js
  document.getElementById('but3').addEventListener('click', function(){
    console.log('Onclick event by addEventListener method')
  })
  
  //(:47:)) not recomended
  function clickFunction(){
    console.log('Button\'s onclick event')
  }