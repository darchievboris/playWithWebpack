export type BuildMode = "production" | "development"
export type BuildPlatform = "mobile" | "desktop"
export interface BuildPath{
    entry:string;
    output:string;
    public:string;
    html:string;
    src:string
}
export interface BuildOptions{
    port:number;
    paths:BuildPath;
    mode:BuildMode;
    platform:BuildPlatform;
    analyzer?:boolean;
}