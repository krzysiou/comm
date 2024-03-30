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

interface User {
  id: string;
  username: string;
  password: string;
  info?: UserInfo;
}

export type { AuthErrorObject, User, UserInfo };
