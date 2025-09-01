import React from "react"

const ArrowRightSmallRound: React.FC<{ className?: string }> = ({ className }) => {
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
        d="M5.25003 3.5C5.25003 3.5 8.74999 6.07771 8.75 7.00003C8.75001 7.92234 5.25 10.5 5.25 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowRightSmallRound
