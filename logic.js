/**
 * Created by Ritesh on 6/29/2017.
 */

window.onload= function () {


    var total = document.getElementById('billammount')
    var persons = document.getElementById('people');
    var quality = document.getElementById('servicequaality');

    var buttn = document.getElementById('calculate');

    document.getElementById('totaltip').style.visibility ='hidden';
    buttn.onclick = function () {

        calculateTip(total.value,persons.value,quality.value);
    }

};

function  calculateTip(bill,persons,value) {

    if(bill ===''|| persons===''|| value==='')
    {
        alert('Enter Some values to get this baby running !');
        return ;
    }
    if(persons ==1)
    {
        document.getElementById('small').style.visibility='hidden';
        var mytip = (bill*value)/persons;
        Math.round(mytip);
        document.getElementById('totaltip').style.visibility ='visible';
        tip.innerHTML  = mytip;
        return

    }

    var mytip = (bill*value)/persons;
    Math.round(mytip);
    document.getElementById('totaltip').style.visibility ='visible';
    tip.innerHTML  = mytip;



}