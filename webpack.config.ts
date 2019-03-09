import * as webpack from "webpack";
import * as path from 'path';
import * as globule from 'globule';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const opts = {
  srcDir: path.join(__dirname, 'src'),
  destDir: path.join(__dirname, 'dist')
}

const convertExtensions = {
  pug: 'html',
  sass: 'css',
  scss: 'css',
  ts: 'js'
}

const files = {}
Object.keys(convertExtensions).forEach(from => {
  const to = convertExtensions[from]
  globule.find([`**/*.${from}`, `!**/_*.${from}`], {cwd: opts.srcDir}).forEach(filename => {
    files[filename.replace(new RegExp(`.${from}$`, 'i'), `.${to}`)] = path.join(opts.srcDir, filename)
  })
})

const pugLoader = [
  'apply-loader',
  'pug-loader'
]

const devServer = {
    contentBase: path.resolve(__dirname, "src"),
    inline: true,
    watchContentBase: true,
    port: 3000,
};

const config = {
  context: opts.srcDir,
  entry: files,
  output: {
    filename: '[name]',
    path: opts.destDir
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ExtractTextPlugin.extract(pugLoader)
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.ts$/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        use: "ts-loader",
      }
    ]
  },
  devServer,
  plugins: [
    new ExtractTextPlugin('[name]'),
    new CopyWebpackPlugin(
      [{from: {glob: '**/*', dot: true}}],
      {ignore: Object.keys(convertExtensions).map((ext) => `*.${ext}`)}
    ),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
  },
}

if (process.env.NODE_ENV === 'production') {
  config.plugins = config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin()
  ])
}

module.exports = config;