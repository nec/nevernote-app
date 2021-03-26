import { SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./actionsTypes";

export const initStateNotification = {
  payload: {},
  visible: false
};

export const notificationReducer = (state = initStateNotification, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,
        payload: action.payload,
        visible: true
      };

    case HIDE_NOTIFICATION:
      return {
        ...state,
        visible: false
      };

    default:
      return state;
  }
};
