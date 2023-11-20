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
 