let input=document.querySelector("input");
let clr=document.querySelector("#clr");
let del=document.querySelector("#del");
let one=document.querySelector("#one");
let two=document.querySelector("#two");
let thre=document.querySelector("#thre");
let four=document.querySelector("#four");
let five=document.querySelector("#five");
let six=document.querySelector("#six");
let seven=document.querySelector("#seven");
let eight=document.querySelector("#eight");
let nine=document.querySelector("#nine");
let zero=document.querySelector("#zero");

let natija=document.querySelector("#natija");
let being=document.querySelector("#b1");
let multiplication=document.querySelector("#b2");
let subtraction=document.querySelector("#b3");
let insert=document.querySelector("#b4");
let equality=document.querySelector("#equality");


let container=document.querySelector("#container");

let data=new Date();
let bb=data.getHours();

if (((bb>0) && (bb<=6))|| ((bb<=23) && (bb>=18))) {
    container.className="container1";
    console.log(bb);  
}

let d="",c="";
dot.addEventListener("click" , function () {
    input.value=d+".";
    d=input.value;
});
one.addEventListener("click" , function () {
    input.value=d+"1";
    d=input.value;
});
two.addEventListener("click" , function () {
    input.value=d+"2";
    d=input.value;
});
thre.addEventListener("click" , function () {
    input.value=d+"3";
    d=input.value;
});
four.addEventListener("click" , function () {
    input.value=d+"4";
    d=input.value;
});
five.addEventListener("click" , function () {
    input.value=d+"5";
    d=input.value;
});
six.addEventListener("click" , function () {
    input.value=d+"6";
    d=input.value;
});
seven.addEventListener("click" , function () {
    input.value=d+"7";
    d=input.value;
});
eight.addEventListener("click" , function () {
    input.value=d+"8";
    d=input.value;
});
nine.addEventListener("click" , function () {
    input.value=d+"9";
    d=input.value;
});
zero.addEventListener("click" , function () {
    input.value=d+"0";
    d=input.value;
});


being.addEventListener("click" , function () {
    input.value=d+"/";
    d=input.value;
});

subtraction.addEventListener("click" , function () {
    input.value=d+"-";
    d=input.value;
});

insert.addEventListener("click" , function () {
    input.value=d+"+";
    d=input.value;
});

multiplication.addEventListener("click" , function () {
    input.value=d+"*";
    d=input.value;
});

del.addEventListener("click" , function () {
    input.value=(input.value).slice(0,-1);
});

clr.addEventListener("click" , function () {
    input.value="";
    natija.textContent="";
    d="";
});

equality.addEventListener("click" , function () {
    input.value=d+"=";
    let a,b,c;
    for (let i = 0; i <(input.value).length; i++) {
        if ((input.value[i]=="/" )) {
            b=+(input.value).slice(0,i);
            c=+(input.value).slice(i+1,-1);
            a= (b) / (c);
        }
        else if((input.value[i]=="*")){
            b=+(input.value).slice(0,i);
            c=+(input.value).slice(i+1,-1);
            a= (b) * (c);
        }
        else if(input.value[i]=="+"){
            b=+(input.value).slice(0,i);
            c=+(input.value).slice(i+1,-1);
            a= (b) + (c);
        }
        else if(input.value[i]=="-"){
            b=+(input.value).slice(0,i);
            c=+(input.value).slice(i+1,-1);
            a= (b) - (c);
        }  
    }
    natija.textContent="="+a;
    console.log(a);
});




