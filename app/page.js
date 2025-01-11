import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col gap-4 items-center text-pink-500 h-[44vh] ">
        <div className="font-bold flex gap-2 text-3xl justify-center items-center">Buy me a Chai <span><img src="/chaigif.gif" width={70} alt="" /></span></div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis it ex totam!</p>
        <div>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-75"></div>

      <div className="text-pink-500 container mx-auto py-10">
        <h1 className="text-lg font-bold text-center mb-10">Your fans can buy you a chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-1 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full  items-center justify-center w-24 h-24 overflow-hidden text-black" width={78} src="/man.webp" alt="" />
            <p className="font-bold space-y-3">Fund Yourself</p>
            <p className="text-center">Your fans are available for you to help</p>
          </div>
          <div className="item space-y-1 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full  items-center justify-center w-24 h-24 overflow-hidden text-black" width={78} src="/coin.gif" alt="" />
            <p className="font-bold space-y-3">Fund Yourself</p>
            <p className="text-center">Your fans are available for you to help</p>
          </div>
          <div className="item space-y-1 flex flex-col items-center justify-center">
            <button><img className="bg-slate-400 rounded-full  items-center justify-center w-24 h-24 overflow-hidden text-black" width={78} src="/comm.gif" alt="" /></button>
            <p className="font-bold space-y-3">Your fans want to help</p>
            <p className="text-center">Your fans are available for you to help</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-75"></div>

      <div className="text-pink-500 container mx-auto py-10 flex flex-col items-center justify-center">
        <h2 className="text-lg font-bold text-center mb-10">Learn About Us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ti3s10o3prs?si=srDEfZ4wn2LIU9kH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      </div>
    </>
  );
}
