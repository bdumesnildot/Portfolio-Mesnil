import { toast, Slide } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "/src/styles/components-styles/Notification.scss";

function Notification({
  text = "",
  autoClose = 2500,
  hideProgressBar = false,
  closeButton = true,
  closeButtonClassName = "",
  pauseOnHover = true,
  draggable = true,
  position = "bottom-center",
  theme = "light",
}) {
  const notify = () => {
    toast(
      <div className="toast-card">
        <div className="content-toast">{text}</div>
      </div>,
      {
        position,
        autoClose,
        hideProgressBar,
        closeOnClick: true,
        pauseOnHover,
        closeButton,
        closeButtonClassName,
        draggable,
        progress: "",
        transition: Slide,
        theme,
      }
    );
  };

  return notify();
}

export default Notification;
