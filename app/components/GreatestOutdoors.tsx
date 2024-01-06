import Image from 'next/image';
import Link from 'next/link';

type GreatestOutdoorsProps = {
  img: string;
  title: string;
  desc: string;
  linkText: string;
};
const GreatestOutdoors = ({
  img,
  title,
  desc,
  linkText,
}: GreatestOutdoorsProps) => {
  return (
    <section>
      <div className='container relative cursor-pointer pt-6'>
        <div className='relative h-96 min-w-[300px]'>
          <Image
            src={img}
            fill
            className='rounded-2xl -z-10 object-cover'
            alt='GreatestOutdoors-Img'
          />
        </div>
        <div className='absolute top-32 left-12'>
          <h3 className='text-4xl mb-3 w-64'>{title}</h3>
          <p>{desc}</p>
          <Link
            href='/'
            className='text-sm px-4 py-2 rounded-lg mt-5 block text-white  bg-gray-900'
          >
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GreatestOutdoors;
