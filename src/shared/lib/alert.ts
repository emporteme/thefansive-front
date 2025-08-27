import { toast, ToastOptions } from "react-toastify"

// we can change toastify to any other library
export const alert = {
  success: (message: string, options?: ToastOptions) => toast.success(message, { hideProgressBar: true, ...options }),
  error: (message: string, options?: ToastOptions) => toast.error(message, { hideProgressBar: true, ...options }),
  info: (message: string, options?: ToastOptions) => toast.info(message, { hideProgressBar: true, ...options }),
  warning: (message: string, options?: ToastOptions) => toast.warning(message, { hideProgressBar: true, ...options }),
}
