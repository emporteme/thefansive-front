import React from "react"

const Signature: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_3093_5628)">
        <path
          d="M11 6.31718C9 8.07324 8.71393 5.3105 7.67479 5.50826C6.5 5.73184 5.75 8.22223 6.5 8.22223C7.25 8.22223 6.25 5.25 5.25 6.27778C4.25 7.30556 3.92968 8.64729 3.11763 7.65123C-0.75 2.90723 2.49999 -0.574969 4.08161 1.72843C5.08264 3.18628 3.25 8.48845 1 11"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M4.5 10.5H9.5" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default Signature
