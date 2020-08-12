if(localStorage.getItem("key")==null){
    localStorage.setItem("key", "");
}
var inputText = document.getElementById("text_item");
var addButton = document.getElementById("add");
var entriesDiv = document.getElementById("entries");
var divideSymbol = "&#";
function getLocalData(){
    return localStorage.getItem("key");
}
function setLocalData(value){
    localStorage.setItem("key", value);
}



renderEntries();

function renderEntries(){
    let data = getLocalData();
    let dataArray = data.split(divideSymbol);
    console.log(dataArray);
    entriesDiv.innerHTML="";
    for(let i=0 ; i<dataArray.length-1 ; i++){
        entriesDiv.innerHTML+=entryFormate(dataArray[i]);
    }
}

function entryFormate(text){
        let newEntry = "<div class=\"entry\">"+
            "<button onclick=\"editItem(this.parentElement)\">&#9998</button>"+
            "<button onclick=\"deleteItem(this.parentElement)\">&#10006</button>"+
            "<span>"+text+"</span><hr></div>";
    return newEntry;
}

function addEntry(){
    let data = getLocalData();
    let text = inputText.value;
    console.log(text);
    setLocalData(data+text+divideSymbol);
    renderEntries();
    inputText.value="";
}
function pressEnter(e){
    if(e.keyCode == 13){
        document.getElementById("add").click(); //dom
    }
}

function deleteItem(element){
    let text = element.children[2].innerText;
    console.log(text);
    let data = getLocalData();
    let dataArray = data.split(divideSymbol);
    data="";
    let flag = true;
    for( let i = 0; i < dataArray.length-1; i++){ 
        let x = dataArray[i];
        console.log(x+typeof(x));
        console.log(text+typeof(text));
        console.log(x==text);
        if (x==text && flag) { 
            console.log("----------------");
            dataArray.splice(i,0);
            flag=false;
        }else{
            data+=(x+divideSymbol);
        }
    }
    setLocalData(data);
    renderEntries();
}

function editItem(element){
    let text = element.children[2].innerText;
    deleteItem(element);
    inputText.value = text;
}



