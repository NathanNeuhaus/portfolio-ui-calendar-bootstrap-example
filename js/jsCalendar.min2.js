
function getDaysInMonth( month ){
    var d = new Date();
    var y = d.getFullYear();
    var d1= new Date( y , month+1, 0);
    var d = d1.getDate();
    return d;
}

function getDaysInMonthPrevYear( month ){
    var d = new Date();
    var y = d.getFullYear();
    var d1= new Date( y-1 , month+1, 0);
    var d = d1.getDate();
    return d;
}

function getFirstDayInMonth( month ){
    var d = new Date();
    var y = d.getFullYear();
    var d2= new Date( y , month, 1);
    var n = d2.getDay();
    return n;
}

function getDaysEachMonth(){
    var totals = [];
    for( var i = 0; i < 12; i++ ){
        totals.push(getDaysInMonth(i));
    }
    return totals;
}

function getDaysEachMonthPrevYear(){
    var totals = [];
    for( var i = 0; i < 12; i++ ){
        totals.push(getDaysInMonthPrevYear(i));
    }
    return totals;
}


function getFirstDayOfWeek(){
    var totals = [];
    for( var i = 0; i < 12; i++ ){
        totals.push(getFirstDayInMonth(i));
    }
    return totals;
}


function getMonthName( m ){
  if(m === 0) return "January";
  if(m === 1) return "February";
  if(m === 2) return "March";
  if(m === 3) return "April";
  if(m === 4) return "May";
  if(m === 5) return "June";
  if(m === 6) return "July";
  if(m === 7) return "August";
  if(m === 8) return "September";
  if(m === 9) return "October";
  if(m === 10) return "November";
  if(m === 11) return "December";
}

function setMonthName( name, m ){
  var el = document.getElementById(name+"_title");
  el.innerHTML = getMonthName( m ); 
}


function setCalendar( name , month ){
    m = month - 1;
    
    
    var el;
    var PrevYr          = getDaysEachMonthPrevYear();
    var daysInEachMonth = getDaysEachMonth();
    var firstDayInMonth = getFirstDayOfWeek();
    var prevStart = m === 0 ? PrevYr[PrevYr.length-1] : daysInEachMonth[m-1];
    
    for( var i = 0 ; i < firstDayInMonth[m]; i++ ){
        el = document.getElementById( name+"_"+(i) );
        el.className = "jsCalendar-previous";
        inv = firstDayInMonth[m] - i;
        el.innerHTML = ( prevStart - inv ) + 1;
    }
    
    console.log( "M: "+m + " " + firstDayInMonth ); 
    for( var i = 0 ; i < daysInEachMonth[m]; i++ ){
        console.log( name+"_"+(firstDayInMonth[m] + i) ); 
        //if(firstDayInMonth[m] === -1 ) firstDayInMonth[m] = 0;
        el = document.getElementById( name+"_"+(firstDayInMonth[m] + i) );
        el.innerHTML = (i+1);
    }
    for( var i = daysInEachMonth[m], j = 0; firstDayInMonth[m] + i < 42; i++, j++ ){
        el = document.getElementById( name+"_"+(firstDayInMonth[m] + i) );
        el.innerHTML = (j+1);
        el.className = "jsCalendar-next";
    }
    setMonthName( name, m );
    
    
    

}

function ConvertUTCTimeToLocalTime(UTCDateString){
    var convertdLocalTime = new Date(UTCDateString);

    var hourOffset = convertdLocalTime.getTimezoneOffset() / 60;

    convertdLocalTime.setHours( convertdLocalTime.getHours() + hourOffset ); 

    return convertdLocalTime;
}
    


function setYearHeader(){
  var el = document.getElementById("YearTitle");
  var DateArray = new Date().toString().split(" ");
  var year = DateArray[3];
  el.innerHTML = year;
}

function setCurrentDay( calName ){
var UTC_TIME = new Date().toString();
var splt = UTC_TIME.split(" "); 
var day0index = (splt[2]*1)-1;
var month0index = (new Date().getMonth()*1);






var cell = getFirstDayOfWeek()[month0index] + day0index;

//alert(month0index);

//alert(getFirstDayOfWeek());

//alert(month0index); 
//alert(day0index); 
//alert(cell); 


setCalendar( calName , month0index+1 ); 
el = document.getElementById( ( calName )+"_"+(cell) );
el.className = "jsCalendar-current";


setMonthNameTitle( getMonthName( m ) );

}

function setMonthNameTitle( name ){
  var nametitle = document.getElementById( "monthName" );
  nametitle.innerHTML = name;
  
  
}



        
        
setCurrentDay("cal0");
setCalendar( "cal1", 1 ); 
setCalendar( "cal2", 2 ); 
setCalendar( "cal3", 3 ); 
setCalendar( "cal4", 4 ); 
setCalendar( "cal5", 5 ); 
setCalendar( "cal6", 6 ); 
setCalendar( "cal7", 7 ); 
setCalendar( "cal8", 8 ); 
setCalendar( "cal9", 9 ); 
setCalendar( "cal10", 10 ); 
setCalendar( "cal11", 11 ); 
setCalendar( "cal12", 12 ); 
setYearHeader();







