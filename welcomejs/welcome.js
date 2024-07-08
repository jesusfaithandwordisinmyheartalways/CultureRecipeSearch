





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








        const About = () => {
          window.location.href = "/about.html"
        }

        const Learn = () => {
            window.location.href = "/learn.html"
        
        }

        const AsianHomeSoup = () => {
            window.location.href = "/asianhomemade.html"
          }


        const AsianNoodlePage = () => {
            window.location.href = "/asiannoodle.html"
        }

        const AsianThaiPasta = () => {
            window.location.href = "/asianthaipasta.html"

        }

        const MacCheeseAltonBrown = () => {
          window.location.href = "/amcaltonbrown.html"
        }

        const AmericanNoBakeMacCheese  = () => {
            window.location.href = "/nobakemcheese.html"
        }


        const AmericanBakeMacCheese  = () => {
            window.location.href = "/bakedmaccheese.html"
        }

        const AmericanHomeMadeMuffins = () => {
          window.location.href = "/homemademuffin.html"
        }


        const BakedZiti = () => {
            window.location.href = "/Bakedziti.html"
        }

        const StylePork = () => {
          window.location.href = "/Bruschettapork.html"
        }

        const ItalianFagioli = () => {
            window.location.href = "/Pastaefagioli.html"

        }

        const ItalianRicottaCheese = () => {
            window.location.href = "/RicottaCheese.html"

        }

        const ItalianSausage = () => {
            window.location.href = "/Italiansausage.html"

        }


  





/*---------------------------------------CLOSE MODAL-----------------------------------------------------------*/

         

         document.addEventListener('DOMContentLoaded', () => {
            if(!localStorage.getItem("modalShown")) {
                document.getElementById('modal-container').classList.add('show');
                document.getElementById('nav-container').style.visibility = 'hidden';
                document.getElementById('banner-container').style.visibility = 'hidden';
                document.getElementById('container').style.visibility = 'hidden';
                document.getElementById('container-two').style.visibility = 'hidden';
                document.getElementById('container-three').style.visibility = 'hidden';
                document.getElementById('what-is-recipe').style.visibility = 'hidden'
                document.getElementById('footer-wrapper').style.visibility = 'hidden';
                document.getElementById('open-chat-btn').style.display = 'none';
                document.querySelector('.article-input').value = ''
                document.body.style.backgroundColor = "rgba(0,0,0,0.8)";
            }

                document.getElementById('modal-close-btn').addEventListener('click', () =>{
                    localStorage.setItem("modalShown", "true")
                    document.getElementById('modal-container').classList.remove('show');

                    document.getElementById('nav-container').style.visibility = 'visible';
                    document.getElementById('banner-container').style.visibility = 'visible';
                    document.getElementById('container').style.visibility = 'visible';
                    document.getElementById('container-two').style.visibility = 'visible';
                    document.getElementById('container-three').style.visibility = 'visible';
                    document.getElementById('what-is-recipe').style.visibility = 'visible'
                    document.getElementById('footer-wrapper').style.visibility = 'visible';
                    document.getElementById('open-chat-btn').style.display = 'block';
                    document.querySelector('.article-input').value = ''
                    document.body.style.backgroundColor = "white";

                })


                    document.getElementById('log-out-btn').addEventListener('click', () =>{
                        localStorage.removeItem("modalShown");

                         // Redirect to login page
                        window.location.href = 'login.html';
                })
            
         })





        

      
    
         








  /*----------------------------------FILTER LIST-----------------------------------------------*/


  
  const input = document.getElementById('recipe-input');
  
  // Add event listener for input event
  input.addEventListener('input', function(event) {
      const searchText = event.target.value.toLowerCase(); // Convert input text to lowercase for case-insensitive comparison
      
      // Select all recipe wrappers
      const recipeWrappers = document.querySelectorAll('.Asian-American-Italian-Recipe-Wrapper');
      
      // Loop through each recipe wrapper to filter
      recipeWrappers.forEach(wrapper => {
          const recipes = wrapper.querySelectorAll('.Flex-Child-Image');
          
          // Loop through each recipe in the current wrapper
          recipes.forEach(recipe => {
              const recipeHeader = recipe.querySelector('div').textContent.toLowerCase(); // Get recipe header text
              
              // Check if the search text matches the recipe header
              if (recipeHeader.includes(searchText)) {
                  recipe.style.display = 'block'; // Show the recipe
              } else {
                  recipe.style.display = 'none'; // Hide the recipe
              }
          });
      });
  });
  











  
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







  /*-----------------------------------SUBMIT NEWSLETTER ---------------------------------------------*/


        const submitRecipeNewsLetter = (event) => {
            event.preventDefault();
            const userInputNewsLetter = document.getElementById('article-input');
            const userCookieNewsLetter = document.querySelector('.article-input');
            setTimeout(() => {
                if(userInputNewsLetter.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
                    document.getElementById('user-news-container').style.display = 'block';
                    localStorage.setItem("recipe-updates-submit", userCookieNewsLetter);
                    setCookie('recipe-updates', userCookieNewsLetter, expires)
                    
                   
                }   
            }, 1000);

                 setTimeout(() =>{
                     userInputNewsLetter.value = ''
                    document.getElementById('user-news-container').style.display = 'none';

                }, 4000)

                if(userInputNewsLetter.value.match(setCookie("recipe-updates") || userInputNewsLetter.value.match(localStorage.getItem("recipe-updates-submit")))) {
                    alert('Email is already registered');
                    userInputNewsLetter.value = ''
                }

              
        }







