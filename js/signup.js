










 const Username = () => {
        
    let username = document.getElementById('username')
    if(username.value.trim() == '') {
        document.getElementById('username-error').innerHTML = 'Must Contain One Uppercase, One Special Character, Min 8 characters';
        document.querySelector('.Username-Error-Container').style.visibility = 'visible';
        return false;
    }

    if(username.value.match(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/)) {
        document.getElementById('username-error').innerHTML = 'Your Username Has Been Accepted';
        document.querySelector('.Username-Error-Container').style.marginLeft = "110px";

        setTimeout(() => {
            document.querySelector('.Username-Error-Container').style.visibility = 'hidden';

        }, 3000)
           
    } else {
        document.getElementById('username-error').textContent = 'Must Contain One Uppercase, One Special Character, Min 8 characters';
        document.querySelector('.Username-Error-Container').style.marginLeft = "0px";
        document.querySelector('.Username-Error-Container').style.visibility = 'visible';
        return false;
    }

    
    if(username.value.match( /\b(?:fuck|shit|bitch|asshole|dick|cunt|bastard|slut|whore|damn|hell)\b/i)) {
        document.getElementById('username-error').innerHTML = 'Username Contains Profanity';
        document.querySelector('.Username-Error-Container').style.marginLeft = "110px";   
        return false
    }
    }





    const UserAgeData  = () => {

        let userAge = document.getElementById('userAge')

        if(userAge.value.match(/^[0-9]+$/ )) {
            document.querySelector('.UserAge-Error-Container').style.visibility = 'hidden';
            document.getElementById('user-age-error').textContent = '' ;

        } else {
            document.querySelector('.UserAge-Error-Container').style.visibility = 'visible';
            document.getElementById('user-age-error').textContent = 'Enter Age';
            return false;
        }


        if(userAge.value.length > 3 || userAge.value  <= -1 || userAge.value == -0) {
            document.getElementById('user-age-error').textContent = 'Try Again'; 
            document.querySelector('.UserAge-Error-Container').style.visibility = 'visible';
            return false;
        } 


        if(userAge.value > 130) {
            document.getElementById('user-age-error').textContent = 'Invalid Age';
            document.querySelector('.UserAge-Error-Container').style.visibility = 'visible';
            return false;
        }

        if(userAge.value >=0 && userAge.value <= 10) {
            document.getElementById('user-age-error').textContent = 'Kid Age';
            document.querySelector('.UserAge-Error-Container').style.visibility = 'visible';

            setTimeout(() => {
                document.querySelector('.UserAge-Error-Container').style.visibility = 'hidden';

            }, 1000)
            return true;

        }

        if(userAge.value > 10 && userAge.value <= 130) {
            document.getElementById('user-age-error').textContent = 'Age Accepted';
            document.querySelector('.UserAge-Error-Container').style.visibility = 'visible';

            setTimeout(() => {
                document.querySelector('.UserAge-Error-Container').style.visibility = 'hidden';

            }, 3000)

                return true;
        }


        if(userAge.value == null) {
            document.querySelector('.UserAge-Error-Container').style.visibility = 'visible';
            document.getElementById('user-age-error').textContent = 'Enter Age';
            return
        }
    }





    const UserEmailData = () => {
        let userEmail = document.getElementById('user-email');

        if(userEmail.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            document.getElementById('user-email-error').innerHTML = 'Email Accepted';
            document.querySelector('.UserEmail-Error-Container').style.visibility = 'hidden';
        } else {
            document.getElementById('user-email-error').innerHTML = 'Invalid Email';
            document.querySelector('.UserEmail-Error-Container').style.visibility = 'visible';
            return false;

        }
}


        const cookieAttributes = {
                path: '/',
                domain: '127.0.0.1/sign-up.html',
                sameSite: 'Strict',
                secure: false,
                httpOnly: false,
                expires: 7
        }






 /*--------------------SET THE COOKIES -------------*/
        function setCookie(name, value, expires) {
            document.cookie = `${name}=${value};expires=${expires};path=/`;
        }
      

        const AcceptCookies = () => {
            localStorage.setItem("cookiesAccepted", "true")
            document.getElementById('cookie-banner').style.display = 'none';
        }

        const RejectCookies = () => {
            localStorage.setItem("cookiesAccepted", "false");
            document.getElementById('cookie-banner').style.display = 'none';
        }


        
        document.getElementById('formSignUp').addEventListener('submit', (e) => {
            e.preventDefault();

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
            }


            const closeChat = () => {
                document.getElementById('chat-popup').style.display = 'none';

            }


            const submitChat = (event) => {
                event.preventDefault()
                document.getElementById('text-message').value = '' ? alert('Your Message Is Empty') 
                ? document.getElementById('text-message').value !== '' : alert('Your Feedback Has Been Submitted') :
                alert('Please Enter A Message') ;

                

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
    

