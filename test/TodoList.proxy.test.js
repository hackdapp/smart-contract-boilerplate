// test/TodoList.proxy.test.js
const { expect } = require('chai');
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const TodoList = artifacts.require('TodoList');

contract('TodoList (proxy)', function () {
  beforeEach(async function () {
    this.todoList = await deployProxy(TodoList);
  });

  it('get todolist size previously stored', async function () {
    await this.todoList.addItem('add todo item.');

    expect((await this.todoList.getListSize()).toString()).to.equal('1');
  });
});
