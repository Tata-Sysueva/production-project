declare module '*.scss' {
    interface ScssClass {
        [ScssClass: string]: string;
    }
    const scssClass: ScssClass;
    export = scssClass;
}