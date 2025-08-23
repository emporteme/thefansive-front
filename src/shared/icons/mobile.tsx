import React from "react"

const Mobile: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.75 6.74805C3.75 4.27317 3.75 3.03574 4.51884 2.26689C5.28769 1.49805 6.52513 1.49805 9 1.49805C11.4749 1.49805 12.7123 1.49805 13.4812 2.26689C14.25 3.03574 14.25 4.27317 14.25 6.74805V11.248C14.25 13.7229 14.25 14.9604 13.4812 15.7292C12.7123 16.498 11.4749 16.498 9 16.498C6.52513 16.498 5.28769 16.498 4.51884 15.7292C3.75 14.9604 3.75 13.7229 3.75 11.248V6.74805Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M8.25 14.25H9.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M6.81641 1.89844C6.96107 2.7664 7.0334 3.20037 7.33105 3.46446C7.64154 3.73993 8.08176 3.74793 8.99965 3.74793C9.91755 3.74793 10.3578 3.73993 10.6683 3.46446C10.9659 3.20037 11.0382 2.76639 11.1829 1.89844"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Mobile
