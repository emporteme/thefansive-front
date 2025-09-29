import React from "react"

const ArrowRight: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="14"
      height="24"
      viewBox="0 0 14 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.00008 2C2.00008 2 12 9.36489 12 12.0001C12 14.6353 2 22 2 22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowRight
