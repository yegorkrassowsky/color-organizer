import React from 'react';
import Toast from "./Toast"

const ToastList = props => {
  const { toasts, onRemove=f=>f } = props;
  return (
    <div className="toast-container position-fixed">
      {toasts.map((toast) => <Toast key={toast.id} onRemove={onRemove} {...toast} />)}
    </div>
  );
}

export default ToastList