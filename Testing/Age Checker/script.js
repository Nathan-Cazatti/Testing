function checkmajority(){
    document.getElementById 
    var WasBorn = document.getElementById("clientBirth").valueAsNumber
    var res = document.getElementById('result')

    if(isNaN(WasBorn)){
        res.textContent = "Type only numbers"
        res.style.color = "red"
        return;
    }

    const thisYear = new Date().getFullYear();
    const age = thisYear - WasBorn;

    if(age >= 18){
        res.textContent = "Over 18, Entry"
        res.style.color = "green"
        document.getElementById("ClientAge").textContent = age + " - " + " years old"
    }else{
        res.textContent = "Under 18, Not Allowed"
        res.style.color = "orange"
        document.getElementById("ClientAge").textContent = age + " - " + " years old"
    }
}