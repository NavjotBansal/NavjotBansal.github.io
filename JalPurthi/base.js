var body = document.body;
	var html = document.documentElement;
	var nav = document.querySelector(".navbar");

	/* populating navbar & footer navigation*/
	var navItems = document.querySelector("#navitems");
	var footerItems = document.querySelector("ul#footeritems.footernavigation");
	var unorderedList = document.createElement("ul");
	var navItemsList = [{text:"HOME",url:"index.html"},{text:"ABOUT US",url:"about.html"},{text:"PRODUCTS",url:"index.html#producthead"},{text:"CONTACT US",url:"contact.html"}];
	for(var i=0;i<navItemsList.length;i++)
	{
		unorderedList.innerHTML+= '<li> <a href="'+navItemsList[i].url+'">'+navItemsList[i].text+'</a></li>';
		footerItems.innerHTML+= '<li> <a href="'+navItemsList[i].url+'">'+navItemsList[i].text+'</a></li>';
	}
	console.log(footeritems.innerHTML);
	navitems.appendChild(unorderedList);
	/* populating navbar & footer navigation ends */


	/* readmore onclick */
	var readMore = document.querySelector("#readmore");
	if(readMore!=null)
	{
		readmore.addEventListener("click",function()
		{
			window.location.replace("about.html");
		})	
	}
	/* readmore onclick ends*/
	var navoffset = 0;
	var aboutcontainer = document.querySelector(".about");
	if(aboutcontainer!=null)
	{
		aboutcontainer.style.marginTop = nav.offsetHeight+"px";
		navoffset = nav.offsetHeight;
	}
	var bodycontainer = document.querySelector(".bodycontainer");
	if(bodycontainer!=null)
	{
		bodycontainer.style.marginTop = nav.offsetHeight+"px";
		navoffset = nav.offsetHeight;
	}
	var productcontainer = document.querySelector(".productcontainer");
	if(productcontainer!=null)
	{
		productcontainer.style.marginTop = nav.offsetHeight+"px";
		navoffset = nav.offsetHeight;
	}
	window.onscroll = function()
		{
			if(html.scrollTop>0 || body.scrollTop>0)
			{
				nav.style.boxShadow="0px 1px 5px #999";
			}
			else
			{
					nav.style.boxShadow="none";
			}
		}
	var navbutton = document.querySelector("#navbutton")
	var navigation = document.querySelector(".navigation");
	var background = document.querySelector(".bg");
	isclosed = true;
	navbutton.addEventListener("click",function(){
		if(isclosed)
		{
			if(navoffset==0)
				navigation.style.marginTop="0%"
			else
				navigation.style.marginTop=-1*navoffset+"px";
		}
		else
			navigation.style.marginTop="-100%";
		isclosed=!isclosed;
	});
	background.addEventListener("click",function(){
		if(isclosed)
		{
			if(navoffset==0)
				navigation.style.marginTop="0%"
			else
				navigation.style.marginTop=-1*navoffset+"px";
		}
		else
			navigation.style.marginTop="-100%";
		isclosed=!isclosed;
	});