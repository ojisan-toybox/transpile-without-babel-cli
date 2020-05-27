const babel = require("@babel/core");

babel.transform(
  `
const a = () => {}
`,
  {},
  function (err, result) {
    console.log("generated code:", result.code);
  }
);
