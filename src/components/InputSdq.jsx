import React from "react";
import { Input, Ripple, initTE } from "tw-elements";

initTE({ Input, Ripple });

export function InputSdq() {
  return (
    <>
      <div class="relative mb-6" data-te-input-wrapper-init>
        <input
          type="asdas"
          class="peer block min-h-[auto] w-full rounded border-[0.5px] text-neutral-900 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-100 dark:placeholder:text-neutral-100 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="exampleFormControlInput22"
          placeholder="dasasd"
        />
        <label
          ßsfor="exampleFormControlInput22"
          class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-neutral-700 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-700"
        >
          asdsa
        </label>
      </div>
    </>
  );
}
