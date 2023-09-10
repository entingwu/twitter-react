# Twitter React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`
http://localhost:3000

## send interface
request: get post put patch delete
service: const getUser = (params) => get('/user', params).then(res) => {
  return res;
};

promise

## backend web service
use json-server

## React 5 steps
1. Break the UI into a component hierarchy 
2. Build a static version in React
3. Figure out the minimum representation of the UI state
4. Figure out the position of state
5. Add reverse data flow

## style technique choices
- css 无法编写嵌套
- scss 写简单的嵌套 -> 编译成css
- cs module 不用关系命名空间，不会出现被覆盖的样式

## Project Configuration
- craco.config.js: short cut to config webpack file
- jsconfig.json: js config file for vscode to use
