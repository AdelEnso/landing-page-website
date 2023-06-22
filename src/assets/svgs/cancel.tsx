import { MouseEventHandler } from "react";

export const CancelIcon = ({
  onClick,
}: {
  onClick?: MouseEventHandler<SVGSVGElement> | undefined;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      width={24}
      height={24}
      onClick={onClick}
      stroke="#fff"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
