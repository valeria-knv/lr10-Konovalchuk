const imgs = [
    ".\\avocado.png",
    ".\\pomegranate.png",
    ".\\cherry.png",
    ".\\banana.png",
    ".\\kiwi.png",
    ".\\watermelon.png"
];

function GetRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = function(){
    let divText1 = document.createElement('div');
    divText1.classList.add('text');
    divText1.innerHTML = "Created by<br><br>";
    document.body.prepend(divText1);
    let div = document.createElement('div');
    div.classList.add('area');
    div.innerHTML = "casino<br>";
    divText1.after(div);
    let divText2 = document.createElement('div');
    divText2.classList.add('text2');
    divText2.innerHTML = "valeria_knv";
    div.after(divText2);
    setTimeout(() =>{
        let img = document.createElement('img');
        img.src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
        img.setAttribute("class","imgg");
        divText1.remove();
        divText2.remove();
        div.remove();
        document.body.appendChild(img);
        setTimeout(() =>{
            img.remove();
            let nickname = prompt("Enter your nickname!", "GodOfJavaScript");
            Work();
            document.getElementById('nick').innerHTML = "<h1>" + nickname + "</h1>";
        }, 1500);
    }, 3000);
}

function Work(){
    document.body.innerHTML = '<h1><div id="nick"></div></h1><div class="money"><h2>Total bet: <div style="color: red" id="total">300</div>$</h2><h2>Lines: <div style="color: red" id="lines">0 / 3</div></h2><h2>Credit: <div style="color: red" id="credit">0</div>$</h2></div>'
    document.body.innerHTML += '<div class="container"><div><img id="1" class="imgs" src=""><img id="2" class="imgs" src=""><img id="3" class="imgs" src=""></div><div><img id="4" class="imgs" src=""><img id="5" class="imgs" src=""><img id="6" class="imgs" src=""></div><div><img id="7" class="imgs" src=""><img id="8" class="imgs" src=""><img id="9" class="imgs" src=""></div><button id="btn" class="button">Go</button></div>'

    for(let i = 1; i < 10; i++)
    {
        document.getElementById([i]).setAttribute("src", imgs[GetRandom(0,5)]);
    }
    let btn = document.getElementById('btn');
    let count = 0;
    if(btn){
        btn.addEventListener("click", function(){
            for(let i = 1; i < 10; i++)
            {
                document.getElementById([i]).setAttribute("src", imgs[GetRandom(0,5)]);
            }
            if(count < 2){
                document.getElementById('lines').innerHTML = ++count + " / 3";
                document.getElementById('total').innerHTML -= Number(100);
                document.getElementById('credit').innerHTML = Number(document.getElementById('credit').innerHTML) + 100;
                if((document.getElementById('1').src == document.getElementById('2').src && document.getElementById('2').src == document.getElementById('3').src) || (document.getElementById('4').src == document.getElementById('5').src && document.getElementById('5').src == document.getElementById('6').src) || (document.getElementById('7').src == document.getElementById('8').src && document.getElementById('8').src == document.getElementById('9').src)){ 
                    alert("You win! Congratulations!");
                    document.querySelector('.container').style.cssText = "box-shadow: 0 0 30px green, 0 0 30px green";
                    document.getElementById('lines').innerHTML = ++count + " / 3";
                    document.getElementById('total').innerHTML = 1000;
                    document.getElementById('credit').innerHTML = 0;
                    count = 0;
                    document.getElementById('btn').innerHTML = "Restart";
                    document.getElementById('btn').onclick = function(){
                        window.location.href=".\\index.html";
                    }
                }
            }
            else{
                alert("You lose! Try next time!");
                document.querySelector('.container').style.cssText = "box-shadow: 0 0 30px red, 0 0 30px red";
                document.getElementById('lines').innerHTML = ++count + " / 3";
                document.getElementById('total').innerHTML -= Number(100);
                document.getElementById('credit').innerHTML = Number(document.getElementById('credit').innerHTML) + 100;
                count = 0;
                btn.innerHTML = "Restart";
                btn.onclick = function(){
                    window.location.href=".\\index.html";
                }
            }
        });
    }
}
