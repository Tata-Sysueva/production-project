import HtmlWebpackPlugin from "html-webpack-plugin"; //  этот плагин автоматически создает HTML-файл на основе указанного шаблона и подключает к нему скомпилированный JavaScript-файл
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; // позволяет извлекать CSS из JavaScript-файлов в отдельные файлы, полезно для оптимизации загрузки стилей (параллельно с др ресурсами и минимизировано в продакшн))

export const buildPlugins = ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] => {
    return [
        new webpack.ProgressPlugin(), // отслеживает степень «готовности» сборки
        new HtmlWebpackPlugin({
            template: paths.html, // Шаблон HTML
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css', // понадобится. когда будем разбивать файлы на асинхронные и у нас появятся отдельные чанки, к-е будут асинхронно подгружаться
        }),
        new webpack.DefinePlugin({
            IS_DEV: JSON.stringify(isDev),
        })
    ];
}