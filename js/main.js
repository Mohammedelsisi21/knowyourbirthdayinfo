


function age(birthdate) {
    var birthdate = new Date(birthdate);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear() -
        (today.getMonth() < birthdate.getMonth() ||
            (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age +" "+"😘😘";
}

function findSign(date) {
    var dateOfbirth = new Date(date);
    var days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    var signs = ["الدلو 🪣🪣", "الحوت 🐳🐳", "الحمل 🤰🤰", "الثور 🐃🐃", "الجوزاء 💃💃", "السرطان 🦀🦀", "الأسد 🦁🦁", "العذراء 🧕🧕", "الميزان ⚖️⚖️", "العقرب 🦂🦂", "القوس 🏹🏹", "الجدي 🐏🐏"];
    var month = dateOfbirth.getMonth();
    var day = dateOfbirth.getDate();
    if (month == 0 && day <= 20) {
        month = 11;
    } else if (day < days[month]) {
        month--;
    };
    return signs[month];
};


function Whichday(date){
    var day = new Date(date);
    var getday = day.getDay();
    if(getday == 0){
        return `الاحد 🤍🤍`
        }
    else if (getday == 1){
        return 'الاثنين ♥️♥️'
    }
    else if (getday == 2){
        return 'الثلاثاء 🤍🤍'
    }
    else if (getday == 3){
        return 'الاربعاء 🤍🤍'
    }
    else if (getday == 4){
        return 'الخميس ♥️♥️'
    }
    else if (getday == 5){
        return 'الجمعه 🤍🤍'
    }
    else if (getday == 6){
        return 'السبت 🤍🤍'
    }
    
}


function daysToBirthday(birthday) {

    // Get today's date
    var today = new Date();
    var birthday = new Date(birthday); // April 15
    // Get next birthday 
    var nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
    // If next birthday is in the past, use next year's birthday 
    if(nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    // Calculate time difference between dates in milliseconds  
    var dateDiff = nextBirthday - today;  
    // Convert milliseconds to days
    var daysToBirthday = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    return daysToBirthday +" "+ "يوما🥳🥳🥳";
}
  // Example



var mydate = document.getElementById("mydate")
var agesection = document.getElementById("agesection");
var zodiacsection = document.getElementById("zodiacsection");
var Daysection = document.getElementById("Daysection");
var tonext   = document.getElementById("tonext");
var cameagy  =document.getElementById("cameagy");
var Hijri = document.getElementById("Hijri");


function send() {
    var birthdate = mydate.value;
    var clientAge = age(birthdate)
    var clientZodiac = findSign(birthdate);
    var dayOfbith = Whichday(birthdate);
    var next= daysToBirthday(birthdate);
    var nextage = parseInt(clientAge) + 1;
    var HI =      writeHijri(birthdate);


    Hijri.innerHTML   =  HI;
    agesection.innerHTML = clientAge;
    zodiacsection.innerHTML = clientZodiac;
    Daysection.innerHTML = dayOfbith;
    tonext.innerHTML = next;
    cameagy.innerHTML = nextage ;
}



// date is optional, defaults to today
function writeHijri(birthdate) {
    var birthdate = new Date(birthdate);
    var options = {
        year: 'numeric', month: 'long', day: 'numeric'
    };
    return birthdate.toLocaleString('ar' + '-u-ca-islamic', options);
}
