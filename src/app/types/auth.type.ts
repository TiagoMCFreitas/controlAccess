import { IUser } from "./user.type"

export type AuthResponse = {
    token: string
    usuario: IUser
  }