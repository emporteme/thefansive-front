import React from "react"

const Logout: React.FC<{ className?: string }> = ({ className }) => {
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
        d="M12.5 14.6875C12.4387 16.2307 11.1526 17.5412 9.42967 17.499C9.02883 17.4892 8.53342 17.3495 7.5426 17.07C5.15801 16.3973 3.08796 15.2669 2.5913 12.7346C2.5 12.2692 2.5 11.7453 2.5 10.6977V9.30225C2.5 8.25467 2.5 7.73087 2.5913 7.26538C3.08796 4.73304 5.15801 3.60263 7.5426 2.93002C8.53342 2.65053 9.02883 2.51079 9.42967 2.50099C11.1526 2.45884 12.4387 3.76922 12.5 5.31251"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17.5007 10.0003H8.33398H17.5007ZM17.5007 10.0003C17.5007 9.41683 15.8387 8.3266 15.4173 7.91699L17.5007 10.0003ZM17.5007 10.0003C17.5007 10.5838 15.8387 11.6741 15.4173 12.0837L17.5007 10.0003Z"
        fill="currentColor"
      />
      <path
        d="M17.5007 10.0003H8.33398M17.5007 10.0003C17.5007 9.41683 15.8387 8.3266 15.4173 7.91699M17.5007 10.0003C17.5007 10.5838 15.8387 11.6741 15.4173 12.0837"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default Logout
