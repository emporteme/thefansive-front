import React from "react"

const Calendar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.33268 1.1665V3.49984M4.66602 1.1665V3.49984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.58333 2.3335H6.41667C4.21678 2.3335 3.11684 2.3335 2.43342 3.01691C1.88328 3.56705 1.77599 4.38708 1.75507 5.8335H12.2449C12.224 4.38708 12.1167 3.56705 11.5666 3.01691C10.8832 2.3335 9.7832 2.3335 7.58333 2.3335Z"
        fill="currentColor"
      />
      <path
        d="M1.75 5.8335H1.75507M12.25 5.8335H12.2449M1.75507 5.8335C1.77599 4.38708 1.88328 3.56705 2.43342 3.01691C3.11684 2.3335 4.21678 2.3335 6.41667 2.3335H7.58333C9.7832 2.3335 10.8832 2.3335 11.5666 3.01691C12.1167 3.56705 12.224 4.38708 12.2449 5.8335M1.75507 5.8335H12.2449M1.75507 5.8335C1.75 6.18393 1.75 6.57113 1.75 7.00016V8.16683C1.75 10.3667 1.75 11.4667 2.43342 12.1501C3.11684 12.8335 4.21678 12.8335 6.41667 12.8335H7.58333C9.7832 12.8335 10.8832 12.8335 11.5666 12.1501C12.25 11.4667 12.25 10.3667 12.25 8.16683V7.00016C12.25 6.57113 12.25 6.18393 12.2449 5.8335"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.41602 8.1665H9.33268M4.66602 8.1665H4.67125M7.58268 10.4998H4.66602M9.33268 10.4998H9.32743"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Calendar
