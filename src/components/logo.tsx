import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        d="M20 6H16V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V6H4C2.89543 6 2 6.89543 2 8V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V8C22 6.89543 21.1046 6 20 6ZM10 5H14V6H10V5Z"
      />
      <path
        d="M15 13.5C15 14.3284 13.6569 15 12 15C10.3431 15 9 14.3284 9 13.5C9 12.6716 10.3431 12 12 12C13.6569 12 15 12.6716 15 13.5Z"
      />
    </svg>
  );
}
