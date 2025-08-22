const tasks = [];
const recipes = [];
const showbtn = document.querySelector('.show');
const addbtn = document.querySelector('.add');
const removebtn = document.querySelector('.remove');
const completebtn = document.querySelector('.complete');
const detailsbtn = document.querySelector('.details');
const showrecipesbtn = document.querySelector('.show-recipes');
const addrecipesbtn = document.querySelector('.add-recipe');
const removerecipesbtn = document.querySelector('.remove-recipe');
const searchbtn = document.querySelector('.search-recipe');

let finshed = 0;

function showtasks(){
    if (! tasks.length){
        alert("NO Tasks to show");
        return;
    }
    msg= ''
    tasks.forEach(task => {
        msg += '================='
        msg +=
        `
        ID : ${task.id} 
        Title : ${task.title}
        Prioirty : ${task.priority}
        Status : ${task.status}
        ` 
    });
    alert(msg)
}
function add(){
    let task = {}
    task.id = tasks.length + 1
    task.title = prompt("Enter task title")
    if (! task.title)
        return
    task.priority = prompt("Enter task priority").toUpperCase();
    if (! task.priority)
        return
    task.status = 'Pending';
    tasks.push(task)    
}
function removetask(){
    if (! tasks.length){
        alert("NO Tasks to show");
        return;
    }
    index = Number(prompt("Enter task ID")) - 1;
    if  (tasks.length >= index < 0){
        alert('invalid ID')
        return
    }
    tasks.splice(index , 1);   
    alert(`You have removed task ${index+1}`)

}
function completetask(){
    if (! tasks.length){
        alert("NO Tasks to show");
        return;
    }
    index = Number(prompt("Enter task ID")) - 1;
    if  (tasks.length >= index < 0){
        alert('invalid ID')
        return
    }
    tasks[index].status = 'Completed';
    finshed += 1
    console.log(finshed , tasks[index])
    alert(`You have completed task ${index+1}`)
}
function showdetails(){
    if (! tasks.length){
        alert("NO Tasks to show");
        return;
    }
    alert(`
            You have total of ${tasks.length} tasks
            with ${(finshed/tasks.length) * 100}% completion 
        `)
}



function showrecipes(){
    if (! recipes.length){
        alert("NO Recipes to show");
        return;
    }
    msg= ''
    recipes.forEach(recipe => {
        msg += '================='
        msg +=
        `
        name : ${recipe.name} 
        type : ${recipe.type}
        ingredinets : ${recipe.ingredient}
        time-taken : ${recipe.time}
        ` 
    });
    alert(msg)
}
function addrecipe(){
    let recipe = {}
    recipe.name = prompt("Enter recipe name")
    if (! recipe.name)
        return
    recipe.type = prompt("Enter recipe type")
    if (! recipe.type)
        return
    recipe.ingredient = prompt("Enter recipe ingrdeints").toUpperCase();
    if (! recipe.ingredient)
        return
    recipe.time = prompt("Enter recipe time");
    if (! recipe.time)
        return
    recipes.push(recipe)  
    alert(`${recipe.name} has been added`)  
}

function removerecipe(){
    if (! recipes.length){
        alert("NO Tasks to remove");
        return;
    }
    rmname = prompt("Enter task name")
    if (! rmname)
        return
    index = find(rmname)

    if  (index === -1){
        alert('no such recipe')
        return
    }
    recipes.splice(index , 1);   
    alert(`You have removed task ${recipes[index].name}`)

}
function search(){
    if(! recipes.length){
        alert("no recipes to search for")
        return
    }
    rmname = prompt("Enter task name")
    if (! rmname)
        return
    index = find(rmname)
    console.log(index)
    if (index == -1){
        alert("no such recipe")
        return
    }
    alert(        `
        name : ${recipes[index].name} 
        type : ${recipes[index].type}
        ingredinets : ${recipes[index].ingredient}
        time-taken : ${recipes[index].time}
        ` )

}

showbtn.addEventListener('click' , showtasks);
addbtn.addEventListener('click' , add);
removebtn.addEventListener('click' , removetask);
completebtn.addEventListener('click' , completetask);
detailsbtn.addEventListener('click' , showdetails);
showrecipesbtn.addEventListener('click' , showrecipes);
addrecipesbtn.addEventListener('click' , addrecipe);
removerecipesbtn.addEventListener('click' , removerecipe);
searchbtn.addEventListener('click' , search);

// helper 
function find(rmname) {
    console.log(rmname)
    index = -1
    i = 0
    recipes.forEach(rec => {
        if (rec.name === rmname)
           index = i   
            
        i += 1
    })
    return index
}
