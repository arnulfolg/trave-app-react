export const updateUserDataAction = "updateUserData"

export const updateUserData = userData => ({
  type: updateUserDataAction,
  payload: userData
});