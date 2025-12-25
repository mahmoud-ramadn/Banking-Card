export default function OurUniqueness() {
  return (
    <div className="mt-20 space-y-20 md:mt-52">
      <h4 className="text-center text-sm text-white">Our Uniqueness</h4>
      <h3 className="mx-auto max-w-[850px] text-center text-sm leading-24 text-white md:text-[100px]">
        Honest Pricing, No Unseen Charges.{' '}
      </h3>
      <div
        className="relative  md:min-h-dvw  min-h-screen   overflow-hidden rounded-3xl bg-cover bg-center md:rounded-3xl"
        style={{ backgroundImage: "url('/bg-uniquness.png')" }}
      >
        <div className="absolute top-0 left-0 h-full w-full bg-radial-[at_-50%_-50%] from-black/0 to-black/95 to-68% shadow-2xl shadow-gray-800 md:bg-radial-[at_50%_17%]">
          <div className="relative container   flex h-full w-full md:items-center justify-center   items-center ">
            <div   className="relative flex items-center justify-center px-3">
            <img src="/Card.png" alt="card" className="  md:aspect-auto   md:w-fit  md:max-w-4xl max-w-[230px]   " />

            <div className=" md:size-72  size-26 absolute
              md:bottom-[127px]  -top-10  -left-1/4  
               rounded-4xl  border border-1 border-gray-300 border-white/20 
                bg-white/15 p-6 p-10 shadow-2xl backdrop-blur-lg"></div> 

            <div className=" md:size-72  size-24 absolute
              md:bottom-[127px]  bottom-8 md:-left-3/4  -left-[86px]
               rounded-4xl  border border-1 border-gray-300 border-white/20 
                bg-white/15 p-6 p-10 shadow-2xl backdrop-blur-lg"></div> 
            <div className=" md:size-72  size-24 absolute
              md:bottom-[300px]  bottom-40 md:-right-3/4  -right-[86px]
               rounded-4xl  border border-1 border-gray-300 border-white/20 
                bg-white/15 p-6 p-10 shadow-2xl backdrop-blur-lg"></div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 104% 50% 50%
