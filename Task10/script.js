const btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    btn.addEventListener("click" , greet)
});

function greet(){
    const name = prompt("Enter your name");
    if (! name)
        return
    const age = prompt("Enter your age");
    if (! age)
        return
    const conf = confirm("Are you active");
    if (conf)
        alert(`hey ${name} your age is ${age} and you are active`);

}