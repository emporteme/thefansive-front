import React from "react"

const Task: React.FC<{ className?: string; fill?: boolean }> = ({ className, fill }) => {
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
        d="M12.0807 1.66699H7.91406C7.2237 1.66699 6.66406 2.22664 6.66406 2.91699C6.66406 3.60735 7.2237 4.16699 7.91406 4.16699H12.0807C12.7711 4.16699 13.3307 3.60735 13.3307 2.91699C13.3307 2.22664 12.7711 1.66699 12.0807 1.66699Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66406 12.5003H9.52124H6.66406ZM6.66406 9.16699H13.3307H6.66406Z"
        fill={fill ? "currentColor" : "none"}
      />
      <path
        d="M6.66406 12.5003H9.52124M6.66406 9.16699H13.3307"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3301 2.91699C14.6246 2.95601 15.3968 3.10039 15.9312 3.6348C16.6634 4.36703 16.6634 5.54553 16.6634 7.90252V13.3332C16.6634 15.6903 16.6634 16.8688 15.9312 17.601C15.1989 18.3332 14.0204 18.3332 11.6634 18.3332H8.33007C5.97305 18.3332 4.79454 18.3332 4.06231 17.601C3.33009 16.8688 3.33008 15.6903 3.33008 13.3333L3.33009 7.90257C3.33008 5.54554 3.33008 4.36703 4.06231 3.63479C4.59671 3.10038 5.36884 2.956 6.66333 2.91699"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Task
