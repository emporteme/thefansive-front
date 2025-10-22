import React from "react"

const LinkCircle: React.FC<{ className?: string; onClick?: () => void }> = ({ className, onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M11.1193 2.99805C6.55992 3.45084 2.99902 7.29857 2.99902 11.9782C2.99902 16.9624 7.03854 21.0029 12.0216 21.0029C16.7 21.0029 20.5469 17.4412 20.9996 12.8807"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5572 3.49418C20.0631 2.99942 16.7347 3.04554 16.0311 3.05555L18.5177 5.54562L20.5572 3.49418Z"
        fill="currentColor"
      />
      <path
        d="M20.9952 8.02648C21.0052 7.32187 21.0513 3.98893 20.5572 3.49418L18.5177 5.54562L20.9952 8.02648Z"
        fill="currentColor"
      />
      <path
        d="M20.5572 3.49418C20.0631 2.99942 16.7347 3.04554 16.0311 3.05555L18.5177 5.54562M20.5572 3.49418C21.0513 3.98893 21.0052 7.32187 20.9952 8.02648L18.5177 5.54562M20.5572 3.49418L18.5177 5.54562M11.0479 13.0594L18.5177 5.54562"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LinkCircle
