import React from 'react'
import DetailsCard from '../components/details/DetailsCard'
import ProfileCard from '../components/details/ProfileCard'

const UserDetails = () => {
  return (
    <>
      <div className="h-[calc(100vh-0.75rem)] block overflow-auto outline-none ">
        <p className="flex flex-row mt-24 gap-4">
          {" "}
          <img src="/back-icon.svg" alt="back" />
          <a href="/users">Back to users</a>
        </p>
        <div className=" flex lg:flex-row sm:flex-col md:flex-col justify-between mt-6 ">
          <h1 className="text-blue-900 font-bold uppercase text-lg">
            user details
          </h1>
          <div className="flex gap-4 lg:flex-row sm:flex-col md:flex-col">
            <button className="rounded-md border-red-700 uppercase px-4 py-2 text-center bg-white text-red-700 border-2 font-bold sm:w-48 md:w-48">
              blacklist user
            </button>
            <button className="rounded-md border-green-700 uppercase px-4 py-2 text-center bg-white text-green-700 border-2 font-bold sm:w-48 md:w-48">
              Activate user
            </button>
          </div>
        </div>
        <ProfileCard />
        <DetailsCard />
      </div>
    </>
  );
}

export default UserDetails