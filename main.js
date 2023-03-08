const todoList = [
    {
        id:1,
      title: "Groceries",
      description: "Milk, bread, eggs"
    },
    {
        id:2,
        title: "Homework",
        description: "Complete assigned homework for JavaScript"
      },
      {
        id:3,
        title: "Trash",
        description: "Take out the trash."
      },
    {
        id:4,
      title: "Do laundry",
      description: "Wash clothes and towels"
    },
    {
        id:5,
      title: "Study",
      description: "Watch class recordings again."
    }
  ]

  const todoContainer = document.getElementById("list")
  for (const task of todoList ){
    todoContainer.innerHTML += `
    <div class="card" id=${task.id}>
    <h3>${task.title}</h3>
    <p>${task.description}</p>   
    <button class="btn btn-primary done-button">&#10004;</button>
</div>

    `
  }
  for (const task of todoList ){
    const taskid = document.getElementById(task.id)
    taskid.addEventListener('click', (event) =>{
        if(event.target.classList.contains('done-button')){
        taskid.remove()
        }
    })
  }