import { token } from "../../config";
export function authHeader() {
    // return authorization header with jwt token
    return `Bearer ${token}`;
}