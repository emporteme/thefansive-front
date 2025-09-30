import { SVGProps } from "react"

const Favourite = (props: SVGProps<SVGSVGElement>) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6 10.25L5.175 9.5C2.6 7.2 1 5.775 1 4C1 2.625 2.125 1.5 3.5 1.5C4.26 1.5 5.01 1.89 5.39 2.47C5.4 2.48 5.41 2.49 5.42 2.5H6.58C6.59 2.49 6.6 2.48 6.61 2.47C6.99 1.89 7.74 1.5 8.5 1.5C9.875 1.5 11 2.625 11 4C11 5.775 9.4 7.2 6.825 9.5L6 10.25Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

export { Favourite }
