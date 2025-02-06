import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const assertsLoader = [
        {
            test: /\.(png|jpe?g|gif)$/i,
            type: 'asset',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset',
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
            type: 'asset/resource',
        },
    ];

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
    };
    
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    esModule: false,
                    modules: {
                        namedExport: false,
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    },
                }
            },
            'sass-loader',
        ]
    };
    
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
        cssLoader,
        svgLoader,
        ...assertsLoader,
    ];
};

