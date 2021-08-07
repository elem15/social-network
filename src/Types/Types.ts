export type PostsType = {
    id: number, message: string, likeCount: number
}
export type ContactsType = {
    facebook: string,
    github: string,
    instagram: string,
    mainLink: string,
    twitter: string,
    vk: string,
    website: string,
    youtube: string,
}
export type PhotosType = {
    large: string,
    small: string
}

export type UserType = {
    followed: boolean,
    id: number,
    name: string,
    photos: PhotosType,
    status: string | null,
    uniqueUrlName: string | null
}
