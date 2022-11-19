let childArr = document.getElementById("container");

let leftSlider = document.querySelector(".BoxItem1");


let state = 0;

function getDateAjax(day,month,year){
    let $result = '';
$.ajax({
            type: "GET",
            async:false,
            url: "./include/populateContainer.php",
            dataType: "html",
            data: {day:day ,month: month, year: year },
            success: function (data){
                $result = data;
            }
        })
return $result;
}

function getEventAjax(day,month,year){
    let $result = '';
    $.ajax({
                type: "GET",
                async:false,
                url: "./include/get_event_info.php",
                dataType: "html",
                data: {day:day ,month: month, year: year },
                success: function (data){
                    $result = data;
                }
            })
    return $result;
}

function saveAjax(id){
    let $result = '';
    $.ajax({
                type: "GET",
                async: false,
                url: "./include/saveAjax.php",
                dataType: "html",
                data: {id:id},
                success: function (data){
                    $result = data;
                }
            })
    return $result;
}

function updateMonthEvents(month,year){

    $eventDay = [];
    $value = getDateAjax('*',month,year);
    $arrValue = $value.split(' ');
    $arrValue.pop();
    console.log($value);
    $arrValue.forEach(element => {
        $eventDay.push(element.substring(8,10))
    });
    
    $eventDay.forEach(element => {
        NewMonday = FirstMondayOfMonth(1,new Date(yyyy,mm-1,1).getDay());
        classAdd = document.getElementById("Item"+(parseInt(element)-parseInt(NewMonday)));
        $(classAdd).attr("class","event");
    }); 
}
function addNewEvent(){
    
    $(childArr).children(".event").on("click", (element) => {
    NewMonday = FirstMondayOfMonth(1,new Date(yyyy,mm-1,1).getDay());
    container = element.currentTarget.id;
    containerDate=container.substring(4,6);
    containerDate=(parseInt(containerDate)+parseInt(NewMonday));
    $valueAjax=getEventAjax(containerDate,mm,yyyy);
    console.log($valueAjax);
    $arrAjax = $valueAjax.split('~');
    $name = $arrAjax[0];
    $adress = $arrAjax[1];
    $author = $arrAjax[2];
    $contacts = $arrAjax[3];
    $memberTeam = $arrAjax[4];
    $imagePath = $arrAjax[5];
    $info = $arrAjax[6];
    $mark = $arrAjax[7];
    $review = $arrAjax[8];
    $data = $arrAjax[9];
    $id = $arrAjax[10];


    let newElement = document.createElement("div");
    newElement.className = "leftSlider events";
    
    let img = $('<img />', { 
        id: 'Myid',
        src: $arrAjax[5],
        alt: 'MyAlt'
    });
    
    $(newElement).append(img)

    

    let sliderName = document.createElement("p");
    sliderName.innerHTML= "<b><i>"+$name+"</i></b>";
    sliderName.setAttribute("id","name");
    $(newElement).append(sliderName)

    let sliderAuthor = document.createElement("p");
    sliderAuthor.innerHTML= " de "+$author;
    sliderAuthor.setAttribute("id","author");
    $(newElement).append(sliderAuthor)
    
    let rating = document.createElement("div");
    rating.className = "rating";
    $(newElement).append(rating);

    let sliderMark = document.createElement("p");
    sliderMark.innerHTML= " Nota specatacolului: "+ $mark +" din 5";
    sliderMark.id = "mark";
    $(rating).append(sliderMark);

    let sliderAddress = document.createElement("p");
    sliderAddress.innerHTML= " <i> Adresa unde va avea loc evenimentul: </i> <br>"+ $adress + "<br> <br>";
    sliderAddress.id = "adress";
    $(newElement).append(sliderAddress);

    let sliderInfo = document.createElement("p");
    sliderInfo.innerHTML= "<i> Informatii despre spectacol:<br> </i>" + $info;
    sliderInfo.id = "info";
    $(newElement).append(sliderInfo);

    let buttons = document.createElement("div");
    buttons.className = "buttons";

    let exitButton = document.createElement("button");
    exitButton.id = 'exit';
    exitButton.innerHTML= "<img src = './Resources/BackGrounds/closeButton.png' ></img>";

    let saveButton = document.createElement("button");
    saveButton.innerHTML= "<img src = './Resources/BackGrounds/empty_h.png' ></img>";
    saveButton.className = "save";

    $(buttons).append(exitButton);
    $(buttons).append(saveButton)

    $(newElement).append(buttons);

    $(exitButton).click(()=>{
        $(".leftSlider").remove();
    })

    $(saveButton).click(()=>{
        $value = saveAjax($id);
        if($value == "Aleardy savead"){
            alert("Event is already in your saved list");
        }else if($value == "Updated"){
            alert("Saved");
        }else{
            alert("Log in to save changes");
        }
        
    })

    leftSlider.prepend(newElement);
    })
    
    $(childArr).children(".day").on("click", (element) => {  

        let newElement = document.createElement("div");
                newElement.className = "leftSlider";
                
                let noEvents = document.createElement("p");
                noEvents.id = "noEvents";
                noEvents.innerHTML = "X";
                $(newElement).append(noEvents);

                let noEventsText = document.createElement("p");
                noEventsText.id = "noEventsText";
                noEventsText.innerHTML = "Nici un eveniment";
                $(newElement).append(noEventsText);

                let exitButton = document.createElement("button");
                exitButton.id = 'exit';
                exitButton.innerHTML= "<img src = './Resources/BackGrounds/closeButton.png' ></img>";

                $(newElement).append(exitButton);

                $(exitButton).click(()=>{
                     $(".leftSlider").remove();
                })

                leftSlider.prepend(newElement);
    });
}
$(function(){
    addNewEvent();
    
    

    
        
    
  });
