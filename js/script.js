headingg = document.querySelector("h1")
btn = document.querySelector("button")
data = document.querySelector("input")

headingg.style.color = 'red'
headingg.style.margin = '50px'




btn.addEventListener("click", function () {
    let marks = data.value
    if (marks<60 && marks>=0) {
        document.querySelector("h2").innerHTML = "Fail"
    }
    else if (marks<=100 && marks>=90){
        document.querySelector("h2").innerHTML = "Grade A"
    }
    else if (marks<90 && marks>=80){
        document.querySelector("h2").innerHTML = "Grade B"
    }
    else if (marks<80 && marks>=70){
        document.querySelector("h2").innerHTML = "Grade C"
    }
    else if (marks<70 && marks>=60){
        document.querySelector("h2").innerHTML = "Grade D"
    }
    else {
        document.querySelector("h2").innerHTML = "Beta paknami koros"
    }
})
