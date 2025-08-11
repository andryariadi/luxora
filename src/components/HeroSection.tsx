import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative aspect-[3/1]">
      <Image src="/featured.png" alt="Featured Product" fill />
    </div>
  );
};

export default HeroSection;
