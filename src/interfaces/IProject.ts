export default interface IProject {
    id: number;
    name: string;
    description: string;
    tools: string[];
    image: string;
    site: string;
    code: string;
    group?: string;
}