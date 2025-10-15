import React from "react"

const Flag: React.FC<{ className?: string; fill?: boolean }> = ({ className, fill }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3.33398 5.83301V17.4997V5.83301Z" fill={fill ? "currentColor" : "none"} />
      <path
        d="M3.33398 5.83301V17.4997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill ? "currentColor" : "none"}
      />
      <path
        d="M9.79865 3.25721C7.04428 1.85414 4.87669 2.6762 3.79587 3.516C3.60105 3.66738 3.50363 3.74306 3.41881 3.91639C3.33398 4.08973 3.33398 4.25115 3.33398 4.574V12.2766C4.14207 11.3618 6.56631 9.944 9.79865 11.5905C12.6873 13.062 15.1457 12.452 16.3087 11.8163C16.4701 11.7281 16.5507 11.6839 16.6091 11.5857C16.6673 11.4874 16.6673 11.3808 16.6673 11.1674V4.89491C16.6673 4.20448 16.6673 3.85928 16.5029 3.73422C16.3384 3.60916 15.9537 3.71583 15.1842 3.9292C13.8673 4.29433 11.9526 4.35443 9.79865 3.25721Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={fill ? "currentColor" : "none"}
      />
    </svg>
  )
}

export default Flag
