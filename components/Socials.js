import Link from 'next/link';
import { RiLinkedinLine, RiTwitterXLine, RiDribbbleLine, RiGithubLine, RiBehanceLine } from 'react-icons/ri'

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-2xl'>
      <Link href={'https://github.com/0xayushM'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://linkedin.com/in/0xayushM'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://twitter.com/0xayushM'} target='_blank' className='hover:text-accent transition-all duration-300'>
        <RiTwitterXLine />
      </Link>
    </div>
  )
};

export default Socials;
