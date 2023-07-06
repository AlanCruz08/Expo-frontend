export interface Login {
    email: string;
    password: string;
}
export interface Token {
    access_token: string;
    token_type: string;
}
export interface Register {
    name: string;
    email: string;
    password: string;
}