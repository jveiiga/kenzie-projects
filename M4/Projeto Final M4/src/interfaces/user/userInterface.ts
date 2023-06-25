export interface IUser {
    id: string;
    image: string;
    name: string;
    email: string;
    contact: string;
    register: string;
    isStore: boolean;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserRequest {
    image: string;
    name: string;
    email: string;
    password: string;
    contact: string;
    register: string;
    isStore: boolean;
}

export interface IUserResponse {
    id?: string;
    image?: string;
    name?: string;
    email?: string;
    contact?: string;
    register?: string;
    isStore?: boolean;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserUpdate {
    image?: string;
    name?: string;
    email?: string;
    password?: string;
    contact?: string;
    register?: string;
    isStore?: boolean;
}
