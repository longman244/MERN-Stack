const path = require('path');
const webpack = require('webpack');

const environment = process.env.ENVIRONMENT;

console.log('environment:::::', environment);

let ENVIRONMENT_VARIABLES = {
  'process.env.ENVIRONMENT': JSON.stringify('development'),
  'process.env.PORT': JSON.stringify('3080'),
  'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb+srv://admin:admin123@todo-cluster.fcux5s4.mongodb.net/')
};

if (environment === 'test') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('test'),
    'process.env.PORT': JSON.stringify('3080'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb+srv://admin:admin123@todo-cluster.fcux5s4.mongodb.net/')
  };
} else if (environment === 'production') {
  ENVIRONMENT_VARIABLES = {
    'process.env.ENVIRONMENT': JSON.stringify('production'),
    'process.env.PORT': JSON.stringify('80'),
    'process.env.MONGO_CONNECTION_STRING': JSON.stringify('mongodb+srv://admin:admin123@todo-cluster.fcux5s4.mongodb.net/')
  };
}

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js',
  },
  target: 'node',
  plugins: [
    new webpack.DefinePlugin(ENVIRONMENT_VARIABLES),
  ],
};