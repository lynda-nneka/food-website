
var item = document.querySelector('#item')
var price = document.querySelector('#price')

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter an item")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span>
                    ${item.value}
                </span>
                <span>
                    ${price.value}
                </span>
                <span id=
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#newtask input").value = "";
    }
}