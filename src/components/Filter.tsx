import React from 'react'

const Filter = () => {
  return (
    <div>
      <form className="border-2 border-black rounded-md w-64 flex flex-col gap-[1.2rem] py-4 px-[0.8rem]">
        <label htmlFor="" className="font-bold">
          Organization
          <span className="relative ">
            <input
              type="text"
              placeholder="Select"
              className="border-2 border-gray-600 outline-none py-2 px-4 rounded-md text-[0.9rem] "
            />
            <span>
              <img
                src="/dropdown.svg"
                alt="dropdown"
                className="absolute top-1 right-4"
              />
            </span>
          </span>
        </label>
        <label htmlFor="" className="font-bold">
          Username
          <span className="relative ">
            <input
              type="text"
              placeholder="User"
              className="border-2 border-gray-600 outline-none py-2 px-4 rounded-md text-[0.9rem] "
            />
            <span>
              <img
                src="/dropdown.svg"
                alt="dropdown"
                className="absolute top-1 right-4"
              />
            </span>
          </span>
        </label>
        <label htmlFor="" className='font-bold'>
          Email
          <span className="relative ">
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-gray-600 outline-none py-2 px-4 rounded-md text-[0.9rem] "
            />
            <span>
              <img
                src="/dropdown.svg"
                alt="dropdown"
                className="absolute top-1 right-4"
              />
            </span>
          </span>
        </label>
        <label htmlFor="" className="font-bold">
          Date
          <span className="relative ">
            <input
              type="text"
              placeholder="Date"
              className="border-2 border-gray-600 outline-none py-2 px-4 rounded-md text-[0.9rem] "
            />
            <span>
              <img
                src="/date-picker.svg"
                alt="dropdown"
                className="absolute top-1 right-4"
              />
            </span>
          </span>
        </label>
        <label htmlFor="" className="font-bold">
          Phone Number
          <span className="relative ">
            <input
              type="text"
              placeholder="Phone Number"
              className="border-2 border-gray-600 outline-none py-2 px-4 rounded-md text-[0.9rem] "
            />
            <span>
              <img
                src="/dropdown.svg"
                alt="dropdown"
                className="absolute top-1 right-4"
              />
            </span>
          </span>
        </label>
        <label htmlFor="" className="font-bold">
          Status
          <span className="relative ">
            <input
              type="text"
              placeholder="Select"
              className="border-2 border-gray-600 outline-none py-2 px-4 rounded-md text-[0.9rem] "
            />
            <span>
              <img
                src="/dropdown.svg"
                alt="dropdown"
                className="absolute top-1 right-4"
              />
            </span>
          </span>
        </label>
        <div className="flex flex-row gap-4">
          <button className="rounded-md border text-center p-2 w-24 border-black ">
            Reset
          </button>
          <button className="rounded-md bg-green-700 text-white text-center p-2 w-24 border border-white">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
}

export default Filter