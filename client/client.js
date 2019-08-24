function calcit(){
	let thesubbut = document.getElementById("subbut");
   let thesub = document.getElementById("subinput").value;
   let thetenor = document.getElementById("tenorinput").value;
   let theinterest = document.getElementById("intrestinput").value;
   subbut.innerHTML = "Loading.....";
   fetch("/calculate",{
       method:"POST",
       body:JSON.stringify({"sub" : thesub,"tenor" : thetenor, "intr" : theinterest}),
	    headers:new Headers({"Content-Type":"application/json; charset=UTF-8"}),
   })
    .then((res)=>res.json())
    .then((data)=>{
    	
        if(data.success == "success"){
        	let showresult = document.getElementById("result");
        	const stylez = getComputedStyle(showresult)
        	if(stylez.display != "none" ){
            document.getElementById("tsub").innerHTML = data.totalsubscription;
            document.getElementById("tint").innerHTML = data.intrest;
            document.getElementById("tinv").innerHTML = data.totalinvestment;
            subbut.innerHTML = "calculate";
            }else{
            	
            	document.getElementById("lay").classList.replace("hide","show")
            	document.getElementById("ttsub").innerHTML = data.totalsubscription;
            document.getElementById("ttint").innerHTML = data.intrest;
            document.getElementById("ttinv").innerHTML = data.totalinvestment;
            subbut.innerHTML = "calculate";
            }
        }
        
    })
    .catch(()=>{
        console.log("error")
    });
   
return false;
}
function closed(){
	document.getElementById("lay").classList.replace("show","hide");
	
}