import { alert } from "../lib/alert"

export const copyText = (text: string) => {
  navigator.clipboard.writeText(text)
  alert.success("Copied to clipboard")
}
