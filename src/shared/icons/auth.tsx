import React from "react"

const Auth: React.FC<{ className?: string }> = ({ className }) => {
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
        d="M12.5 14.6875C12.4387 16.2308 11.1526 17.5412 9.42967 17.499C9.02883 17.4893 8.53342 17.3495 7.5426 17.07C5.15801 16.3974 3.08796 15.267 2.5913 12.7347C2.5 12.2692 2.5 11.7454 2.5 10.6978V9.30227C2.5 8.2547 2.5 7.73089 2.5913 7.2654C3.08796 4.73305 5.15801 3.60264 7.5426 2.93002C8.53342 2.65054 9.02883 2.5108 9.42967 2.50099C11.1526 2.45884 12.4387 3.76923 12.5 5.31251"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.33203 9.99935H17.4987M8.33203 9.99935C8.33203 9.41585 9.99395 8.32562 10.4154 7.91602M8.33203 9.99935C8.33203 10.5828 9.99395 11.6731 10.4154 12.0827"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Auth
