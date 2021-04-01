import React from 'react';
import {useColor} from "../../contexts/ColorContext"
import Toast from "./Toast"

const ToastList = () => {
  const { toasts, removeToast=f=>f } = useColor();
  return (
    <div className="toast-container position-fixed">
      {toasts.map((toast) => <Toast key={toast.id} onRemove={removeToast} {...toast} />)}
    </div>
  );
}

export default ToastList