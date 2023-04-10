import React from 'react';


const Blog = () => {
    return (
        <div>
            {/* <h1>Blog here....</h1> */}
            <button
  data-ripple-light="true"
  data-popover-target="popover"
  class="middle none center rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
>
  Show Popover
</button>
<div
  data-popover="popover"
  class="absolute w-max whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-white p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
>
  This is a very beautiful popover, show some love.
</div>
        </div>
    );
};

export default Blog;