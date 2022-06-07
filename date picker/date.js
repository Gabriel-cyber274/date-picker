let header = document.querySelector('.head')
let body = document.querySelector('.body')
let monthH = document.querySelector('.control h1')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let  headerC = document.querySelector('.head h3')
let daysE = document.querySelector('.days');
let mainHeader = document.querySelector('.mainH')
let hyphen = document.querySelector('.hypen');
let months = ["January", "February", "March", "April", "May", "June", "July", "August",
"September", "October", "November", "December"];
let write = -1;

let headA = ["C","U","S","T","O","M"," ","D","A","T","E"," ","P","I","C","K","E","R",]

let writing = setInterval(() => {
    write++
    if(write > headA.length-2) {
        clearInterval(writing)
    }
    mainHeader.textContent += headA[write];

    if(mainHeader.textContent === "CUSTOM DATE PICKER") {
        hyphen.style.display = "none";
    }
}, 200);



let date = new Date()
let month = date.getMonth()
let day = date.getDate()
let year = date.getFullYear()

let selectedDate = date;
let selectedMonth = month;
let selectedDay = day;
let selectedYear = year;


monthH.textContent = months[month] + ' ' + year;
headerC.textContent = showDate(date)

populateDays();

next.addEventListener('click', nextMonth);
prev.addEventListener('click', prevMonth);

function nextMonth() {
    month++ 
    if(month > 11) {
        month = 0;
        year++;
    }

    monthH.textContent = months[month] + ' ' + year;
    populateDays();
}

function prevMonth() {
    month-- 
    if(month < 0) {
        month = 11;
        year--;
    }
    monthH.textContent = months[month] + ' ' + year;
    populateDays();
}


function showDate(s) {
    let month = s.getMonth() + 1;
    if (month < 10 ) {
        month = "0" + month
    }

    let day = s.getDate();
    if (day < 10 ) {
        day = "0" + day
    }

    let year = s.getFullYear();


    return day + "/" + month + "/" + year 
    


}

function populateDays() {
    daysE.innerHTML = ''
    let days = 31;


    if(month === 1) {
        days = 28;
    }

    if(month === 3 || month === 5 || month === 8 || month === 10 ) {
        days = 30;
    } 

    for (let i = 0; i < days; i++) {
        let div = document.createElement('div')
        div.classList.add('dayS');
        div.textContent = (i + 1);
        daysE.appendChild(div);

        if(selectedDay=== i + 1 && selectedYear === year && selectedMonth === month) {
            div.classList.add('selected');
        }

        div.addEventListener('click',()=>{
            selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;

            headerC.textContent = showDate(selectedDate);
        })
    }
}




header.addEventListener('click', ()=> {
    if(header.classList.contains('show')){
        header.classList.remove('show')
        body.style.display = "none";
        header.style.borderBottomLeftRadius = "20px";
        header.style.borderBottomRightRadius = "20px";
    }else {
        header.classList.add('show');
        body.style.display = "block";
        header.style.borderBottomLeftRadius = "0";
        header.style.borderBottomRightRadius = "0";
    }
})