*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, Helvetica, sans-serif;
    background:#f4f4f4;
    color:#333;
    line-height:1.6;
}

header{
    background:#0b5ed7;
    color:white;
    text-align:center;
    padding:40px 20px;
}

header h1{
    font-size:40px;
}

header p{
    font-size:20px;
    margin-top:10px;
}

nav{
    background:#003566;
}

nav ul{
    display:flex;
    justify-content:center;
    list-style:none;
}

nav ul li{
    margin:15px;
}

nav ul li a{
    color:white;
    text-decoration:none;
    font-weight:bold;
    transition:0.3s;
}

nav ul li a:hover{
    color:#ffd60a;
}

section{
    width:80%;
    margin:30px auto;
    background:white;
    padding:25px;
    border-radius:10px;
    box-shadow:0 4px 8px rgba(0,0,0,0.1);
}

section h2{
    color:#0b5ed7;
    margin-bottom:15px;
}

section h3{
    margin-bottom:10px;
}

ul{
    margin-left:20px;
}

li{
    margin-bottom:10px;
}

a{
    color:#0b5ed7;
}

footer{
    background:#003566;
    color:white;
    text-align:center;
    padding:15px;
    margin-top:30px;
}

html{
    scroll-behavior:smooth;
}

/* Responsive Design */

@media(max-width:768px){

nav ul{
    flex-direction:column;
    text-align:center;
}

section{
    width:95%;
}

header h1{
    font-size:30px;
}

}
