function age(birthdate, isEnglish) {
    var birthdate = new Date(birthdate);
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear() -
        (today.getMonth() < birthdate.getMonth() ||
        (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()));
    return age + (isEnglish ? " years old 😘" : " سنة 😘😘");
}

function findSign(date, isEnglish) {
    var dateOfbirth = new Date(date);
    var days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
    var signs = isEnglish ? ["Aquarius 🪣🪣", "Pisces 🐳🐳", "Aries 🤰🤰", "Taurus 🐃🐃", "Gemini 💃💃", "Cancer 🦀🦀", "Leo 🦁🦁", "Virgo 🧕🧕", "Libra ⚖️⚖️", "Scorpio 🦂🦂", "Sagittarius 🏹🏹", "Capricorn 🐏🐏"] 
                        : ["الدلو 🪣🪣", "الحوت 🐳🐳", "الحمل 🤰🤰", "الثور 🐃🐃", "الجوزاء 💃💃", "السرطان 🦀🦀", "الأسد 🦁🦁", "العذراء 🧕🧕", "الميزان ⚖️⚖️", "العقرب 🦂🦂", "القوس 🏹🏹", "الجدي 🐏🐏"];
    var month = dateOfbirth.getMonth();
    var day = dateOfbirth.getDate();
    if (month == 0 && day <= 20) {
        month = 11;
    } else if (day < days[month]) {
        month--;
    }
    return signs[month];
}

function Whichday(date, isEnglish) {
    var day = new Date(date);
    var getday = day.getDay();
    
    const daysArabic = [
        'الاحد 🤍🤍',
        'الاثنين ♥️♥️',
        'الثلاثاء 🤍🤍',
        'الأربعاء 🤍🤍',
        'الخميس ♥️♥️',
        'الجمعة 🤍🤍',
        'السبت 🤍🤍'
    ];
    
    const daysEnglish = [
        'Sunday 🤍🤍',
        'Monday ♥️♥️',
        'Tuesday 🤍🤍',
        'Wednesday 🤍🤍',
        'Thursday ♥️♥️',
        'Friday 🤍🤍',
        'Saturday 🤍🤍'
    ];

    return isEnglish ? daysEnglish[getday] : daysArabic[getday];
}

function daysToBirthday(birthday, isEnglish) {
    var today = new Date();
    var birthdayDate = new Date(birthday);
    var nextBirthday = new Date(today.getFullYear(), birthdayDate.getMonth(), birthdayDate.getDate());
    
    if (nextBirthday < today) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    
    var dateDiff = nextBirthday - today;  
    var daysToBirthday = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    
    return isEnglish 
        ? daysToBirthday + " days left until your birthday! 🎉" 
        : daysToBirthday + " يوما🥳🥳🥳";
}

var mydate = document.getElementById("mydate");
var agesection = document.getElementById("agesection");
var zodiacsection = document.getElementById("zodiacsection");
var Daysection = document.getElementById("Daysection");
var tonext   = document.getElementById("tonext");
var cameagy  = document.getElementById("cameagy");
var Hijri = document.getElementById("Hijri");

let isEnglish = false; 
function send() {
    const dateInput = document.getElementById('mydate').value;
    const warningMessage = document.getElementById('warningMessage');

    if (!dateInput) {
        warningMessage.style.display = 'block';
    } else {
        warningMessage.style.display = 'none';
    }

    var birthdate = mydate.value;
    var clientAge = age(birthdate, isEnglish);
    var clientZodiac = findSign(birthdate, isEnglish);
    var dayOfbith = Whichday(birthdate, isEnglish);
    var next = daysToBirthday(birthdate, isEnglish);
    var nextage = parseInt(clientAge) + 1;
    var HI = writeHijri(birthdate);

    Hijri.innerHTML = HI;
    agesection.innerHTML = clientAge;
    zodiacsection.innerHTML = clientZodiac;
    Daysection.innerHTML = dayOfbith;
    tonext.innerHTML = next;
    cameagy.innerHTML = nextage;
}

function writeHijri(birthdate) {
    var birthdate = new Date(birthdate);
    var options = {
        year: 'numeric', month: 'long', day: 'numeric'
    };
    return birthdate.toLocaleString('ar' + '-u-ca-islamic', options);
}

function switchLanguage() {
    const languageSelect = document.getElementById('languageSelect');
    const selectedLanguage = languageSelect.value;

    if (selectedLanguage === 'ar') {
        document.documentElement.setAttribute('lang', 'ar');
        document.documentElement.style.direction = 'rtl';
        isEnglish = false;
    } else {
        document.documentElement.setAttribute('lang', 'en');
        document.documentElement.style.direction = 'ltr';
        isEnglish = true;
    }

    document.getElementById('mainTitle').innerHTML = selectedLanguage === 'ar' 
        ? 'اعرف كل المعلومات <span style="color: #305170; font-weight: 900;">من تاريخ ميلادك.</span>' 
        : 'Find all the information <span style="color: #305170; font-weight: 900;">from your birth date.</span>';

    document.getElementById('dateLabel').innerText = selectedLanguage === 'ar' ? 'اختار تاريخ ميلادك 🎉🎉' : 'Select your birth date 🎉🎉';
    document.getElementById('warningMessage').innerHTML = selectedLanguage === 'ar' ? 'يرجى إدخال البيانات قبل الإرسال . ' : 'Please enter data before submitting .';
    document.getElementById('sendButton').innerText = selectedLanguage === 'ar' ? 'ارسال' : 'Send';
    document.getElementById('ageLabel').innerText = selectedLanguage === 'ar' ? 'العمر' : 'Age';
    document.getElementById('zodiacLabel').innerText = selectedLanguage === 'ar' ? 'البرج' : 'Zodiac';
    document.getElementById('dayLabel').innerText = selectedLanguage === 'ar' ? 'يوم الميلاد' : 'Day of Birth';
    document.getElementById('timeLeftLabel').innerText = selectedLanguage === 'ar' ? 'متبقي علي' : 'Time left until';
    document.getElementById('hijriLabel').innerText = selectedLanguage === 'ar' ? 'ميلادك الهجري' : 'Your Hijri birthday';
}

const dateInput = document.getElementById('mydate').value;
if (!dateInput) {
    event.preventDefault();
    document.getElementById('warningMessage').style.display = 'block'
} else {
    document.getElementById('warningMessage').style.display = 'none'
}
