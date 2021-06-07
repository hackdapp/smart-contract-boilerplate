// test/TodoList.test.js
const { expect } = require('chai');

const TodoList = artifacts.require('TodoList');

contract('TodoList', function () {
  beforeEach(async function () {
    this.todoList = await TodoList.new();
  });

  it('get todolist size previously stored', async function () {
    await this.todoList.addItem('add todo item.');

    expect((await this.todoList.getListSize()).toString()).to.equal('1');
  });
});
