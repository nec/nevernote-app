import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideNotification } from "../../store/notification/actions";
import { selectNotification } from "../../store/notification/selectors";

import styles from "./Notification.module.css";

const Notification = () => {
  const { visible, payload } = useSelector(selectNotification);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let clear;
    if (visible) {
      clear = setTimeout(() => {
        dispatch(hideNotification());
      }, 2000);

      return () => {
        clearInterval(clear);
      };
    }
  }, [dispatch, visible]);

  return (
    <div
      className={
        (visible ? styles.visible : "") +
        " " +
        styles.notification +
        " " +
        styles[payload.type]
      }
    >
      {payload.message}
    </div>
  );
};

export default Notification;
