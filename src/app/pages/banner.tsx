// COMPONENTS
import Image from 'next/image';

// BANNER
export default function Banner() {
    return (
        <>
    <div className="relative w-full h-[400px]">
      <Image
        src="/imgs/david_piano2.jpg"
        alt="Image of David Glass"
        fill
        className="object-cover"
      />
    </div>
        </>
    );
}