var darkTheme = 0;
function removeDescription()
{
    var description = document.querySelector(".description");
    var descriptionp = document.querySelectorAll(".description p");
    setTimeout(function(){
        descriptionp[1].innerHTML = '';
    },500);
    description.style.height="0px";
    descriptionp[1].style.backgroundColor = "transparent";
    
    setTimeout(function(){
        descriptionp[0].innerHTML = '';
    },300);
}
function changeTheme()
{
    var body = document.querySelector("body");
    var quote = document.querySelector("#Quote");
    var inspiration = document.querySelector("#inspiration");
    var info = document.querySelectorAll("#info p");
    if(darkTheme)
    {   darkTheme=0;
        for(let i=0;i<info.length;i++)
        {
            info[i].style.color="black";
            setTimeout(500);
        }
        quote.style.color = "black";
        inspiration.style.color = "black";
        body.style.backgroundColor="white";
    }
    else
    {   darkTheme=1;
        quote.style.color = "white";
        inspiration.style.color = "white";
        for(let i=0;i<info.length;i++)
        {
            info[i].style.color="white";
            setTimeout(50);
        }
        body.style.backgroundColor="black";
    }
}