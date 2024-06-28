export interface IUser {
    id?: number;
    email: string;
    first_name?: string;
    sur_name?: string;
    middle_name?: string;
    telephone?: string;
    password: string;
  }

  export interface IToken {
    auth_token: string;
  }
  