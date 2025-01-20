import path from 'path'; // настройка путей с помощью стандартного модуля вебпак, это лучше, чем указывать пути «в лоб», потому что на разных ОС пути могут работать по разному
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => { // функция сборки конфига, которая принимает определенные опции
    const { paths, mode, isDev } = options;
    
    return {
        mode: mode, // указываем, в каком режиме проходит сборка. Режим сборки влияет на оптимизацию кода, скорость сборки, видимость кода в девтулзах, подробные или не очень выводы в консоль и пр
        entry: paths.entry, // точка входа для сборки приложения, где __dirname — абсолютный путь к директории, т.е. мы указываем вебпак использовать текущую директорию (где находится файл конфигурации) в качестве точки входа, а затем уточняем путь
        output: {
            filename: "[name].[contenthash].js", // шаблон, чтобы 1) имя собранного файла совпадал с названием файла в entry или вообще указывать разные имена, если в entry объект с разными точками, для эффективного кеширования браузерами, чтобы загружал новую версию файла, вместо закешированной
            path: paths.build,
            clean: true, //очищаем ненужные файлы
        }, // указываем, где будет находиться файл со сборкой проекта и как он будет называться
        plugins: buildPlugins(options), // плагины (объекты классы JS) расширяют функциональность Webpack
        module: {
            rules: buildLoaders(options),
        }, // определяем, как Webpack должен обрабатывать различные типы файлов (модулей) в вашем проекте
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}