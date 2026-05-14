let condition=false
let btns=document.querySelectorAll("button")
const playerOneWins=document.getElementById('playerOneWins')
const playeTwoWins=document.getElementById('playeTwoWins')
const Draw=document.getElementById('Draw')
let counter=0;

btns.forEach(button => {
    button.addEventListener("click",function(){
        if(game.style.display!="none")
       {
        counter+=1;
        ClickSound.currentTime = 0;
        ClickSound.play();
        if(condition&&this.textContent!="O"&&this.textContent!="X"){
            this.textContent="O"
            condition=false
   
        }
        else if(this.textContent!="O"&&this.textContent!="X")
        {
            this.textContent="X"
            condition=true
     
        }
        check();

    }
    })
});

function check(){
let btn1=document.getElementById("1").textContent
let btn2=document.getElementById("2").textContent
let btn3=document.getElementById("3").textContent
let btn4=document.getElementById("4").textContent
let btn5=document.getElementById("5").textContent
let btn6=document.getElementById("6").textContent
let btn7=document.getElementById("7").textContent
let btn8=document.getElementById("8").textContent
let btn9=document.getElementById("9").textContent

    if(btn1=="X"&&btn2=="X"&&btn3=="X"||
        btn4=="X"&&btn5=="X"&&btn6=="X"||
        btn7=="X"&&btn8=="X"&&btn9=="X"||
        btn1=="X"&&btn4=="X"&&btn7=="X"||
        btn2=="X"&&btn5=="X"&&btn8=="X"||
        btn3=="X"&&btn6=="X"&&btn9=="X"||
        btn3=="X"&&btn5=="X"&&btn7=="X"||
        btn1=="X"&&btn5=="X"&&btn9=="X")
          
        {
            playerOneWins.currentTime = 0;
            playerOneWins.play();
            setTimeout(() =>{
                Draw.currentTime = 0;
                Draw.play();
                btns.forEach(button => {
                    button.textContent=""
                })
            },1500);
          
        }

    else if(btn1=="O"&&btn2=="O"&&btn3=="O"||
        btn4=="O"&&btn5=="O"&&btn6=="O"||
        btn7=="O"&&btn8=="O"&&btn9=="O"||
        btn1=="O"&&btn4=="O"&&btn7=="O"||
        btn2=="O"&&btn5=="O"&&btn8=="O"||
        btn3=="O"&&btn6=="O"&&btn9=="O"||
        btn3=="O"&&btn5=="O"&&btn7=="O"||
        btn1=="O"&&btn5=="O"&&btn9=="O")
        { 
            playeTwoWins.play();
            playeTwoWins.currentTime = 0;
            setTimeout(() =>{
                Draw.currentTime = 0;
                Draw.play();
                btns.forEach(button => {
                    button.textContent=""
                })
            },1500);
           } 
     
    else if(counter==9)
        { 
            Draw.currentTime = 0;
            Draw.play();
            setTimeout(() =>{
                btns.forEach(button => {
                    button.textContent=""
                })
            },1500);
        }
        
}


// document.getElementById("try").addEventListener("click",function(){
//     window.location.reload()
// })
/////////////////////////////////////////////////////////////
///////////////////////game

const game=document.getElementById('game');
game.style.display="none"



///////////////////////////////////////////////////////////////////////////////////////////menu
//////////////////sound buttons
const previmg=document.querySelector('.carousel-control-prev')
const nextimg=document.querySelector('.carousel-control-next')
const carousels=document.querySelectorAll('.slide')
const emenu =document.querySelectorAll('.menu-element');
const HoverSound=document.getElementById('HoverSound');
const ClickSound=document.getElementById('ClickSound');
const backgroundSound=document.getElementById('backgroundSound');

emenu.forEach(element => {
element.addEventListener('mouseenter',()=>{
    HoverSound.currentTime = 0;
    HoverSound.play();
});
})
emenu.forEach(element => {
    element.addEventListener('click',()=>{
        ClickSound.currentTime = 0;
        ClickSound.play();
    });
    })
carousels.forEach(element => {
    element.addEventListener('click',()=>{
        ClickSound.currentTime = 0;
        ClickSound.play();
    });
    })
previmg.addEventListener("click",()=>{
    ClickSound.currentTime = 0;
        ClickSound.play();
})
nextimg.addEventListener("click",()=>{
    ClickSound.currentTime = 0;
        ClickSound.play();
})


////////////////////////////////////////////////////////////
///////////////////////song run
const imgStart=document.getElementById('imgStart');
const imgStop=document.getElementById('imgStop');

imgStop.style.display = "none";

imgStart.addEventListener("click",()=>{
    imgStop.style.display = "block";
    imgStart.style.display = "none";
    
    if(song1)
    {
        backgroundSound.play();
    }
    else if(song2)
    {
        Beliver.play();
    }
    else if(song3)
    {
        shape.play();
    }
    else
    {
        wild.play();
    }

})
imgStop.addEventListener("click",()=>{
    imgStart.style.display = "block";
    imgStop.style.display = "none";
    
    Beliver.pause();
    shape.pause();
    wild.pause();
    backgroundSound.pause();
})
/////////////////////exit button
const Exit=document.getElementById('Exit');
const bye=document.getElementById('bye')
const nobye=document.getElementById('nobye')
const byebye=document.getElementById('byebye')
bye.style.display="none"
Exit.addEventListener("click",()=>{
    bye.style.display="block"
})

byebye.addEventListener("click",()=>{
    window.close();
})
nobye.addEventListener("click",()=>{
    bye.style.display="none"
})
//////////////////////////option
const option=document.getElementById('option');
const options=document.getElementById('options');
const menu=document.getElementById('menu');
const back=document.getElementById('back');
options.style.display="none"

option.addEventListener("click", ()=>{
    menu.style.display="none"
    options.style.display="block"
    bye.style.display="none"
})

back.addEventListener("click", ()=>{
    menu.style.display="block"
    options.style.display="none"
})
////music
const songs=document.getElementById('songs');
const music=document.getElementById('music');
songs.style.display="none"

music.addEventListener("click",()=>{
    if(songs.style.display=="flex")
    {
        songs.style.display="none"
    }
    else 
    {
    songs.style.display="flex"
    }

    backgroundSlide.style.display="none";
})

const Beliver_button=document.getElementById("Beliver_button");
const shape_button=document.getElementById("shape_button");
const wild_button=document.getElementById("wild_button");
const Default=document.getElementById("Default");
const Beliver=document.getElementById("Beliver");
const shape=document.getElementById("shape");
const wild=document.getElementById("wild");
let song1=1,song2=0,song3=0,song4=0;

    Beliver_button.addEventListener("click",()=>{
        song1=0;
        song2=1;
        song3=0;
        song4=0;
        Beliver.play();
        shape.pause();
        wild.pause();
        backgroundSound.pause();

        imgStop.style.display = "block";
        imgStart.style.display = "none";
    })

    shape_button.addEventListener("click",()=>{
        song1=0;
        song2=0;
        song3=1;
        song4=0;
        Beliver.pause();
        shape.play();
        wild.pause();
        backgroundSound.pause();

        imgStop.style.display = "block";
        imgStart.style.display = "none";
    })

    wild_button.addEventListener("click",()=>{
        song1=0;
        song2=0;
        song3=0;
        song4=1;
        Beliver.pause();
        shape.pause();
        wild.play();
        backgroundSound.pause();

        imgStop.style.display = "block";
        imgStart.style.display = "none";
    })

    Default.addEventListener("click",()=>{
        song1=1;
        song2=0;
        song3=0;
        song4=0;
        Beliver.pause();
        shape.pause();
        wild.pause();
        backgroundSound.play();

        imgStop.style.display = "block";
        imgStart.style.display = "none";
    })
    //////////////////////////////////////
    // ////theme
    const theme=document.getElementById('theme');
    const backgroundSlide=document.getElementById('carouselExampleIndicators');

    backgroundSlide.style.display="none"

    theme.addEventListener("click",()=>{
        if(  backgroundSlide.style.display=="none")
        {
              backgroundSlide.style.display="block";
        }
        else
        {
              backgroundSlide.style.display="none";
        }
        songs.style.display="none"
    })

const img1=document.getElementById('img1');
const img2=document.getElementById('img2');
const img3=document.getElementById('img3');
const img4=document.getElementById('img4');
const img5=document.getElementById('img5');
const img6=document.getElementById('img6');
const frame=document.getElementById('frame');

img1.addEventListener("click",()=>{
    frame.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6b86bdb4-540f-4240-bed6-228912593dc2/dgd86aq-3d44b9c4-98d6-4046-8b89-4864aaaf92e7.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZiODZiZGI0LTU0MGYtNDI0MC1iZWQ2LTIyODkxMjU5M2RjMlwvZGdkODZhcS0zZDQ0YjljNC05OGQ2LTQwNDYtOGI4OS00ODY0YWFhZjkyZTcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e_lrm6FRAmeZg8jTX-zXMAwHLDXqyYmXlVhc_LnFp5g')";
})
img2.addEventListener("click",()=>{
    frame.style.backgroundImage = "url('https://i.gjcdn.net/public-data/games/6/148/435648/media/game-description/purplenight-wwzj3jae.gif')";
})
img3.addEventListener("click",()=>{
    frame.style.backgroundImage = "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/9bc27292880429.5e569ff84e4d0.gif')";
})
img4.addEventListener("click",()=>{
    frame.style.backgroundImage = "url('https://wallpapers-clan.com/wp-content/uploads/2024/03/dragon-ball-goku-sparks-gif-preview-desktop-wallpaper.gif')";
})
img5.addEventListener("click",()=>{
    frame.style.backgroundImage = "url('https://steamuserimages-a.akamaihd.net/ugc/1710790339046320170/F22008124D0F7CFFB396B63804AFAB1CB58D185A/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true')";
})
img6.addEventListener("click",()=>{
    frame.style.backgroundImage = "url('https://steamuserimages-a.akamaihd.net/ugc/857234126991079163/66F3363D337A6479CF71C56242756B83938D3064/?imw=1024&imh=684&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true')";
})
///////////////////////////////////////////////////////////////////////
///////////////play
const play=document.getElementById('play');
const players_names_container=document.getElementById('players_names_container');


players_names_container.style.display="none"

play.addEventListener("click",()=>{
    menu.style.display="none";
    players_names_container.style.display="flex"

})
//////////////////////
const player_one_name=document.getElementById('player_one_name')
const player_two_name=document.getElementById('player_two_name')
const right_arrow=document.getElementById('right_arrow');
const left_arrow=document.getElementById('left_arrow');
const wrong=document.getElementById('wrong');
const name1=document.getElementById('name1');
const name2=document.getElementById('name2');
const roundOne=document.getElementById('roundOne');


const nameregex=/^[A-Za-z]+([ ][A-Za-z]+)*$/

right_arrow.addEventListener("click",()=>{
        if(nameregex.test(player_one_name.value)&&nameregex.test(player_two_name.value))
       { 
        name1.textContent=player_one_name.value;
        name2.textContent=player_two_name.value;
        ClickSound.currentTime = 0;
        ClickSound.play();
        players_names_container.style.display="none"
        game.style.display="flex"
        setTimeout(()=>{      
            roundOne.currentTime=0;
            roundOne.play();
        },500)
       }
        else
        {
            wrong.currentTime = 0;
            wrong.play();
        }
})

right_arrow.addEventListener('mouseenter',()=>{
    HoverSound.currentTime = 0;
    HoverSound.play();
});
left_arrow.addEventListener("click",()=>{
    ClickSound.currentTime = 0;
        ClickSound.play();
        players_names_container.style.display="none"
        menu.style.display="block";
})
left_arrow.addEventListener('mouseenter',()=>{
    HoverSound.currentTime = 0;
    HoverSound.play();
});
/////////////////////////////////////////////////////////////
