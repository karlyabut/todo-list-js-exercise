// // // // // // Arrays to keep track of each task's state
// // // // // const taskTitles = [];
// // // // // const taskComplete = [];
// // // // // const taskDescription = [];
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescription.push(description);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
function completeTask(task) {
  task.complete = true;
}

// // Print the state of a task to the console in a nice readable way
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
}

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", "Take all the poo out");
const task2 = newTask("new task", "the task is new");
const tasks = [ task1, task2 ];


// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logTaskState(); // Clean Cat Litter has been completed

// console.log(task1);
console.log(task1.title);
