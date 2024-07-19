'use client'
import { MouseEvent, useState } from "react";
import TiltButton from "./components/TiltButton";

export default function Home() {
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();
    let xPosition = clientX - left;
    let yPosition = clientY - top;
    setMousePosition({ x: xPosition, y: yPosition });
  }

  return (
    <div onMouseMove={handleMouseMove} >
      <div className="text-white bg-light-green min-h-screen">
        <div className="p-12">
          <div className="text-5xl text-bold">
            Hey!
          </div>
          <div className="text-5xl text-bold">
            I'm Prabhath,
          </div>
          <div className="text-3xl text-bold w-1/2">
            a software developer who loves to build quality experiences for the web.
          </div>
        </div>
        <div className="pt-12 px-12 flex flex-col items-end">
          <div className="text-4xl pb-4">
            Here's what I've been up to recently:
          </div>
          <div className="pb-2">
            <TiltButton buttonText={"Software Engineer @ Charlie Health"} buttonLink={"charliehealth.com"} />
          </div>
          <div className="pb-2">
            <TiltButton buttonText={"Software Engineer @ Amwell"} buttonLink={"amwell.com"} />
          </div>
          <div className="pb-2">
            <TiltButton buttonText={"Software Engineer Intern @ Pandora"} buttonLink={"pandora.com"} />
          </div>
          <div className="">
            <TiltButton buttonText={"Computer Science @ Georgia Tech"} buttonLink={"georgiatech.com"} />
          </div>
        </div>
      </div>
    </div>
  );
}
