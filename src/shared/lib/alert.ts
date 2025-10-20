import { toast, ToastOptions } from "react-toastify"

// we can change toastify to any other library
export const alert = {
  success: (message: string, options?: ToastOptions) =>
    toast.success(message, { hideProgressBar: true, delay: 0, ...options }),
  error: (message: string, options?: ToastOptions) =>
    toast.error(message, { hideProgressBar: true, delay: 0, ...options }),
  info: (message: string, options?: ToastOptions) =>
    toast.info(message, { hideProgressBar: true, delay: 0, ...options }),
  warning: (message: string, options?: ToastOptions) =>
    toast.warning(message, { hideProgressBar: true, delay: 0, ...options }),
}
