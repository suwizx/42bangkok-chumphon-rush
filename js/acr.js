let vacri = document.getElementById('acri')
let vacrii = document.getElementById('acrii')
let vacriii = document.getElementById('acriii')
let vaiii = document.getElementById('aiii')

function conCheck(){
    if (vacriii.style.display == "none"){
        vaiii.style.borderBottomLeftRadius = '0.5rem';
        vaiii.style.borderBottomRightRadius = '0.5rem';
    }
    else
    {
        vaiii.style.borderBottomLeftRadius = '0';
        vaiii.style.borderBottomRightRadius = '0';
    }
}

function acri(){
    console.log(vacri.style.display)
    if (vacri.style.display == "block"){
        vacri.style.display = "none"
    }
    else
    {
        vacri.style.display = "block"
    }
}
function acrii(){
    if (vacrii.style.display == "block"){
        vacrii.style.display = "none"
    }
    else
    {
        vacrii.style.display = "block"
    }
}
function acriii(){
    if (vacriii.style.display == "block"){
        vacriii.style.display = "none"
        conCheck()
    }
    else
    {
        vacriii.style.display = "block"
        conCheck()
    }
}