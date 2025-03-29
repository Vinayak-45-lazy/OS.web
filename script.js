// var elem = document.getElementById('Home')

// for(var i=0; i<elem; i++)
// {
//     elem[i].addeventListener('click', function(){
//         alert('Login');

//     },false);
// }

document.getElementById('img1').onmouseover = abc;
function abc() {
    document.getElementById('img1').style.filter = 'grayscale(100%)';
}
document.getElementById('img1').onmouseout = xyz;
function xyz() {
    document.getElementById('img1').style.filter = 'grayscale(0%)';
}

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}
