















const cookieAttributes = {
    path: '/',
    domain: '127.0.0.1',
    sameSite: 'Strict',
    secure: false,
    httpOnly: false,
    expires: 7
}



        

    const UserName = () => {
            const username = document.getElementById('username').value;
         if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/.test(username)) {
            alert('Invalid username, Must Contain One Uppercase, One Special Character, Min 8 characters ')
            return false;
            }
            return true;
        }


        const UserAge = () => {
            const userAge = document.getElementById('userAge').value;
            if(userAge < 0 || userAge > 130) {
            alert('Invalid Age')
            return false;
          }
          return true;

        }



        const UserEmail = () => {
            const userEmail = document.getElementById('user-email').value;
            
            if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.com$/.test(userEmail)) {
                alert('Invalid Email')
                return false;
            }
               return true;
        }




    document.getElementById('formSignUp').addEventListener('submit', (e) => {

             e.preventDefault();


             if (!UserName() || !UserAge() || !UserEmail()) {
                alert('Invalid Login');
                return;
            }
          

            let submitUsername = document.getElementById('username').value;
            let submitAge = document.getElementById('userAge').value;
            let submitEmail = document.getElementById('user-email').value;
    
            if(localStorage.getItem("cookiesAccepted") === "true") {
            // Set cookies to expire at the end of the day
              const now = new Date();
              const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
              const expires = endOfDay.toUTCString()
    
              setCookie('username', submitUsername, expires);
              setCookie('age', submitAge, expires);
              setCookie('email', submitEmail, expires);
            }

            window.location.href = "/login.html";
    })

   
    const setCookie = (name, value, expires) => {
    document.cookie = `${name}=${value};expires=${expires};path=/;SameSite=Strict`;
  }

        const AcceptCookies = () => {
            localStorage.setItem("cookiesAccepted", "true")
            document.getElementById('cookie-banner').style.display = 'none';
        }

        const RejectCookies = () => {
            localStorage.setItem("cookiesAccepted", "false");
            document.getElementById('cookie-banner').style.display = 'none';
        }






    
        
   


          


    







/*-----------------------------------------COOKIE BANNER EVENT-----------------------------------------------------*/

           
        document.addEventListener('DOMContentLoaded', () => {
            const cookieBanner = document.getElementById('cookie-banner');
            const cookieAcceptBtn = document.getElementById('cookie-accept-btn');
            const cookieRejectBtn =  document.getElementById('cookie-reject-btn');

            const userCookieChoice = localStorage.getItem("cookieChoice");
            if(!userCookieChoice) {
                cookieBanner.classList.add('show')
            }

            cookieAcceptBtn.addEventListener('click', () => {
                cookieBanner.classList.remove('show');
                localStorage.setItem("cookiesChoice", "accepted")
            })

            cookieRejectBtn.addEventListener('click', () => {
                  cookieBanner.classList.remove('show');
                  localStorage.removeItem("cookieChoice", "decline")

            })
        })








 /*------------------------------------------TABLE FUNCTIONS----------------------------------------------*/

        const displayTable = () => {
            document.getElementById('weekly-meal-container').style.visibility = 'hidden';
            document.getElementById('table-container').style.display = 'block';
            document.body.style.overflowY = "hidden";
            document.getElementById('container-two').style.visibility = 'hidden';
            document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
        }

        const closeTable = () => {
            document.getElementById('table-container').style.display = 'none'
            document.getElementById('weekly-meal-container').style.visibility = 'visible';
            document.body.style.overflowY = "scroll";
            document.getElementById('container-two').style.visibility = 'visible';
            document.body.style.backgroundColor = "rgba(0,0,0,0)";
            
        }




       










/*------------------------------------------CHAT POP UP BOX  ---------------------------------------------*/ 
            const openChat = () => {
              document.getElementById('chat-popup').style.display = 'block';
              document.getElementById('text-message').value = '';
            }


            const closeChat = () => {
                document.getElementById('chat-popup').style.display = 'none';
                document.getElementById('text-message').value = '';

            }


            const submitChat = (event) => {
                event.preventDefault()
                if( document.getElementById('text-message').value === '') {
                    alert('Your Message Is Empty') 
                }

                if( document.getElementById('text-message').value !== '') {
                    alert('Your Feedback has been submitted') ;
                    closeChat();
                    
                }


            }
          





      



          


/*-----------------------------------SUBMIT NEWSLETTER ---------------------------------------------*/
     const submitNewsLetter = (event) => {
            event.preventDefault()
            const submitNewsLetter = document.getElementById('newsletter-signup').value;
            const submitValue = document.querySelector('.newsletter-signup').value
            setTimeout(() => {
                if(submitNewsLetter.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                    document.getElementById('submit-letter-container').style.visibility = 'visible'
                    localStorage.setItem("email-newsletter-submit", submitValue);
                    setCookie("email-newsletter", submitNewsLetter, expires )
                }

            }, 1000); 

                 setTimeout(() => {
                    document.getElementById('submit-letter-container').style.visibility = 'hidden'
                    document.getElementById('newsletter-signup').value = '';
            },5000)
                
           if(submitNewsLetter.match(setCookie("email-newsletter") || submitNewsLetter.match(localStorage.getItem("email-newsletter-submit")))) {
                        alert('Email Address Has Already Been Registered');
                        document.getElementById('newsletter-signup').value = '';
                    }      
                
    }

    



          
        

    document.body.onload = function() {
        document.getElementById('username').value  = '';
        document.getElementById('userAge').value = '';
        document.getElementById('user-email').value = '';
        document.getElementById('newsletter-signup').value = ''
        document.formLogin.userLogin.focus()
    }
    

