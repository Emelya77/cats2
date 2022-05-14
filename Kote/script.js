/*const storage = window.localStorage;

const divAbout=document.querySelector("div.about");
function setRate(num){
    let plus="<img src='img/ello-brands.svg'>";
    let minus="<img src='img/face-meh-blank-regular.svg'>";
    let rate="";
    let quantity=10;
    for(let i=0;i<quantity;i++){
        if(i<num){
            rate+=plus;
        }else{
            rate+=minus;
        }  
    }
    return rate;
}

  function getWord(n, w1, w2, w0) {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1;
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2;
        } else {
            return w0;
        }
    } else {
        return w0;
    }
}

function renderItem(data){
     let div= document.createElement("div");
     div.className = "card";
    div.innerHTML=`
            <h1 class="name">${data.name}</h1>
            <p class="age">${data.age} ${getWord(data.age, "год", "года", "лет")}</p>
            <div class="imglink" style="background-image: url(${data.img_link})">
            </div>

            <div class="rate">
            ${setRate(data.rate)}
            </div>
        
    `;
    div.addEventListener("click", function(e){
        window.location.replace(`cat.html#${data.id}`);
    })
    
    return div;
}



let container=document.querySelector(".card");
function setCard(cat={}){
        divAbout.append(renderItem(cat));
    }
    


let path = {
    getAll: "http://sb-cats.herokuapp.com/api/2/katya--38/show",
    getOne: "http://sb-cats.herokuapp.com/api/2/katya--38/show/",
    getId: "http://sb-cats.herokuapp.com/api/2/katya--38/ids",
    add: "http://sb-cats.herokuapp.com/api/2/katya--38/add",
    upd: "http://sb-cats.herokuapp.com/api/2/katya--38/update/",
    del: "http://sb-cats.herokuapp.com/api/2/katya--38/delete/"
}


let cats = storage.getItem("cats");
if (!cats) {
    fetch(path.getAll)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if (result.data) {
                storage.setItem("cats", JSON.stringify(result.data));
                result.data.forEach(cat => {
                    setCard(cat);
                });
            }
        });
} else {
    JSON.parse(cats).forEach(cat => {
        setCard(cat);
    });
}
*/
let container = document.querySelector(".container");
function setCard(info = {}) {
    let div = document.createElement("div");
    div.className = "cat";
    div.id = `cat_${info.id}`;
    div.innerHTML = `
        <div class="img" style="background-image: url(${info.img_link || 'img/ili.jpg'})"></div>
        <div class="name">${info.name || "Vasya"}</div>
        <div class="del">×</div>
        
    `;
 
    div.addEventListener("click", function(e) {
        window.location.replace(`cat.html#${info.id}`);
    });
    container.append(div);
}

let path = {
    getAll: "https://sb-cats.herokuapp.com/api/2/Emelya77/show",
    getOne: "https://sb-cats.herokuapp.com/api/2/Emelya77/show/",
    getId: "https://sb-cats.herokuapp.com/api/2/Emelya77/ids",
    add: "https://sb-cats.herokuapp.com/api/2/Emelya77/add",
    upd: "https://sb-cats.herokuapp.com/api/2/Emelya77/update/",
    del: "https://sb-cats.herokuapp.com/api/2/Emelya77/delete/"
}
let cats = storage.getItem("cats");
if (!cats) {
    fetch(path.getAll)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            if (result.data) {
                storage.setItem("cats", JSON.stringify(result.data));
                result.data.forEach(cat => {
                    setCard(cat);
                });
            }
        });
} else {
    JSON.parse(cats).forEach(cat => {
        setCard(cat);
    });
}


let catBlocks = document.querySelectorAll(".cat>.del");
catBlocks.forEach(name => {
    name.addEventListener("click", function(e) {
        e.stopPropagation();
        name.parentElement.remove();
        let id = +name.parentElement.id.split("_")[1];
        console.log(id);
        let obj = JSON.parse(cats);
  
        let index = obj.findIndex((el, i) => el.id === id);
        obj.splice(index, 1);
        console.log(obj);
        storage.setItem("cats", JSON.stringify(obj));
    });
});

