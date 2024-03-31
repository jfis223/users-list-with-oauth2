export const TYPES = {
  UsersService: Symbol.for("UsersService"),
  AuthService: Symbol.for("AuthService"),
  IEnvVars: Symbol.for("IEnvVars"),
  IUsersRepository: Symbol.for("IUsersRepository"),
  IAuthRepository: Symbol.for("IAuthRepository"),
  GetUsersListUseCase: Symbol.for("GetUsersListUseCase"),
  GetAuthProfileUseCase: Symbol.for("GetAuthProfileUseCase"),
  PostLocalLoginUseCase: Symbol.for("PostLocalLoginUseCase")
};
