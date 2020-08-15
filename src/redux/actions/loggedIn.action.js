export const SignInAction = "SignIn"
export const SignOutAction = "SignOut"

export const SignIn = logState => ({
  type: SignInAction,
  payload: logState
});

export const SignOut = logState => ({
  type: SignOutAction,
  payload: logState 
});