import CircularDependencyPlugin from "circular-dependency-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

const svgoLoaderConfig = ({ removeDimensions }) => ({
   loader: "svgo-loader",
   options: {
      plugins: [
         { removeViewBox: false }, { removeDimensions },
      ],
   },
});
const es5 = false;

const config = {
   mode: "development",

   entry: [
      "@babel/polyfill",
      path.resolve(__dirname, "../src/index"),
   ],

   output: {
      publicPath: "/",
   },

   target: "web",

   devtool: "inline-source-map", // debugging tool

   resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
         "~": path.resolve(__dirname, "../src"),
      },
   },

   resolveLoader: {
      modules: [path.resolve(__dirname, "../node_modules")],
   },

   module: {
      rules: [
         {
            test: !es5 ? /\.tsx?$/ : /\.[jt]sx?$/,
            exclude: !es5 ? /node_modules/ : undefined,
            loaders: [
               {
                  loader: "babel-loader",
                  options: {
                     babelrc: false,
                     presets: [
                        [
                           "@babel/preset-env",
                           {
                              targets: es5
                                       ? {
                                    safari: 10,
                                    edge: 16,
                                    ie: 11,
                                    browsers: ["last 2 versions"],
                                 }
                                       : {
                                    esmodules: true,
                                 },
                           },
                        ],
                     ],
                     plugins: [
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-proposal-object-rest-spread",
                        ["babel-plugin-styled-components", {
                           ssr: true,
                           displayName: true,
                           fileName: true,
                        }],
                     ],
                  },
               },
               {
                  loader: "ts-loader",
                  options: {
                     configFile: path.resolve(__dirname, "../tsconfig.json"),
                     transpileOnly: true,
                  },
               },
            ],
         },
         {
            test: /\.svg$/,
            oneOf: [
               {
                  resourceQuery: /inline/, // foo.svg?inline
                  loaders: [
                     "svg-inline-loader?classPrefix=__prefix-[sha512:hash:hex:5]&removeSVGTagAttrs=false",
                     svgoLoaderConfig({ removeDimensions: true }),
                  ],
               },
               {
                  resourceQuery: /external/, // foo.svg?external
                  loaders: [
                     {
                        loader: "file-loader",
                        options: {
                           emitFile: true,
                           name: "[hash:16].[ext]",
                        },
                     },
                     svgoLoaderConfig({ removeDimensions: false }),
                  ],
               },
               {
                  loaders: [
                     {
                        loader: "url-loader",
                        options: {
                           limit: 1000,
                           name: "[hash:16].[ext]",
                           fallback: "file-loader",
                           emitFile: true, // config for fallback loader
                        },
                     },
                     svgoLoaderConfig({ removeDimensions: false }),
                  ],
               },
            ],
         },
         {
            test: /\.(ttf|otf)(\?.*)?$/,
            loader: "url-loader",
            query: {
               limit: 10000,
               mimetype: "application/octet-stream",
            },
         },
         {
            test: /\.png$/,
            loader: "file-loader",
         },
         {
            test: /\.jpg$/,
            loader: "file-loader",
         },
         {
            test: /\.webmanifest$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                  },
               },
               {
                  loader: 'webmanifest-loader',
               },
            ],
         },
      ],
   },

   optimization: {
      noEmitOnErrors: true, // NoEmitOnErrorsPlugin
      concatenateModules: true, // ModuleConcatenationPlugin
      namedModules: true, // NamedModulesPlugin
   },

   plugins: [
      new ForkTsCheckerWebpackPlugin({ // RUNS TYPESCRIPT CHECKER ASYNCHRONOUSLY
         tsconfig: path.resolve(__dirname, "../tsconfig.json"),
      }),
      new HtmlWebpackPlugin({ // INJECTS INDEX.HTML FILE INTO BUNDLE
         template: path.resolve(__dirname, "../src/index.html"),
         inject: true,
         favicon: path.resolve(__dirname, "../src/logo_mini.png"),
         manifest: path.resolve(__dirname, "../src/site.webmanifest"),
      }),
      new webpack.DefinePlugin({ // GLOBAL VARIABLES
         DEV: JSON.stringify(true),
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CircularDependencyPlugin({
         exclude: /a\.js|node_modules/,
      }),
   ],

   devServer: {
      contentBase: path.resolve(__dirname, "../src"),
      historyApiFallback: true,
      hot: true,
      inline: true,
      open: true,
      compress: true,
      watchOptions: {
         ignored: /node_modules/,
      },
   },
};

export default config;
