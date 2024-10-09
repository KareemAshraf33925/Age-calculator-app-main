// calculator age
function calculatorage(){
    var day=document.getElementById("day").value;
    var month=document.getElementById("month").value;
    var years=document.getElementById("year").value;
    var date= new Date();
    var getday=date.getDay();
    var getmonth= 1 + date.getMonth();
    var getyear=date.getFullYear();
    var allmonth=[31,28,31,30,31,30,31,31,30,31,30,31]
    if(day ==""){
        document.getElementById("error").innerHTML="this field is required";
        document.getElementById("day").classList.add("active");
        document.querySelector(".D").classList.add("active");
    }
    if(day > 31){
        document.getElementById("error").innerHTML="must be availd day";
        document.getElementById("day").classList.add("active");
        document.querySelector(".D").classList.add("active");
    }
    if(month ==""){
        document.getElementById("error_1").innerHTML="this field is required";
        document.getElementById("month").classList.add("active");
        document.querySelector(".M").classList.add("active");
    }
    if(month > 12){
        document.getElementById("error_1").innerHTML="must be availd month";
        document.getElementById("month").classList.add("active");
        document.querySelector(".M").classList.add("active");
    }
    if(years ==""){
        document.getElementById("error_2").innerHTML="this field is required";
        document.getElementById("year").classList.add("active");
        document.querySelector(".Y").classList.add("active");
    }
    if(years > getyear){
        document.getElementById("error_2").innerHTML="must be availd year";
        document.getElementById("year").classList.add("active");
        document.querySelector(".Y").classList.add("active");
    }
    if(day >getday){
        getday=getday+allmonth[getmonth -1];
        getday=getday-1;
    }
    if(month >getmonth){
        getmonth=getmonth+12;
        getyear=getyear-1;
    }
    var d=getday-day;
    var m=getmonth-month;
    var y=getyear-years;
    document.getElementById("resu_year").innerHTML= y;
    document.getElementById("resu_month").innerHTML= m;
    document.getElementById("resu_day").innerHTML= d;
    day.value="";
    month.value="";
    years.value="";
}