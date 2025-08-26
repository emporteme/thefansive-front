import { toast, ToastOptions } from "react-toastify"

// we can change toastify to any other library
export const alert = {
  success: (message: string, options?: ToastOptions) => toast.success(message, options),
  error: (message: string, options?: ToastOptions) => toast.error(message, options),
  info: (message: string, options?: ToastOptions) => toast.info(message, options),
  warning: (message: string, options?: ToastOptions) => toast.warning(message, options),
}
