'use client'

import Tilt from 'react-parallax-tilt';

export default function Home() {
  return (
    <div className="bg-light-green min-h-[calc(100vh-68px)] flex">
      <div className="flex w-full justify-center">
        <Tilt tiltReverse={true} scale={1.15} transitionSpeed={2500} perspective={500} className="bg-white opacity-50 flex justify-center items-center max-h-60 max-w-60 rounded-md p-4 hover:opacity-100 transition duration-700 parallax-effect">
          <div className="text-light-green text-center">
            <h1 className="text-4xl font-bold">Hello</h1>
            <p className="text-lg pt-6">Welcome to my portfolio</p>
          </div>
        </Tilt>
      </div>
    </div>
  );
}
