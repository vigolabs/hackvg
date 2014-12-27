$(document).ready(function(){
  
  // Setup the form to watch for the submit event
  $('#contact_form').submit(function(e){
    e.preventDefault();

    // Get data from form
    var form_data = { 
      name: $('#name').val(),
      phone: $('#phone').val(),
      subject: $('#subject').val(),
      email: $('#email').val(),
      message: $('#message').val()
    }

    $.ajax({
      url: 'http://getsimpleform.com/messages/ajax?form_api_token=69b2da3e781d35d48d89fd2e19ed4206',
      data: form_data,
      error: function() {
        toast('Error! El email no ha sido enviado!', 4000);
      },
      success: function(data) {
        toast('Email enviado!',4000);
        $('#name').val('');
        $('#phone').val('');
        $('#subject').val('');
        $('#email').val('');
        $('#message').val('');
      },
      dataType: 'jsonp',
      type: 'POST'
    });
  });
  
});