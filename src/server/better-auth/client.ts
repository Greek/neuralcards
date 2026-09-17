import { createAuthClient, type ErrorContext } from "better-auth/react";

export const authClient = createAuthClient();

export type Session = typeof authClient.$Infer.Session;

export const translateAuthErrorCode = (error: ErrorContext) => {
  switch (error.error.code) {
    case 'USER_ALREADY_EXISTS':
      return 'A user with that email address already exists.';
    case 'INVALID_EMAIL_OR_PASSWORD':
      return error.error.message;
    default:
      return error.error.message;
  }
};

