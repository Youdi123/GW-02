// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm() { 
        var firstname = document.forms["Regform"]["fname"]; 
        var lastname = document.forms["Regform"]["lname"]; 
        var email = document.forms["Regform"]["email"];
        var text = document.forms["Regform"]["text"]; 
  
        if (firstname.value == "") { 
            window.alert("Please enter your first name."); 
        } 
        if (lastname.value == "") { 
            window.alert("Please enter your last name."); 
        }
        if (email.value == "") { 
            window.alert("Please enter a valid e-mail address."); 
        }   
        if (text.value == "") { 
            window.alert("Please write down your reason");
        } 
}
