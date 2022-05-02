// write js code here corresponding to favourites.html
// write js code here corresponding to matches.html

var favourites=JSON.parse(localStorage.getItem("favourites"))||[]
display(favourites)
function display(data){
    data.forEach(function(element,index){
        var tr =document.createElement("tr")
        var td1=document.createElement("td")
        td1.innerHTML=element.macthNo;
        var td2=document.createElement("td")
        td2.innerHTML=element.teamA;
        var td3=document.createElement("td")
        td3.innerHTML=element.teamB;
        var td4=document.createElement("td")
        td4.innerHTML=element.Date;
        var td5=document.createElement("td")
        td5.innerHTML=element.Venue;
        var td6=document.createElement("td")
        td6.innerText="DELETE"
        td6.style.color="red"
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            deleteFun(element,index)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
        

        

    })
    function deleteFun(element,index){
       console.log(element)
       favourites.splice(index,1)
       localStorage.setItem("favourites",JSON.stringify(favourites))
       window.location.reload();
       
    }
}