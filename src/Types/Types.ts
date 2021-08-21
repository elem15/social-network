export type PostsType = {
    id: number, message: string, likeCount: number
}

export type DialogsType = {
    id: number, name: string, src: string | undefined
}
export type MessagesType = {
    id: number, message: string, name: string, st: string
}

export type FriendsType = {
    id: number, name: string, src: string | undefined
}
export type ComposersType = {
    id: number, name: string, isLike: boolean
}

export type ProfileType = {
    aboutMe: string,
    contacts: ContactsType,
    fullName: string,
    lookingForAJob: true,
    lookingForAJobDescription: string,
    photos: PhotosType,
    userId: number
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
