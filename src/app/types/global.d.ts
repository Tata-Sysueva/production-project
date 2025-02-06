declare module '*.scss' {
    interface ScssClass {
        [ScssClass: string]: string;
    }
    const scssClass: ScssClass;
    export = scssClass;
}

declare module '*.svg' {
    import React from 'react';
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

