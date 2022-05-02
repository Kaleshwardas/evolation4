// write js code here corresponding to index.html
// You should add submit event on the forms
var form=document.querySelector("#masaiForm")
form.addEventListener("submit",myFunction)
var schedule=JSON.parse(localStorage.getItem("schedule"))||[]
function myFunction(){
    event.preventDefault();
    MacthData={
        macthNo:form.matchNum.value,
        teamA:form.teamA.value,
        teamB:form.teamB.value,
        Date:form.date.value,
        venue:form.venue.value,

    }
    console.log(MacthData)
    schedule.push(MacthData)
    localStorage.setItem("schedule",JSON.stringify(schedule))
}