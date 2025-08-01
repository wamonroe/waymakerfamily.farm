import { twMerge } from "tailwind-merge";

type PhotoProps = {
  src: string;
  alt?: string;
  className?: string;
};

const Photo = ({ src, alt, className }: PhotoProps) => {
  return (
    <div className="overflow-hidden rounded-2xl drop-shadow-2xl">
      <img src={src} className={twMerge(className, "object-cover")} alt={alt} />
    </div>
  );
};

export default Photo;
