import React from "react"

const DeliveryTruck: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.5 17.5C19.5 18.8807 18.3807 20 17 20C15.6193 20 14.5 18.8807 14.5 17.5C14.5 16.1193 15.6193 15 17 15C18.3807 15 19.5 16.1193 19.5 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M9.5 17.5C9.5 18.8807 8.38071 20 7 20C5.61929 20 4.5 18.8807 4.5 17.5C4.5 16.1193 5.61929 15 7 15C8.38071 15 9.5 16.1193 9.5 17.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M14.498 17.5H9.49805M19.498 17.5H20.2612C20.4812 17.5 20.5912 17.5 20.6836 17.4885C21.3649 17.4036 21.9016 16.8669 21.9865 16.1855C21.998 16.0931 21.998 15.9831 21.998 15.7632V13C21.998 9.41015 19.0879 6.5 15.498 6.5M1.99805 4H11.998C13.4123 4 14.1194 4 14.5587 4.43934C14.998 4.87868 14.998 5.58579 14.998 7V15.5M1.99805 12.75V15C1.99805 15.9346 1.99805 16.4019 2.19901 16.75C2.33066 16.978 2.52002 17.1674 2.74805 17.299C3.09612 17.5 3.56343 17.5 4.49805 17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.99805 7H7.99805M1.99805 10H5.99805"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default DeliveryTruck
