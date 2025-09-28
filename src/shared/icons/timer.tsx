import React from "react"

const Timer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.38792 8.76808L5.33398 4.66675L8.94705 7.51982C9.46072 7.92542 9.46338 8.69822 8.95245 9.10722C8.44158 9.51628 7.67992 9.35115 7.38792 8.76808Z"
        stroke="currentColor"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.33398 3.2134C2.09974 4.42608 1.33398 6.11597 1.33398 7.98513C1.33398 11.6753 4.31875 14.6668 8.00065 14.6668C11.6825 14.6668 14.6673 11.6753 14.6673 7.98513C14.6673 4.74953 12.3727 2.05111 9.32545 1.43532C8.76812 1.32269 8.48945 1.26638 8.24505 1.46688C8.00065 1.66738 8.00065 1.99149 8.00065 2.63973V3.3079"
        stroke="currentColor"
        stroke-width="1.33"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Timer
