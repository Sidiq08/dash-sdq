// Initialization for ES Users
import {
    Sidenav,
    initTE,
  } from "tw-elements";
  
  initTE({ Sidenav });

  

  export function Sidebar(){
    return (
        <>
        {/* <!-- Sidenav --> */}
<nav
  id="sidenav-6"
  class="fixed left-0 top-0 z-[1035] h-screen w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
  data-te-sidenav-init
  data-te-sidenav-hidden="false"
  data-te-sidenav-accordion="true">
    <div className="m-5 mb-10">
    <button className="bg-white p-0"  data-te-sidenav-toggle-ref data-te-target="#sidenav-6" aria-controls="#sidenav-6"aria-haspopup="true">
  <img src="src/assets/chevron-left.svg"/>
</button>
    <img src="src/assets/logo-sidiq.svg"/>
    </div>
  <ul class="relative m-4 list-none px-[0.2rem]" data-te-sidenav-menu-ref>
  <li class="relative">
      <a
        class="flex h-12 my-4 cursor-pointer bg-white drop-shadow-md items-center truncate rounded-[12px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-neutral-500 hover:outline-none focus:bg-slate-50 focus:text-neutral-500 focus:outline-none active:bg-slate-50 active:text-neutral-900 active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref>
        <span
          class="mr-4 h-4 w-4 text-gray-400 dark:text-gray-300 ">
          <img src="src/assets/Home.svg"/>
        </span>
        <span>Dashboard</span>
      </a>
    </li>
    <li class="relative">
      <a
        class="flex h-12 my-4 cursor-pointer bg-white drop-shadow-md items-center truncate rounded-[12px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-neutral-500 hover:outline-none focus:bg-slate-50 focus:text-neutral-500 focus:outline-none active:bg-slate-50 active:text-neutral-900 active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref>
        <span
          class="mr-4 h-4 w-4 text-gray-400 dark:text-gray-300 ">
          <img src="src/assets/Contract.svg"/>
        </span>
        <span>Tentang Saya</span>
      </a>
    </li>
    <li class="relative">
      <a
        class="flex h-12 my-4 cursor-pointer bg-white drop-shadow-md items-center truncate rounded-[12px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-neutral-500 hover:outline-none focus:bg-slate-50 focus:text-neutral-500 focus:outline-none active:bg-slate-50 active:text-neutral-900 active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref>
        <span
          class="mr-4 h-4 w-4 text-gray-400 dark:text-gray-300 ">
          <img src="src/assets/Customer.svg"/>
        </span>
        <span>Blog</span>
      </a>
    </li>
    <li class="relative">
      <a
        class="flex h-12 my-4 cursor-pointer bg-white drop-shadow-md items-center truncate rounded-[12px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-neutral-500 hover:outline-none focus:bg-slate-50 focus:text-neutral-500 focus:outline-none active:bg-slate-50 active:text-neutral-900 active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref>
        <span
          class="mr-4 h-4 w-4 text-gray-400 dark:text-gray-300 ">
          <img src="src/assets/Search.svg"/>
        </span>
        <span>Portofolio</span>
      </a>
    </li>
  <li class="relative">
      <a
        class="flex h-12 my-4 cursor-pointer bg-white drop-shadow-md items-center truncate rounded-[12px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-neutral-500 hover:outline-none focus:bg-slate-50 focus:text-neutral-500 focus:outline-none active:bg-slate-50 active:text-neutral-900 active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
        data-te-sidenav-link-ref>
        <span
          class="mr-4 h-4 w-4 text-gray-400 dark:text-gray-300 ">
          <img src="src/assets/Content.svg"/>
        </span>
        <span>Pengaturan</span>
      </a>
    </li>
  </ul>
  
</nav>
{/* <!-- Sidenav --> */}

{/* <!-- Toggler --> */}

{/* <button
  className="fixed m-5 inline-block rounded bg-white px-3 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-neutral-300 hover:shadow-lg focus:bg-neutral-600  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-900  active:shadow-lg"
  data-te-sidenav-toggle-ref
  data-te-target="#sidenav-6"
  aria-controls="#sidenav-6"
  aria-haspopup="true">
<span className="text-neutral-900 flex items-center">
  <img src="src/assets/chevron-left.svg"/>   
  Dashboard
    </span>
</button> */}
{/* <!-- Toggler --> */}
        </>
    )
  }