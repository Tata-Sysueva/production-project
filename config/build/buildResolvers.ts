import { ResolveOptions } from "webpack";

export const buildResolvers = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'], // указываем, какие файлы мы импортируем без описания расширения. напр. './component'
    };
};
