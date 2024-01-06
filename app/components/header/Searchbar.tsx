'use client';
import { SearchIcon, UsersIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import { useState } from 'react';
import { DateRangePicker, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const Searchbar = ({ placeholder }: { placeholder?: string }) => {
  const [input, setInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numOfGuests, setNumOfGuests] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: 'selection',
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  return (
    <>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          type='text'
          placeholder={placeholder || 'Start your search'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none'
        />
        <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>
      {input && (
        <div className=' absolute  top-[100%] left-[50%] flex flex-col col-span-3 mx-auto translate-x-[-50%] '>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={['#FD5B61']}
            minDate={new Date()}
          />
          <div className='flex items-center border-b bg-white p-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              type='number'
              className='w-12 pl-2 text-lg outline-none text-red-400'
              value={numOfGuests}
              min={1}
              onChange={(e) => setNumOfGuests(Number(e.target.value))}
            />
          </div>
          <div className='flex items-center bg-white p-5'>
            <button
              type='button'
              className='flex-grow text-gray-500'
              onClick={() => setInput('')}
            >
              Cancel
            </button>
            <Link
              href={{
                pathname: '/search',
                search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`,
              }}
              onClick={() => setInput('')}
              className='flex-grow text-red-400'
            >
              Search
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Searchbar;
