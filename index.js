const todoList = () => {
  let all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  // const overdue = () => {
  //   const d = new Date();
  //   return all.filter((task) => task.dueDate < formattedDate(d));
  // };

  // const dueToday = () => {
  //   const d = new Date();
  //   return all.filter((task) => task.dueDate == formattedDate(d));
  // };

  // const dueLater = () => {
  //   const d = new Date();
  //   return all.filter((task) => task.dueDate > formattedDate(d));
  // };

  // const toDisplayableList = (list) => {
  //   let output = "";
  //   list.forEach((task) => {
  //     output += `[${task.completed ? "x" : " "}] ${task.title} ${
  //       task.dueDate == formattedDate(new Date()) ? "" : task.dueDate
  //     }\n`;
  //   });
  //   output = output.trim();
  //   return output;
  // };

  return {
    all,
    add,
    markAsComplete,
  };
};

module.exports = todoList;
