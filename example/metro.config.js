const path = require("path")
const package = require("../package.json");
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const root = path.resolve(__dirname, "..");
const modules = Object.keys({ ...package.peerDependencies });

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  projectRoot: path.resolve(__dirname),
  watchFolders: [root],
  resolver: {
    extraNodeModules: modules.reduce((accumulator, name) => {
      accumulator[name] = path.resolve(__dirname, "node_modules", name);
      return accumulator
    }, {})
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
