export interface IBlog {
    title: string;
    image: string;
    text: string;
    author: string
}
export interface IPropsBlogs {
    blogs: IBlog[],
    blog: IBlog,
    key: number
}
export type PropsBlogs = Omit<IPropsBlogs, "blog" | "key">
export type PropsBlog = Omit<IPropsBlogs, "blogs">