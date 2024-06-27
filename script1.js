let karta = document.querySelector("#play > div.box");

for(let i = 0; i < 32; i++){
    let blociKarti = document.createElement("div")
    blociKarti.classList.add('square')
    blociKarti.dataset.content = "*";
    karta.appendChild(blociKarti);
}

let div1 = document.getElementById("map_namber");
let win = document.getElementById("win");

document.querySelector("#play > div.create_game_map").addEventListener("click", create_random_game_map);
document.querySelector("#play > div.TestingOfMentalAbilities").addEventListener("click", verification);

var proverka;
var proverka2 = 0;
var str = '';
var map_namber;
let nadobno = document.getElementsByClassName('ninja');

function verification(){
    if(proverka == 1){
        testFirstGameMap();
    }
    else if(proverka == 2){
        testSecondGameMap();
    } 
    else if(proverka == 3){
        testThirdGameMap();
    } 
    else if(proverka == 4){
        testFourthGameMap();
    }  
}

let iveBeenDoingThisForThreeDays = document.getElementsByClassName('square');
for(let i = 0; i < iveBeenDoingThisForThreeDays.length; i++){
    iveBeenDoingThisForThreeDays[i].onclick = function(){
        if (iveBeenDoingThisForThreeDays[i].dataset.content == "*") {
            iveBeenDoingThisForThreeDays[i].style.background = "#000";
            iveBeenDoingThisForThreeDays[i].dataset.content = "#";
        }
        else{
            iveBeenDoingThisForThreeDays[i].style.background = "white";
            iveBeenDoingThisForThreeDays[i].dataset.content = "*";
        }
    }
}

function create_random_game_map(){
    win.style.background = "white";
    for(var i = 0; i < 32; i++){
        iveBeenDoingThisForThreeDays[i].dataset.content = "*";
        iveBeenDoingThisForThreeDays[i].style.background = "white";
    }

    if(proverka2 != 0){
        for(var i = 0; i < 32; i++){
            iveBeenDoingThisForThreeDays[i].classList.remove('ninja');
        }
        proverka2 = 0;
    }

    map_namber = Math.floor(Math.random() * (5 - 1)) + 1;

    if(proverka == map_namber){
        create_random_game_map();
    } else if(map_namber == 1){
        create_first_game_map();
        str = 8;
        div1.innerHTML = str;
    } else if(map_namber == 2){
        create_second_game_map();
        str = 6;
        div1.innerHTML = str;
    } else if(map_namber == 3){
        create_third_game_map();
        str = 5;
        div1.innerHTML = str;
    } else if(map_namber == 4){
        create_fourth_game_map();
        str = 4;
        div1.innerHTML = str;
    }

    proverka = map_namber;
}


function create_first_game_map(){
    iveBeenDoingThisForThreeDays[0].classList.add('ninja');
    iveBeenDoingThisForThreeDays[1].classList.add('ninja');
    iveBeenDoingThisForThreeDays[3].classList.add('ninja');
    iveBeenDoingThisForThreeDays[4].classList.add('ninja');
    iveBeenDoingThisForThreeDays[5].classList.add('ninja');
    iveBeenDoingThisForThreeDays[6].classList.add('ninja');
    iveBeenDoingThisForThreeDays[8].classList.add('ninja');
    iveBeenDoingThisForThreeDays[12].classList.add('ninja');
    iveBeenDoingThisForThreeDays[15].classList.add('ninja');
    iveBeenDoingThisForThreeDays[16].classList.add('ninja');
    iveBeenDoingThisForThreeDays[20].classList.add('ninja');
    iveBeenDoingThisForThreeDays[22].classList.add('ninja');
    iveBeenDoingThisForThreeDays[23].classList.add('ninja');
    iveBeenDoingThisForThreeDays[31].classList.add('ninja');
    
    proverka2 = 14;
}

function testFirstGameMap(){
    if( iveBeenDoingThisForThreeDays[2].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[7].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[9].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[10].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[11].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[13].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[14].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[17].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[18].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[19].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[21].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[24].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[25].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[26].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[27].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[28].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[29].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[30].dataset.content == "#" 
    ){
        win.style.background = "#000";
    }
}

function create_second_game_map(){   
    iveBeenDoingThisForThreeDays[0].classList.add('ninja');
    iveBeenDoingThisForThreeDays[6].classList.add('ninja');
    iveBeenDoingThisForThreeDays[7].classList.add('ninja');
    iveBeenDoingThisForThreeDays[15].classList.add('ninja');
    iveBeenDoingThisForThreeDays[16].classList.add('ninja');
    iveBeenDoingThisForThreeDays[22].classList.add('ninja');
    iveBeenDoingThisForThreeDays[23].classList.add('ninja');
    iveBeenDoingThisForThreeDays[24].classList.add('ninja');
    iveBeenDoingThisForThreeDays[25].classList.add('ninja');
    iveBeenDoingThisForThreeDays[26].classList.add('ninja');
    iveBeenDoingThisForThreeDays[27].classList.add('ninja');
    iveBeenDoingThisForThreeDays[28].classList.add('ninja');
    iveBeenDoingThisForThreeDays[29].classList.add('ninja');
    iveBeenDoingThisForThreeDays[30].classList.add('ninja');
    iveBeenDoingThisForThreeDays[31].classList.add('ninja');
    
    proverka2 = 15;
}

function testSecondGameMap(){
    if( iveBeenDoingThisForThreeDays[1].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[2].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[3].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[4].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[5].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[8].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[9].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[10].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[11].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[12].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[13].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[14].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[17].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[18].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[19].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[20].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[21].dataset.content == "#" 
    ){
        win.style.background = "#000";
    }
}

function create_third_game_map(){  
    iveBeenDoingThisForThreeDays[0].classList.add('ninja');
    iveBeenDoingThisForThreeDays[4].classList.add('ninja');
    iveBeenDoingThisForThreeDays[5].classList.add('ninja');
    iveBeenDoingThisForThreeDays[6].classList.add('ninja');
    iveBeenDoingThisForThreeDays[7].classList.add('ninja');
    iveBeenDoingThisForThreeDays[13].classList.add('ninja');
    iveBeenDoingThisForThreeDays[14].classList.add('ninja');
    iveBeenDoingThisForThreeDays[15].classList.add('ninja');
    iveBeenDoingThisForThreeDays[16].classList.add('ninja');
    iveBeenDoingThisForThreeDays[21].classList.add('ninja');
    iveBeenDoingThisForThreeDays[22].classList.add('ninja');
    iveBeenDoingThisForThreeDays[23].classList.add('ninja');
    iveBeenDoingThisForThreeDays[24].classList.add('ninja');
    iveBeenDoingThisForThreeDays[28].classList.add('ninja');
    iveBeenDoingThisForThreeDays[29].classList.add('ninja');
    iveBeenDoingThisForThreeDays[30].classList.add('ninja');
    iveBeenDoingThisForThreeDays[31].classList.add('ninja');
    
    proverka2 = 17;
}

function testThirdGameMap(){
    if( iveBeenDoingThisForThreeDays[1].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[2].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[3].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[8].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[9].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[10].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[11].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[12].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[17].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[18].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[19].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[20].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[25].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[26].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[27].dataset.content == "#" 
    ){
        win.style.background = "#000";
    }
}

function create_fourth_game_map(){    
    iveBeenDoingThisForThreeDays[0].classList.add('ninja');
    iveBeenDoingThisForThreeDays[1].classList.add('ninja');
    iveBeenDoingThisForThreeDays[2].classList.add('ninja');
    iveBeenDoingThisForThreeDays[4].classList.add('ninja');
    iveBeenDoingThisForThreeDays[5].classList.add('ninja');
    iveBeenDoingThisForThreeDays[6].classList.add('ninja');
    iveBeenDoingThisForThreeDays[7].classList.add('ninja');
    iveBeenDoingThisForThreeDays[12].classList.add('ninja');
    iveBeenDoingThisForThreeDays[13].classList.add('ninja');
    iveBeenDoingThisForThreeDays[14].classList.add('ninja');
    iveBeenDoingThisForThreeDays[15].classList.add('ninja');
    iveBeenDoingThisForThreeDays[20].classList.add('ninja');
    iveBeenDoingThisForThreeDays[21].classList.add('ninja');
    iveBeenDoingThisForThreeDays[22].classList.add('ninja');
    iveBeenDoingThisForThreeDays[23].classList.add('ninja');
    iveBeenDoingThisForThreeDays[25].classList.add('ninja');
    iveBeenDoingThisForThreeDays[26].classList.add('ninja');
    iveBeenDoingThisForThreeDays[27].classList.add('ninja');
    iveBeenDoingThisForThreeDays[28].classList.add('ninja');
    iveBeenDoingThisForThreeDays[29].classList.add('ninja');
    iveBeenDoingThisForThreeDays[30].classList.add('ninja');
    iveBeenDoingThisForThreeDays[31].classList.add('ninja');
    
    proverka2 = 22;
}

function testFourthGameMap(){
    if( iveBeenDoingThisForThreeDays[3].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[8].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[9].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[10].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[11].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[16].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[17].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[18].dataset.content == "*" &&
        iveBeenDoingThisForThreeDays[19].dataset.content == "#" &&
        iveBeenDoingThisForThreeDays[24].dataset.content == "#" 
    ){
        win.style.background = "#000";
    }
}