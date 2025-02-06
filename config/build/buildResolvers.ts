import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";
import path from "path";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.jsx', '.ts', '.js'], // указываем, какие файлы мы импортируем без описания расширения. напр. './component'
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@app': path.resolve(__dirname, '../../src/app/'),
            '@pages': path.resolve(__dirname, '../../src/pages/'),
            '@widgets': path.resolve(__dirname, '../../src/widgets/'),
            '@features': path.resolve(__dirname, '../../src/features/'),
            '@entities': path.resolve(__dirname, '../../src/entities/'),
            '@shared': path.resolve(__dirname, '../../src/shared/'),
        },
    };
};
