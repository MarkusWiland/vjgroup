import React from "react";
import Header from "../_components/Header";
const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "job",
        href: "/consulting/job",
    }
]
export default function Consulting() {
  return (
    <div>
      <Header navLinks={navLinks}/>
      <div className="flex flex-col items-center gap-16 justify-start w-full p-32">
        <div>testar</div>
        <h1 className="text-3xl">ViJo Consulting</h1>
        <p className="max-w-[750px] flex items-start justify-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad
          similique minima sunt dolor velit a minus non qui! Amet suscipit saepe
          natus nobis omnis itaque atque neque quasi iste.
        </p>
      </div>
    </div>
  );
}
