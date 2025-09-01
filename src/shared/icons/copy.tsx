import React from "react"
import { cn } from "../lib/utils"

const Copy: React.FC<{ className?: string; onClick?: () => void }> = ({ className, onClick }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className, "cursor-pointer")}
      onClick={onClick}
    >
      <g clipPath="url(#clip0_963_22056)">
        <path
          d="M7.5 12.5C7.5 10.143 7.5 8.96447 8.23223 8.23223C8.96447 7.5 10.143 7.5 12.5 7.5L13.3333 7.5C15.6904 7.5 16.8689 7.5 17.6011 8.23223C18.3333 8.96447 18.3333 10.143 18.3333 12.5V13.3333C18.3333 15.6904 18.3333 16.8689 17.6011 17.6011C16.8689 18.3333 15.6904 18.3333 13.3333 18.3333H12.5C10.143 18.3333 8.96447 18.3333 8.23223 17.6011C7.5 16.8689 7.5 15.6904 7.5 13.3333L7.5 12.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1659 7.50033C14.164 5.03608 14.1266 3.75967 13.4094 2.88568C13.2709 2.7169 13.1161 2.56214 12.9473 2.42362C12.0254 1.66699 10.6556 1.66699 7.91602 1.66699C5.17645 1.66699 3.80666 1.66699 2.88471 2.42362C2.71592 2.56214 2.56116 2.7169 2.42265 2.88568C1.66602 3.80764 1.66602 5.17742 1.66602 7.91699C1.66602 10.6566 1.66602 12.0263 2.42265 12.9483C2.56116 13.1171 2.71592 13.2718 2.8847 13.4104C3.75869 14.1276 5.03511 14.1649 7.49935 14.1669"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_963_22056">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default Copy
