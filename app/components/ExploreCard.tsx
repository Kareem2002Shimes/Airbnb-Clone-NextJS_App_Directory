import Image from 'next/image';
import { ExploreItem } from '../types/app';

type ExploreCardProps = ExploreItem;
const ExploreCard = ({ location, distance, img }: ExploreCardProps) => {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      <div className='relative w-16 h-16'>
        <Image src={img} alt='ExploreCard-Img' fill />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  );
};

export default ExploreCard;
