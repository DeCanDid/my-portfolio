const firebaseConfig = {
    apiKey: "AIzaSyAmR8uGzpUAPYfhbhz9lCPjYiwOiXr2VOQ",
    authDomain: "myportfoliodb-d466d.firebaseapp.com",
    databaseURL: "https://myportfoliodb-d466d-default-rtdb.firebaseio.com",
    projectId: "myportfoliodb-d466d",
    storageBucket: "myportfoliodb-d466d.appspot.com",
    messagingSenderId: "312458689917",
    appId: "1:312458689917:web:69a8ef0e43f5f73ce16014"
  };

    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);

    var contactMeDB = firebase.database().ref('ContactMe');

    document.getElementById('ContactMe').addEventListener('submit', submitform);

    function submitform(e) {
        e.preventDefault();
        
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let subject = document.getElementById('subject').value;
        let message = document.getElementById('message').value;

        saveMessages(name, email, subject, message);

        //enable pre-loader
        document.querySelector('.preloader').style.display = "block";

        setTimeout(() => {
        document.querySelector('.preloader').style.display = "none";
            
        }, 4000);

        document.querySelector('.displayResponse').style.display = "block"


        setTimeout(() => {
        document.querySelector('.displayResponse').style.display = "none"
            
        }, 3000);


        //reset form
        document.getElementById('ContactMe').reset();

        // console.log(name,email,subject,message);
    }

    const saveMessages = (name, email, subject, message) =>{
        var newPorfolioForm = contactMeDB.push();

        newPorfolioForm.set({
            name : name,
            email : email,
            subject : subject,
            message : message

        });
    }





$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').removeClass("show");
        }else{
            $('.scroll-up-btn').addClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })

    
    var typed = new Typed(".typing", {
        strings: ["Programmer", "Developer", "Tech-Instructor", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // var typed = new Typed(".typing-2", {
    //     strings: ["Programmer", "Developer", "Tech-Instructor", "Designer", "Freelancer"],
    //     typeSpeed: 100,
    //     backSpeed: 60,
    //     loop: true
    // });

    // let situ = document.getElementById('situ')
    // situ.addEventListener('click', function(){
    //     var typed = new Typed(".typing3", {
    //         strings: ["Seasoned developer with high level of competence with the overall aim of building capacity in world and bringing out the best in it through a process of a participatory learning environment. Thus, this forms my objective as a programmer, working with other programmer and management to achieve this goal in the world."],
    //         typeSpeed: 30,
    //     });
    // })
})
 