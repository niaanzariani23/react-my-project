import { useState } from "react";
import PortoCard from "../Components/PortoCard";

export default function Portofolio() {
    const [show, setShow] = useState(false)
    const toggleMenu =() => {
        setShow(!show);
      }
      const portoGambar = [
        "/react-my-project/img/biodata.png",
        "/react-my-project/img/login.png",
        "/react-my-project/img/resep.png",
      ]
  return (
    <div>
      <header className="px-8 md:px-20 py-6 bg-sky-100 bg-opacity-70 backdrop-blur fixed w-full z-50">
        <nav className="flex justify-between items-center">
          <div className="text-4xl font-teko hover:text-sky-700 select-none">
            WEBNIA
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-12">
              <li>
                <a
                  className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium"
                  href="#portofolio"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="py-2 px-6 text-slate-800 border-2 rounded-md border-slate-400 hover:bg-slate-400 hover:font-medium"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <button onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                viewBox="0 0 448 512"
                className={show ? "hidden" : "" }
              >
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={20}
                width={20}
                viewBox="0 0 384 512"
                className={show ? "" : "hidden" }
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>
        </nav>
        <div className={"absolute right-16 " + (show ? "" : "hidden")}>
          <ul className="rounded-lg bg-white">
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#home">Home</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#portofolio">Portofolio</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#skills">Skills</a>
            </li>
            <li className="py-4 px-6 hover:bg-slate-200">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <section className="pt-20 pb-12" id="home">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center space-y-4 px-6 md:px-20">
            <p className="text-xl">Hi, I'm</p>
            <h1 className="text-3xl md:text-5xl font-bold">
              Nia
              <span className="text-sky-500 block"> Anzariani</span>
            </h1>
            <p className="text-xl">
              I'm a <span className="text-sky-500">Frontend Developer</span>{" "}
              with 2 years of experience.
            </p>
            <div className="flex items-center text-gray-500 mb-4 gap-4 ">
              <a
                href="http://facebook.com/niaanzariani"
                className="w-8 h-6 hover:text-blue-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="fill-current w-full h-full"
                >
                  <path
                    d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 
          376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 
          39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 
          0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com/niaanzariani"
                className="w-6 h-6 hover:text-[#a21caf]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="fill-current w-full h-full"
                >
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 
          339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 
          74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 
          0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 
          27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 
          0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 
          9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 
          93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 
          388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 
          2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
          9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 
          9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>
              <a
                href="https://twitter.com/nia_anzar"
                className="w-6 h-6 hover:text-[#09090b]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-full h-full"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 
          318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
          48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
                  />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                className="w-6 h-6 hover:text-[#09090b]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-full h-full"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 
          188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 
          122.2 0 0 0 381 
          102.4a121.4 121.4 0 0 0 67 20.1z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-12 -order-1 md:order-1 md:col-span-6 p-20 md:p-28">
            <div className="rounded-full border-8 hover:scale-110 overflow-hidden w-fit">
              <img src="/react-my-project/img/foto1.jpg" alt="Nia" />
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 md:p-20 bg-slate-700" id="portofolio">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold font-teko">
            Portofolio
          </h2>
          <div className="w-full h-1 bg-sky-500 my-4" />
        </div>
        <div className="grid grid-cols-12 gap-6">
          <PortoCard gambar = { portoGambar[0]} title="Web Design" description="random text disini"/>
          <PortoCard gambar = { portoGambar[1]} title="Web Design" description="random text disini"/>
          <PortoCard gambar = { portoGambar[2]} title="Web Design" description="random text disini"/>
        </div>
      </section>
      <section className="p-12 md:p-20" id="skills">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold font-teko">
            My Skills
          </h2>
          <div className="w-1/12 h-2 bg-green-500 my-4" />
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div className="flex justify-center pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className="fill-orange-500 w-20 h-20"
              >
                <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-xl font-semibold">HTML 5</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div className="flex justify-center pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[black-500 ]w-20 h-20"
                viewBox="0 0 640 512"
              >
                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-xl font-semibold">CODE</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div className="flex justify-center pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#5b21b6] w-20 h-20"
                viewBox="0 0 384 512"
              >
                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM153 289l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L71 337c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM265 255l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-xl font-semibold">FILE CODE</h1>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-3 bg-white rounded-lg overflow-hidden border-2 border-black hover-card">
            <div className="flex justify-center pt-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-blue-500 w-20 h-20"
                viewBox="0 0 384 512"
              >
                <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h1 className="text-xl font-semibold">CSS 3 Alt</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="p-12 md:p-20 bg-slate-700" id="contact">
        <div className="flex flex-col justify-center items-center">
          <div className="text-white text-center pb-10">
            <h1 className="text-3xl font-bold">Contact Me</h1>
          </div>
          <div className="rounded-2xl border-[3px] border-white overflow-hidden hover:scale-105">
            <a
              href="http://wa.me/6281256266075"
              target="_blank"
              className="flex items-center gap-6 text-2xl font-semibold px-6 py-3 text-white 
      bg-[#11B517] hover:bg-[#1a901e]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={60}
                width={60}
                viewBox="0 0 448 512"
                className="fill-current"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <p className="hidden sm:block">Contact Me on Whatsapp</p>
            </a>
          </div>
        </div>
      </section>
      <footer className="p-4 md:p-8 bg-slate-900">
        <div className="flex items-center justify-center text-white mb-4 gap-4 ">
          <a
            href="http://facebook.com/niaanzariani"
            className="w-6 h-6 hover:text-blue-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="fill-current w-full h-full"
            >
              <path
                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 
      376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 
      39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 
      0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com/niaanzariani"
            className="w-6 h-6 hover:text-[#a21caf]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="fill-current w-full h-full"
            >
              <path
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 
      339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 
      74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 
      0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 
      27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 
      0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 
      9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 
      93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 
      388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 
      2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
      9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 
      9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
          <a
            href="https://twitter.com/nia_anzar"
            className="w-6 h-6 hover:text-[#09090b]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-full h-full"
              viewBox="0 0 512 512"
            >
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 
      318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 
      48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
          </a>
          <a href="https://tiktok.com" className="w-6 h-6 hover:text-[#09090b]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current w-full h-full"
              viewBox="0 0 448 512"
            >
              <path
                d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 
      188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 
      122.2 0 0 0 381 
      102.4a121.4 121.4 0 0 0 67 20.1z"
              />
            </svg>
          </a>
        </div>
        <p className="text-center text-white">
          Copyright © 2023 - All right reserved <br />
          Made by Nia Anzariani
        </p>
      </footer>
      <a
        href="#home"
        className="fixed bottom-10 right-10 p-4 rounded-full bg-white bg-opacity-70 backdrop-blur"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={24}
          width={24}
          viewBox="0 0 512 512"
        >
          <path
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 
  12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 
  12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
          />
        </svg>
      </a>
    </div>
  );
}
