import React from "react";
import Header from "../_components/Header";
const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "test",
        href: "/sporthorses/hopp",
    }
]
export default function Sporthorses() {
  return (
    <div>
      <Header navLinks={navLinks}/>
      <div>sporthorses</div>
    </div>
  );
}
