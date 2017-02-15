$(document).ready(function () {
   function closeMenu() {
     $('.graph, .offset > img').addClass("visible").removeClass("invisible");
     $('.expanded').addClass("invisible").removeClass("visible");
     $('.contracted').css("height", "10%");
     $('.choose').css("opacity", "1");
     $('.choose img').attr('src', 'svgs/arrow-down.svg');
   }

   function openMenu() {
     $('.graph, .offset > img').addClass("invisible").removeClass("visible");
     $('.expanded').addClass("visible").removeClass("invisible");
     $('.contracted').css("height", "40%");
     $('.choose').css("opacity", "0.33");
     $('.choose img').attr('src', 'svgs/arrow-up.svg');
   }
    $('.choose').click(function () {
        if ($('.graph').hasClass('visible')) {
            openMenu();

        }
        else if ($('.graph').hasClass('invisible')) {
            closeMenu();
        }

    });

    //Prev and Next buttons, cars

    function sabreTurbo() {
        $('.car').attr('src', 'svgs/sabre.svg');
        $('.row1 .number').text("6s");
        $('.row2 .number').text("116");
        $('.row3 .number').text("4");
        $('.row1 .bar').css("width", "28%");
        $('.row2 .bar').css("width", "53%");
        $('.row3 .bar').css("width", "80%");
    }

    function infernus() {
        $('.car').attr('src', 'svgs/infernus.svg');
        $('.row1 .number').text("2.7s");
        $('.row2 .number').text("215");
        $('.row3 .number').text("2");
        $('.row1 .bar').css("width", "75%");
        $('.row2 .bar').css("width", "100%");
        $('.row3 .bar').css("width", "40%");
    }

    function sentinelXS() {
        $('.car').attr('src', 'svgs/sentinel.svg');
        $('.row1 .number').text("4.2s");
        $('.row2 .number').text("155");
        $('.row3 .number').text("3");
        $('.row1 .bar').css("width", "54%");
        $('.row2 .bar').css("width", "72%");
        $('.row3 .bar').css("width", "60%");
    }

    //Prev and Next buttons, chars

    function primero() {
        $('.char').attr('src', 'svgs/chars/primero.svg');
        $('.row1 .number').text("50");
        $('.row2 .number').text("25");
        $('.row3 .number').text("10");
        $('.row1 .bar').css("width", "100%");
        $('.row2 .bar').css("width", "50%");
        $('.row3 .bar').css("width", "20%");
    }

    function segundo() {
        $('.char').attr('src', 'svgs/chars/segundo.svg');
        $('.row1 .number').text("25");
        $('.row2 .number').text("10");
        $('.row3 .number').text("50");
        $('.row1 .bar').css("width", "50%");
        $('.row2 .bar').css("width", "20%");
        $('.row3 .bar').css("width", "100%");
    }

    function gorilla() {
        $('.char').attr('src', 'svgs/chars/gorilla.svg');
        $('.row1 .number').text("10");
        $('.row2 .number').text("50");
        $('.row3 .number').text("25");
        $('.row1 .bar').css("width", "20%");
        $('.row2 .bar').css("width", "100%");
        $('.row3 .bar').css("width", "50%");
    }

    //Prev and Next buttons, guns

    function rpg() {
        $('.car').attr('src', 'svgs/guns/rpg.svg');
        $('.row1 .number').text("1");
        $('.row2 .number').text("100");
        $('.row3 .number').text("1");
        $('.row1 .bar').css("width", "10%");
        $('.row2 .bar').css("width", "100%");
        $('.row3 .bar').css("width", "5%");
    }

    function g36() {
        $('.car').attr('src', 'svgs/guns/g36.svg');
        $('.row1 .number').text("10");
        $('.row2 .number').text("15");
        $('.row3 .number').text("30");
        $('.row1 .bar').css("width", "50%");
        $('.row2 .bar').css("width", "15%");
        $('.row3 .bar').css("width", "60%");
    }

    function eagle() {
        $('.car').attr('src', 'svgs/guns/eagle.svg');
        $('.row1 .number').text("3");
        $('.row2 .number').text("50");
        $('.row3 .number').text("7");
        $('.row1 .bar').css("width", "20%");
        $('.row2 .bar').css("width", "50%");
        $('.row3 .bar').css("width", "30%");
    }

    //Category menu

    function pickCharacter() {
        $('.graph').addClass('characters').removeClass('carsguns');
        $('.offset > img').addClass('char').removeClass('car');
        primero();
        $('.row1 .name').text("Offense");
        $('.row2 .name').text("Defense");
        $('.row3 .name').text("Agility");
        closeMenu();
    }

    function pickVehicle() {
        $('.graph').addClass('carsguns').removeClass('characters');
        $('.offset > img').addClass('car').removeClass('char');
        sabreTurbo();
        $('.row1 .name').text("0-60 mph");
        $('.row2 .name').text("Top speed");
        $('.row3 .name').text("Handling");
        closeMenu();
    }

    function pickWeapon() {
        $('.graph').addClass('carsguns').removeClass('characters');
        $('.offset > img').addClass('car').removeClass('char');
        rpg();
        $('.row1 .name').text("Fire Rate");
        $('.row2 .name').text("Damage");
        $('.row3 .name').text("Capacity");
        closeMenu();
    }

    $('.item1').click(function () {
        pickCharacter();
        $('.item1').addClass("chosen").siblings().removeClass("chosen");
    });

    $('.item2').click(function () {
        pickWeapon();
        $('.item2').addClass("chosen").siblings().removeClass("chosen");
    });

    $('.item3').click(function () {
        pickVehicle();
        $('.item3').addClass("chosen").siblings().removeClass("chosen");
    });


    $('.prev').click(function () {
        //Cars
        if ($('.car').attr('src') == 'svgs/sabre.svg') {
            sentinelXS();
        }
        else if ($('.car').attr('src') == 'svgs/infernus.svg') {
            sabreTurbo();
        }
        else if ($('.car').attr('src') == 'svgs/sentinel.svg') {
            infernus();
        }
        //Chars
        else if ($('.char').attr('src') == 'svgs/chars/primero.svg') {
            gorilla();
        }
        else if ($('.char').attr('src') == 'svgs/chars/segundo.svg') {
            primero();
        }
        else if ($('.char').attr('src') == 'svgs/chars/gorilla.svg') {
            segundo();
        }
        //Guns
        else if ($('.car').attr('src') == 'svgs/guns/rpg.svg') {
            eagle();
        }
        else if ($('.car').attr('src') == 'svgs/guns/g36.svg') {
            rpg();
        }
        else if ($('.car').attr('src') == 'svgs/guns/eagle.svg') {
            g36();
        }
    });

    $('.next').click(function () {
        //Cars
        if ($('.car').attr('src') == 'svgs/sabre.svg') {
            infernus();
        }
        else if ($('.car').attr('src') == 'svgs/infernus.svg') {
            sentinelXS();
        }
        else if ($('.car').attr('src') == 'svgs/sentinel.svg') {
            sabreTurbo();
        }
        //Chars
        else if ($('.char').attr('src') == 'svgs/chars/primero.svg') {
            segundo();
        }
        else if ($('.char').attr('src') == 'svgs/chars/segundo.svg') {
            gorilla();
        }
        else if ($('.char').attr('src') == 'svgs/chars/gorilla.svg') {
            primero();
        }
        //Guns
        else if ($('.car').attr('src') == 'svgs/guns/rpg.svg') {
            g36();
        }
        else if ($('.car').attr('src') == 'svgs/guns/g36.svg') {
            eagle();
        }
        else if ($('.car').attr('src') == 'svgs/guns/eagle.svg') {
            rpg();
        }

    });

    pickCharacter();
    primero();

});
