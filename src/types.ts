type ErrorObject = {
  message: string;
};

type AuthErrorObject = {
  username: ErrorObject;
  password: ErrorObject;
};

type UserInfo = {
  name: string;
  surname: string;
  work: string;
  hobby: string;
  bio: string;
};

export type { AuthErrorObject, UserInfo };
