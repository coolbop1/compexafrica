function calcit(){
   let thesub = document.getElementById("subinput").value;
   let thetenor = document.getElementById("tenorinput").value;
   let theinterest = document.getElementById("intrestinput").value;
   fetch("/calculate",{
       method:"POST",
       body:JSON.stringify({"sub" : thesub,"tenor" : thetenor, "intr" : theinterest}),
	    headers:new Headers({"Content-Type":"application/json; charset=UTF-8"}),
   })
    .then((res)=>res.json())
    .then((data)=>{
        if(data.success == "success"){
            document.getElementById("tsub").innerHTML = data.totalsubscription;
            document.getElementById("tint").innerHTML = data.intrest;
            document.getElementById("tinv").innerHTML = data.totalinvestment;
        }
        
    })
    .catch(()=>{
        console.log("error")
    });
   
return false;
}