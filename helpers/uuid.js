// Generate a random UUID
// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
// .toString(16) converts the number to a hexadecimal value
// .substring(1) removes the first character of the UUID

module.exports = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);