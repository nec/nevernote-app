import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./actionsTypes";

export const showNotification = {
  success: message => ({
    type: SHOW_NOTIFICATION,
    payload: { type: "success", message }
  }),
  error: message => ({
    type: SHOW_NOTIFICATION,
    payload: { type: "error", message }
  })
};

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION
});
