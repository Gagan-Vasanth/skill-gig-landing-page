import { useEffect, useState } from "react";
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SideNav from "./components/common/SideNav";
import './styles/common.css';

const App = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  // useEffect(() => {
  //   const buttons = document.querySelectorAll('button');
  //   buttons.forEach(btn => {
  //     btn.addEventListener('click', function (e: MouseEvent) {
  //       let x = e.clientX - e?.offsetX;
  //       let y = e.clientY - e?.offsetY;

  //       let ripples = document.createElement('span');
  //       ripples.className = 'button-span'
  //       ripples.style.left = x + 'px';
  //       ripples.style.right = y + 'px';
  //       this.appendChild(ripples);

  //       setTimeout(() => {
  //         ripples.remove()
  //       }, 1000)
  //     })
  //   })
  // }, [])


  return (
    <main style={{ position: 'relative' }}>
      <Navbar setSideNavOpen={setSideNavOpen} sideNavOpen={sideNavOpen} />
      <SideNav sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
      <Hero />
    </main>
  )
}

export default App