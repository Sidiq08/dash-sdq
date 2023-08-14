// Initialization for ES Users
import React from "react";
import { Input, Ripple, initTE } from "tw-elements";
import { Sidebar } from "../components/Sidebar";

initTE({ Input, Ripple });

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <div className="pl-[240px] w-screen h-screen bg-white text-black">
        <nav className=" bg-white shadow-md">
          <ol class="list-reset flex items-center justify-between px-8 py-4">
            <li class="text-neutral-900 dark:text-neutral-900 flex items-center gap-2">
              <img src="src/assets/Home.svg" />
              Home
            </li>
            <li className="flex items-center gap-4">
              <div className="nama-akun">
                <h3 className="text-neutral-900 text-xl font-bold ">
                  Muhammad Sidiq
                </h3>
                <a href="/">
                  <p className="text-red-600 text-sm">Logout</p>
                </a>
              </div>
              <img
                src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                class="w-16 rounded-full"
                alt="Avatar"
              />
            </li>
          </ol>
        </nav>
        <div className="w-full py-8 px-12">
          <div className="text-[24px] font-bold mb-8">
            Selamat Datang, Sidiq
          </div>
          <div className="bar flex gap-8 mb-8">
            <div className="w-[50%] text-center pt-8 pb-4 bg-white shadow-md border-b-4 border-black">
              <h3 className="text-black text-[24px] font-bold ">5</h3>
              <p className="text-black text-[16px]">Blog</p>
            </div>
            <div className="w-[50%] text-center pt-8 pb-4 bg-white shadow-md border-b-4 border-black">
              <h3 className="text-black text-[24px] font-bold ">15</h3>
              <p className="text-black text-[16px]">Portofolio</p>
            </div>
          </div>
          <div className="tabel flex gap-8 ">
            <div className="w-[50%] pt-8 pb-4 bg-white ">
              <h3 className="text-black text-[24px]">Blog</h3>
              <p className="text-black text-[16px] font-bold ">
                Seluruh Blog Kamu
              </p>
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" class="px-6 py-4">
                              #
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Tanggal
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Judul Blog
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              1
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              1 September 2023
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Otto</td>
                          </tr>
                          <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              2
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              1 September 2023
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              Thornton
                            </td>
                          </tr>
                          <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              3
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              1 September 2023
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Wild</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] pt-8 pb-4 bg-white">
              <h3 className="text-black text-[24px]">Portofolio</h3>
              <p className="text-black text-[16px] font-bold ">
                Seluruh Portofolio Kamu
              </p>
              <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                      <table class="min-w-full text-left text-sm font-light">
                        <thead class="border-b font-medium dark:border-neutral-500">
                          <tr>
                            <th scope="col" class="px-6 py-4">
                              #
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Tanggal
                            </th>
                            <th scope="col" class="px-6 py-4">
                              Judul Portofolio
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              1
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              1 September 2023
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Otto</td>
                          </tr>
                          <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              2
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              1 September 2023
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              Thornton
                            </td>
                          </tr>
                          <tr class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              3
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              1 September 2023
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">Wild</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
