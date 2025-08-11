import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="pt-5">
      <div className="relative aspect-[3/1]">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
    </div>
  );
};

export default HeroSection;
