type IconEmailProps = {
  className?: string;
};

const IconEmail = ({ className }: IconEmailProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipRule="evenodd"
      viewBox="0 0 512 512"
      className={className}
    >
      <g fill="none" stroke="currentColor" strokeWidth={32}>
        <path d="M464 136c0-22.077-17.923-40-40-40H88c-22.077 0-40 17.923-40 40v240c0 22.077 17.923 40 40 40h336c22.077 0 40-17.923 40-40V136Z" />
        <path d="m112 160 144 112 144-112" />
      </g>
    </svg>
  );
};

export default IconEmail;
