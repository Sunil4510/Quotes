const text1 = document.getElementById("text");
const author1 = document.getElementById("author");
const prev1 = document.getElementById("prev");
const next1 = document.getElementById("next");
let num = 0;
let rdata="";

const getNext = ()=>{
    num = num + 1;
    text1.innerHTML = rdata[num].text;
    rdata[num].author == null ?  author1.innerHTML ="unknown":
    author1.innerHTML = `${rdata[num].author}`; 
}

const getPrev = ()=>{
    if(num>1)
    num = num - 1;
    text1.innerHTML = rdata[num].text;
    rdata[num].author == null ?  author1.innerHTML ="unknown":
    author1.innerHTML = `${rdata[num].author}`;
    //author1.innerHTML = rdata[num].author; 
}

const getQuotes = async ()=>{
    const api="https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        rdata = await data.json();
        text1.innerHTML = rdata[num].text;
        rdata[num].author == null ?  author1.innerHTML ="unknown":
        author1.innerHTML = `${rdata[num].author}`;
       // author1.innerHTML = rdata[num].author; 
        getNext();
        getPrev();
            
    } catch (error) {
        
    }
    
}
next1.addEventListener("click",getNext);
prev1.addEventListener("click",getPrev);
getQuotes();

