function calculate()
{
    let carEconomy = document.getElementById("carEconomy").value;
    let distance = document.getElementById("distance").value;
    let fuelCost = document.getElementById("fuelCost").value;

    //Litre cost per km
    let litreCost = (carEconomy * fuelCost) / 100;

    document.getElementById("display").innerHTML = "This trip costs you $" + Math.round(litreCost * distance);
}