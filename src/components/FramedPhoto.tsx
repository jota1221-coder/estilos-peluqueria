import Image from "next/image";

export function FramedPhoto({
  src,
  alt,
  aspect = "aspect-[4/5]",
  className = "",
  priority = false,
  children,
}: {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`photo-frame border hairline ${aspect} ${className}`}>
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="photo-bg object-cover scale-125 blur-2xl opacity-70"
      />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="photo-fg object-contain"
      />
      {children}
    </div>
  );
}
