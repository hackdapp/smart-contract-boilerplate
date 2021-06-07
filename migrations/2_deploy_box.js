// migrations/2_deploy_box.js
const TodoList = artifacts.require('TodoList');

const { deployProxy } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer) {
  // await deployProxy(TodoList, [42], { deployer, initializer: 'store' });
  await deployProxy(TodoList, { deployer })
};
