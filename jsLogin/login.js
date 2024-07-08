









function getCookie(name) {
     const value = `; ${document.cookie}`;
     const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();

  }


  document.getElementById('loginForm').addEventListener('submit', (e) => {
      e.preventDefault();

      let usernameLogin = document.getElementById('usernameLogin').value;
      let emailLogin = document.getElementById('userEmailLogin').value;

      let storedUsername = getCookie("username");
      let storedEmail = getCookie("email");

      if(usernameLogin === storedUsername && emailLogin === storedEmail) {
         window.location.href = "/welcome.html";
      } else {
          alert('Username or Password Not Registered !')
      }
  })






  document.body.onload = function() {
    document.formLogin.userLogin.focus();
    document.formLogin.reset()
    
}