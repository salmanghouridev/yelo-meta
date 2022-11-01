import React from 'react'

const Banner = () => {
  return (
   <>
   <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 mt-6">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center sm:text-left">
      <h2 className="text-[5rem] font-extrabold text-white p-2 bg-[#00220E] ">
       Demo Check
      </h2>
      <h1 className="text-2xl font-extrabold text-black  border-8 border-black p-4 bg-white ">
       Demo Check
      </h1>
      
      <p className="hidden text-gray-500 md:mt-4 md:block">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
        tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
        fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
        duis.
      </p>
      <div className="mt-4 md:mt-8">
        <a href="#" className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400">
          Get Started Today
        </a>
      </div>
    </div>
  </div>
<div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
  <div className="transform scale-110 -rotate-6">
    <img src="/abb.avif" alt="" loading="lazy" />
  </div>
  <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
    <img src="/abb.avif" alt="" loading="lazy" />
  </div>
  <div className="transform scale-150 translate-y-11">
    <img src="/abb.avif" alt="" loading="lazy" />
  </div>
  <div className="transform translate-y-24">
    <img src="/abb.avif" alt="" loading="lazy" />
  </div>
  <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
    <img src="/abb.avif" alt="" loading="lazy" />
  </div>
</div>

</section>

   </>
  )
}

export default Banner