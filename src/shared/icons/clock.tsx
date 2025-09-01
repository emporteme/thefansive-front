import React from "react"

const Clock: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_963_22333)">
        <circle cx="8.00065" cy="7.99967" r="6.66667" stroke="currentColor" />
        <path
          d="M8 5.33301V7.99967L9.33333 9.33301"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_963_22333">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Clock
