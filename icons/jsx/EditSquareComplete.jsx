import * as React from "react";
const SvgEditSquareComplete = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M5.902 18.1v-6.896l6.76-6.76H3.951A1.957 1.957 0 0 0 2 6.393v13.657c0 1.073.878 1.951 1.951 1.951h13.657c1.073 0 1.95-.878 1.95-1.95V11.34l-6.76 6.76H5.903Z"
        fill="currentColor"
      />
      <path
        d="M7.853 16.15h4.136l7.024-7.024-4.137-4.136-7.023 7.023v4.136ZM21.422 3.946l-1.375-1.375c-.761-.761-2-.761-2.761 0l-1.034 1.034 4.136 4.136 1.034-1.034c.77-.761.77-2 0-2.76Z"
        fill="currentColor"
      />
      <circle cx={6} cy={18} r={4.8} fill="currentColor" />
      <path
        d="m4.447 19.656.353.353.354-.353 4.199-4.2.141.143L4.8 20.293 2.507 18l.14-.14 1.8 1.796ZM6 11.5A6.502 6.502 0 0 0-.5 18c0 3.588 2.912 6.5 6.5 6.5s6.5-2.912 6.5-6.5-2.912-6.5-6.5-6.5Z"
        fill="currentColor"
        stroke="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEditSquareComplete;
