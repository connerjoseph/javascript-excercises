const fs = require("fs");

fs.writeFile("message.txt", "Hello from Conner! Node", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 