import React from "react"

export const ClockOutlined: React.FC<{ className?: string }> = ({ className }) => {
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

export const ClockFilled: React.FC<{ className?: string }> = ({ className }) => {
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
        d="M7.00098 0.416992C10.6366 0.417168 13.5848 3.36438 13.585 7C13.5848 10.6356 10.6366 13.5838 7.00098 13.584C3.36536 13.5838 0.418145 10.6356 0.417969 7C0.418144 3.36438 3.36536 0.417168 7.00098 0.416992ZM7.00098 3.91699C6.58676 3.91699 6.25098 4.25278 6.25098 4.66699V7C6.25106 7.19872 6.33023 7.38971 6.4707 7.53027L7.6377 8.69727C7.93056 8.98978 8.40544 8.98989 8.69824 8.69727C8.99086 8.40447 8.99076 7.92958 8.69824 7.63672L7.75098 6.68945V4.66699C7.75098 4.25278 7.41519 3.91699 7.00098 3.91699Z"
        fill="currentColor"
      />
    </svg>
  )
}
