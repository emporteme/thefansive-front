import React from "react"

const PencilEdit: React.FC<{ className?: string; onClick?: () => void }> = ({ className, onClick }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path d="M11 20H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M17.9316 9.93164L10.3145 17.5498C9.298 18.5662 8.69287 19.1803 7.94434 19.5986C7.53795 19.8256 6.92156 20.0237 6.29102 20.1992C5.63946 20.3805 4.8892 20.5592 4.17383 20.7295C3.92047 20.7898 3.65389 20.7144 3.46973 20.5303C3.28562 20.3461 3.21019 20.0795 3.27051 19.8262C3.44082 19.1108 3.61948 18.3605 3.80078 17.709C3.97625 17.0785 4.17439 16.462 4.40137 16.0557C4.79552 15.3504 5.35895 14.7778 6.25879 13.877L14.0674 6.06738L17.9316 9.93164ZM16.0859 4.0498C17.1531 2.98342 18.8833 2.98305 19.9502 4.0498V4.05078C21.0165 5.11768 21.0164 6.84711 19.9502 7.91406L18.4727 9.3916L14.6084 5.52734L14.6836 5.45215L16.0859 4.05078V4.0498Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default PencilEdit
