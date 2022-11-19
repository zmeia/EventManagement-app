    
    const monthNames = ["Decembrie","Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
    "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie", "Ianuarie"
    ];

    let gradient = "repeating-linear-gradient(135deg, rgb(169,105,44) 0px, rgb(169,105,44) 23px,rgb(113,70,29) 23px, rgb(113,70,29) 55px,rgb(213,137,71) 55px, rgb(213,137,71) 63px)";

    let today = new Date();
    console.log(today);
    let dd = String(today.getDate()).padStart(2, '0');
    console.log(dd);
    let curent = new Date(2022,03,08).getDay();//gets the day of the week
    console.log("Current day of the week "+curent);


    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    mm=parseInt(mm);//Date as Integer (actual month)
    console.log("something "+mm);
    
    let initialMonth = mm;
    let yyyy = today.getFullYear();
    
    let initialYear = yyyy;
    

    today = dd + '/' + mm + '/' + yyyy;

    

    $(".slider div.Prev").append("<p id=\"Prev\" style=\"font-family:\"Mango\"\">"+ monthNames[mm-1] +"</p>");
    $(".slider div.Curent").append("<p id=\"Curent\">"+ monthNames[mm] +"</p>");
    $(".slider div.Curent").append("<div class=\"Month_Img\"> <img src=\"./Resources/BackGrounds/steaua.png\" alt=\"Stea\" width=\"30px\"> </div>");

    $(".slider div.Next").append("<p id=\"Next\">"+ monthNames[mm+1] +"</p>");

    let Monday;  
    
    function FirstMondayOfMonth(dayOfMonth,dayOfWeek){
        Day=dayOfMonth-dayOfWeek+1
        do
        {
            Day=Day-7;
        }while(Day>0)
        if(Day==-7) Day=0;
        if(Day<=-6)Day=Day+7;
        return Day;  
    };

    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }
    //block for days of the week
    let DateArr = ['Luni','Marți','Miercuri','Joi','Vineri','Sambătă','Duminică']
    let prevMonday;
    $(function(){

    
        let Monday = FirstMondayOfMonth(dd,curent);
    prevMonday=Monday;
    /*
    <svg width="4000" height="180">
    <rect x="50" y="20" rx="70" ry="70" width="800" height="150"
    style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
    </svg>    
    */

    $.each(DateArr, function(i,val){
        $(".container").append("<div class=\"Calendar_Day\">"+val+"</div>");
    })

    for(let i = Monday,counter=0 ; i < 42 + Monday;i++,counter++){
        if(i<=0){
            switch (counter%7){
                case 0: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(daysInMonth(mm-1,yyyy)+i)+"</div>"); break;
                case 1: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(daysInMonth(mm-1,yyyy)+i)+"</div>"); break;
                case 2: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(daysInMonth(mm-1,yyyy)+i)+"</div>"); break;
                case 3: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(daysInMonth(mm-1,yyyy)+i)+"</div>"); break;
                case 4: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(daysInMonth(mm-1,yyyy)+i)+"</div>"); break;
                case 5: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(daysInMonth(mm-1,yyyy)+i)+"</div>"); break;
                case 6: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(daysInMonth(mm-1,yyyy)+i)+"</div>"); break;
                case 7: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(daysInMonth(mm-1,yyyy)+i)+"</div>"); break;
            }
            //background of the days before the month
            //$("#Item"+counter).css("color","rgba(0, 0, 0, 0.5)");
        
        }
        else if(i>daysInMonth(mm,yyyy)){
            switch (counter%7){
                case 0: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(i-daysInMonth(mm,yyyy))+"</div>");  break;
                case 1: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(i-daysInMonth(mm,yyyy))+"</div>"); break;
                case 2: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(i-daysInMonth(mm,yyyy))+"</div>"); break;
                case 3: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(i-daysInMonth(mm,yyyy))+"</div>"); break;
                case 4: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(i-daysInMonth(mm,yyyy))+"</div>"); break;
                case 5: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(i-daysInMonth(mm,yyyy))+"</div>"); break;
                case 6: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(i-daysInMonth(mm,yyyy))+"</div>"); break;
                case 7: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+(i-daysInMonth(mm,yyyy))+"</div>"); break;
            }
            //background of the days after the month
            //$("#Item"+counter).css("color","rgba(0, 0, 0, 0.5)")    
        }
        else{
            switch (counter%7){
            case 0: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+i+"</div>");  break;
            case 1: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+i+"</div>"); break;
            case 2: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+i+"</div>"); break;
            case 3: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+i+"</div>"); break;
            case 4: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+i+"</div>"); break;
            case 5: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+i+"</div>"); break;
            case 6: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+i+"</div>"); break;
            case 7: $(".container").append("<div class=\"day\" id=\"Item"+counter+"\"> "+i+"</div>"); break;
            }
        }
        //current day background
            $("#Item"+(parseInt(dd)+Math.abs(Monday) )).css("background-image",gradient);
        } 
        console.log('luna '+mm+' anul '+yyyy);
        updateMonthEvents(mm,yyyy);  
    });

    function UpdateCalendar(Month,Year,dayOfMonth,dayOfWeek){
        $("#Item"+(parseInt(dd)+Math.abs(prevMonday))).css("background-image","none");
        let Monday = FirstMondayOfMonth(dayOfMonth,dayOfWeek);
        prevMonday=Monday;
        for(let i = Monday,counter=0 ; i < 42+ Monday;i++,counter++){
            $("#Item"+counter).css(" border-top-left-radius: 5px; border-top-right-radius: 5px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border: 0.1px solid white; background-color: transparent;");
            if(i<=0){
                switch (counter%7){
                    case 0: $("#Item"+counter).html(daysInMonth(Month-1,Year)+i).attr("class","day").attr("class","day"); break;
                    case 1: $("#Item"+counter).html(daysInMonth(Month-1,Year)+i).attr("class","day"); break;
                    case 2: $("#Item"+counter).html(daysInMonth(Month-1,Year)+i).attr("class","day"); break;
                    case 3: $("#Item"+counter).html(daysInMonth(Month-1,Year)+i).attr("class","day"); break;
                    case 4: $("#Item"+counter).html(daysInMonth(Month-1,Year)+i).attr("class","day"); break;
                    case 5: $("#Item"+counter).html(daysInMonth(Month-1,Year)+i).attr("class","day"); break;
                    case 6: $("#Item"+counter).html(daysInMonth(Month-1,Year)+i).attr("class","day"); break;
                    case 7: $("#Item"+counter).html(daysInMonth(Month-1,Year)+i).attr("class","day"); break;
                }
                //background of the days before the month
                //$("#Item"+counter).css("background-image","linear-gradient(260deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(147deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(211deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(450deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(222deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(147deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(161deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(343deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(192deg, #ffffff,#ffffff)");   
            }
            else if(i>daysInMonth(mm,yyyy)){
                switch (counter%7){
                    case 0: $("#Item"+counter).html(i-daysInMonth(Month,Year)).attr("class","day").attr("class","day"); break;
                    case 1: $("#Item"+counter).html(i-daysInMonth(Month,Year)).attr("class","day").attr("class","day"); break;
                    case 2: $("#Item"+counter).html(i-daysInMonth(Month,Year)).attr("class","day").attr("class","day"); break;
                    case 3: $("#Item"+counter).html(i-daysInMonth(Month,Year)).attr("class","day").attr("class","day"); break;
                    case 4: $("#Item"+counter).html(i-daysInMonth(Month,Year)).attr("class","day").attr("class","day"); break;
                    case 5: $("#Item"+counter).html(i-daysInMonth(Month,Year)).attr("class","day").attr("class","day"); break;
                    case 6: $("#Item"+counter).html(i-daysInMonth(Month,Year)).attr("class","day").attr("class","day"); break;
                    case 7: $("#Item"+counter).html(i-daysInMonth(Month,Year)).attr("class","day").attr("class","day"); break;
                }
                //background of the days after the month
                //$("#Item"+counter).css("background-image","linear-gradient(260deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(147deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(211deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(450deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(222deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(147deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(161deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(343deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(192deg, #ffffff,#ffffff)");
            }
            else{
                switch (counter%7){
                    case 0: $("#Item"+counter).html(i).attr("class","day"); break;
                    case 1: $("#Item"+counter).html(i).attr("class","day"); break;
                    case 2: $("#Item"+counter).html(i).attr("class","day"); break;
                    case 3: $("#Item"+counter).html(i).attr("class","day"); break;
                    case 4: $("#Item"+counter).html(i).attr("class","day"); break;
                    case 5: $("#Item"+counter).html(i).attr("class","day"); break;
                    case 6: $("#Item"+counter).html(i).attr("class","day"); break;
                    case 7: $("#Item"+counter).html(i).attr("class","day"); break;
                }
                   // $("#Item"+counter).css("background-image","radial-gradient(circle at 57% 36%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 10%,transparent 10%, transparent 100%),radial-gradient(circle at 22% 61%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 36%,transparent 36%, transparent 100%),radial-gradient(circle at 68% 97%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 41%,transparent 41%, transparent 100%),radial-gradient(circle at 57% 89%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 30%,transparent 30%, transparent 100%),radial-gradient(circle at 39% 80%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 22%,transparent 22%, transparent 100%),radial-gradient(circle at 88% 71%, hsla(263,0%,78%,0.04) 0%, hsla(263,0%,78%,0.04) 30%,transparent 30%, transparent 100%),linear-gradient(0deg, rgb(255,255,255),rgb(255,255,255)");
            
            }
            //current day background;
            if(initialMonth==Month && initialYear == Year) $("#Item"+(parseInt(dd)+Math.abs(Monday))).css("background-image","repeating-linear-gradient(135deg, rgb(169,105,44) 0px, rgb(169,105,44) 23px,rgb(113,70,29) 23px, rgb(113,70,29) 55px,rgb(213,137,71) 55px, rgb(213,137,71) 63px)");
            
        }   
        updateMonthEvents(mm,yyyy);
        addNewEvent();
        
    };

    $(".slider .Next").click(function(){
        mm=mm+1;
        if(mm>=13){
            mm=mm-12;
            yyyy=yyyy+1;
        }
        document.getElementById("Prev").innerHTML=monthNames[mm-1];
        document.getElementById("Curent").innerHTML=monthNames[mm];
        document.getElementById("Next").innerHTML=monthNames[mm+1];

        UpdateCalendar(mm,yyyy,1,new Date(yyyy,mm-1,1).getDay());
        
    })

    $(".slider .Prev").click(function(){
        mm=mm-1;
        if(mm<=0) {
            mm=mm+12;
            yyyy=yyyy-1;
        }
        //out of border exception monthNames[-1] = Noiembrie
        if(mm==1)document.getElementById("Prev").innerHTML="Decembrie";
        else document.getElementById("Prev").innerHTML=monthNames[mm-1];
        document.getElementById("Curent").innerHTML=monthNames[mm];
        document.getElementById("Next").innerHTML=monthNames[mm+1];

        UpdateCalendar(mm,yyyy,1,new Date(yyyy,mm-1,1).getDay());
    })
    