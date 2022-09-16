/* eslint-disable no-undef */
const todoList = require("../index");

const { all, add, markAsComplete } = todoList();

describe("Todo Manager Test Suite", () => {
  test("Add task", () => {
    expect(all.length).toBe(0);
    add({ title: "Learn node.js", dueDate: "30-09-22", completed: false });
    expect(all.length).toBe(1);
  });
  test("Mark task as complete", () => {
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
