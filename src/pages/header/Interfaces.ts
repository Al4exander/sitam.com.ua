export interface HeaderLinks {
    Type: string;
    Col: number;
    children: Children[];
}

export interface Children {
    link: string;
    title: string;
}