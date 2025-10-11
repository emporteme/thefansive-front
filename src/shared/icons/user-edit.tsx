import React from "react"

const UserEdit: React.FC<{ className?: string; fill?: boolean }> = ({ className }) => {
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
        d="M12.9173 6.66667C12.9173 4.36548 11.0518 2.5 8.75065 2.5C6.44947 2.5 4.58398 4.36548 4.58398 6.66667C4.58398 8.96783 6.44947 10.8333 8.75065 10.8333C11.0518 10.8333 12.9173 8.96783 12.9173 6.66667Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.91602 16.6663C2.91602 13.4447 5.52769 10.833 8.74935 10.833C9.81185 10.833 10.808 11.1171 11.666 11.6134"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8239 12.4453L16.3051 11.9264C15.9592 11.5805 15.3983 11.5805 15.0524 11.9264L12.2618 14.7171C11.8908 15.088 11.638 15.5605 11.5351 16.0749L11.25 17.5003L12.6754 17.2153C13.1898 17.1123 13.6623 16.8595 14.0332 16.4886L16.8239 13.6979C17.1698 13.352 17.1698 12.7912 16.8239 12.4453Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default UserEdit
