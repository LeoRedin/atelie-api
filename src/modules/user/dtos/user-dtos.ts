export interface CreateUserDTO {
  email: string;
  password: string;
}

export interface UpdateUserDTO {
  id: number;
  email: string;
  password: string;
}
