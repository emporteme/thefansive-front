import React from "react"

interface FootballProps {
  className?: string
}

const Football: React.FC<FootballProps> = ({ className = "h-5 w-5" }) => {
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
        d="M1.66663 10C1.66663 14.6024 5.39758 18.3333 9.99996 18.3333C14.6023 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6023 1.66667 9.99996 1.66667C5.39758 1.66667 1.66663 5.39763 1.66663 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M7.70837 12.2917C8.75004 12.2917 10.625 12.2917 12.2917 12.2917" fill="currentColor" />
      <path
        d="M4.16663 14.1667C5.62496 13.3333 9.58329 11.6667 15.8333 15C15.8333 15 15.8333 5 15.8333 5C9.58329 8.33333 5.62496 6.66667 4.16663 5.83333"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M1.66663 10.4167C1.66663 10.4167 18.3333 10.4167 18.3333 10.4167"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}

export { Football }
