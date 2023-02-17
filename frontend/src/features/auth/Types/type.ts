export type User = {
    id?:number;
    userName:string;
    email:string;
    password:string;
    password2?:string;
    isAdmin:boolean
  };
   export type State = {
    user:{} | User;
    error:undefined | string;
   };
   export type PayloadAuth = {
    user?:User;
    error?:string;
   };
