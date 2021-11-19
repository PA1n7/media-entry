window.onload = ()=>{
    let img = window.location.search.replace("?", "").split("=")[1];
    console.log("./images/"+img);
    document.getElementById("body").querySelector("img").src = "./images/"+img;
}