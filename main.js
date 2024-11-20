var quotes = [" “Be yourself; everyone else is already taken.”<br> Oscar Wilde",
     "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” <br> --Albert Einstein",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” <br>--Bernard M. Baruch",
"“You ve gotta dance like there's nobody watchingLove like you'll never be hurtSing like there's nobody listening And live like it's heaven on earth.”<br>--William W. Purkey",
"“You only live once, but if you do it right, once is enough.”<br>--Mae West"

];
var quote=""
var counter=-1;
function getrandom(){
    var random=Math.floor(Math.random()*quotes.length )
    if(random===counter){
        random=(random+1)%quotes.length;
    }
    counter=random
    return quotes[random];
    
    

}
function display(){
    quote=document.getElementById("quote").innerHTML=getrandom()
}

var newQuoteBtn = document.getElementById('change-quote');
newQuoteBtn.addEventListener('click', display);
