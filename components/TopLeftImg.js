import Image from "next/image";
import LeftImage from '.././public/top-left-img.png'

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-1 w-[200px] xl:w-[400px] opacity-50">
      <Image src={LeftImage} width={400} height={400} alt=''/>
    </div>
  )
};

export default TopLeftImg;
