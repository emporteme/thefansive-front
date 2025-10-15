import React from "react"

const ChevronUp: React.FC<{ className?: string; onClick?: () => void }> = ({ className, onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path d="M18 15C18 15 13.581 9.00001 11.9999 9C10.4188 8.99999 6 15 6 15" fill="currentColor" />
      <path
        d="M18 15C18 15 13.581 9.00001 11.9999 9C10.4188 8.99999 6 15 6 15H18Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronUp
