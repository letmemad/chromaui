const path = require("path");
const package = require("../package.json");

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module-resolver", {
      alias: {
        [package.name]: path.join(__dirname, "..", package.source)
      }      
    }]
  ]
};
