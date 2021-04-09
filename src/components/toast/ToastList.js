import React from 'react';
import Toast from "./Toast"
import { useStore } from '../../store';

const ToastList = () => {
  const { toasts, removeToast=f=>f } = useStore()
  return (
    <div className="toast-container position-fixed">
      {toasts.map((toast) => <Toast key={toast.id} onRemove={removeToast} {...toast} />)}
    </div>
  );
}

export default ToastList