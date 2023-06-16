import { type } from "os";

export type User = {
    email: string,
    token: string,
    isAuthenticated: boolean
};


export type RouteType = "PRIVATE" | "PUBLIC" | "GUEST"