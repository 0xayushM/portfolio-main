import Image from "next/image";
import Link from "next/link";
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:gap-y-6">
          <Link href='/'> 
            <Image
              src='/logo.png'
              width={120}
              height={48}
              alt=''
              property={true}
            />
          </Link>
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
