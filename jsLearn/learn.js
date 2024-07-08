












const Welcome = () => {
  window.location.href = "/welcome.html"
}


const About = () => {
  window.location.href = "/about.html"

}


const Logout = () => {
  window.location.href = "/login.html"
}







function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}


  function setCookie(name, value, expires) {
       document.cookie = `${name}=${value};expires=${expires};path=/`;
  }

  function deleteCookie(name) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}


   // Store cookies if necessary (to preserve state across pages).
   // Optionally, you can reset cookies with the same values and expiration
        const username = getCookie('username');
        const age = getCookie('age');
       const email = getCookie('email');


       if (username && age && email) {
          // Optionally, you can reset cookies with the same values and expiration
          const now = new Date();
          const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
          const expires = endOfDay.toUTCString();

          setCookie('username', username, expires);
          setCookie('age', age, expires);
          setCookie('email', email, expires);
      }


      const clearCookies = () => {
        //delete the cookies
          deleteCookie("username");
          deleteCookie("age")
          deleteCookie("email");
          //delete the localStorage if used
          localStorage.removeItem("username");
          localStorage.removeItem("email");
          localStorage.removeItem("cookiesAccepted");

          window.location.href = "/login.html"
      }






  
/*------------------------------------------CHAT POP UP BOX  ---------------------------------------------*/ 
const openChat = () => {
    document.getElementById('chat-popup').style.display = 'block';
    document.getElementById('text-message').value = '';
  }


  const closeChat = () => {
      document.getElementById('chat-popup').style.display = 'none';
      document.getElementById('text-message').value = ''
  }


  const submitChat = (event) => {
      event.preventDefault()
      if(document.getElementById('text-message').value = '' ) {
        alert('Please enter message')
      } else {
        alert('Feedback Submitted:');
      }
         
      document.getElementById('text-message').value = '';
      document.getElementById('chat-popup').style.display = 'none';


  }


