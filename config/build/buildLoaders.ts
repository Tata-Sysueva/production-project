import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from js strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // Использование style-loader в разработке ускоряет процесс разработки, а MiniCssExtractPlugin.loader в продакшн-сборке улучшает производительность
            // Translates CSS into CommonJS
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
            // Compiles Sass to CSS
            'sass-loader',
        ]
    };
    
    const typescriptLoader = {
        test: /\.tsx?$/, // указываем, какие файлы будут обрабатываться данным правилом
        use: 'ts-loader', // указываем, какой загрузчик (loader) будет использоваться для обработки файлов (обработает и ts и tsx)
        exclude: /node_modules/, //  указываем, какие файлы или директории следует исключить из обработки
    };

    return [
        typescriptLoader,
        cssLoader,
    ] // набор правил для обработки файлов
};
