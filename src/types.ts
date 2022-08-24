import {PermissionKeys} from './authorization/permission-key';


export interface RequirdPermissions{
  voters: PermissionKeys[];
}
export interface MyUserProfile{
  id: string;
  email?:string;
  name: string;
  permissions: PermissionKeys[]

}
