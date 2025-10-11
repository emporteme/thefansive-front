import React from "react"

const Gift: React.FC<{ className?: string; fill?: boolean }> = ({ className }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.33398 9.16699V12.5003C3.33398 15.2502 3.33398 16.6251 4.18826 17.4794C5.04253 18.3337 6.41746 18.3337 9.16732 18.3337H10.834C13.5838 18.3337 14.9587 18.3337 15.8131 17.4794C16.6673 16.6251 16.6673 15.2502 16.6673 12.5003V9.16699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.49967C2.5 6.8766 2.5 6.56506 2.66747 6.33301C2.77717 6.18099 2.93497 6.05475 3.125 5.96698C3.41507 5.83301 3.80448 5.83301 4.58333 5.83301H15.4167C16.1955 5.83301 16.5849 5.83301 16.875 5.96698C17.065 6.05475 17.2228 6.18099 17.3325 6.33301C17.5 6.56506 17.5 6.8766 17.5 7.49967C17.5 8.12275 17.5 8.43426 17.3325 8.66634C17.2228 8.81834 17.065 8.94459 16.875 9.03234C16.5849 9.16634 16.1955 9.16634 15.4167 9.16634H4.58333C3.80448 9.16634 3.41507 9.16634 3.125 9.03234C2.93497 8.94459 2.77717 8.81834 2.66747 8.66634C2.5 8.43426 2.5 8.12275 2.5 7.49967Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M5 3.15508C5 2.33323 5.66624 1.66699 6.48809 1.66699H6.78572C8.56092 1.66699 10 3.10608 10 4.88128V5.83366H7.67857C6.19923 5.83366 5 4.63442 5 3.15508Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M15 3.15508C15 2.33323 14.3338 1.66699 13.5119 1.66699H13.2142C11.4391 1.66699 10 3.10608 10 4.88128V5.83366H12.3214C13.8007 5.83366 15 4.63442 15 3.15508Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10 9.16699V18.3337"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Gift
