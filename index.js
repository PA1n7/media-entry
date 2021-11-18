window.onload = ()=>{
    document.getElementById("magic").style.height = window.innerHeight.toString() + "px";
    let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus eleifend, finibus ligula ut, dignissim nunc. Etiam ut tincidunt diam, sit amet elementum nulla. Etiam et enim velit. Donec varius vestibulum sapien nec consequat. Nam leo mauris, egestas vel risus vitae, tempor placerat leo. Pellentesque luctus ligula nibh, gravida tincidunt erat convallis sed. Curabitur volutpat, lorem quis imperdiet suscipit, mi elit vehicula magna, vel sollicitudin libero purus quis lorem. Duis vel hendrerit ipsum. Etiam vel metus magna. Morbi vel ornare lectus. Nullam rutrum tincidunt tellus ut faucibus. Curabitur bibendum egestas volutpat. Nam maximus mi eget sem ultrices imperdiet. Suspendisse dignissim pharetra volutpat.";
    let testText = document.getElementsByClassName("lorem");
    for(let i=0; i<testText.length; i++){
        testText[i].innerHTML = lorem;
    }
    let showmorebutton = document.getElementsByClassName("showmore");
    let currState = {}
    for(let i=0; i<showmorebutton.length; i++){
        showmorebutton[i].getElementsByClassName("more")[0].style.visibility = "hidden";
        showmorebutton[i].getElementsByClassName("more")[0].style.position = "absolute";
        currState[i] = false;
        showmorebutton[i].onclick = ()=>{
            if (currState[i]){
                showmorebutton[i].getElementsByClassName("more")[0].style.visibility = "hidden";
                showmorebutton[i].getElementsByClassName("more")[0].style.position = "absolute";
                showmorebutton[i].getElementsByClassName("normal")[0].innerText = "Show more...";
            }else{
                showmorebutton[i].getElementsByClassName("more")[0].style.visibility = "visible";
                showmorebutton[i].getElementsByClassName("more")[0].style.position = "relative";
                showmorebutton[i].getElementsByClassName("normal")[0].innerText = "Show less...";
            }
            currState[i] = !currState[i]
        }
    }
}