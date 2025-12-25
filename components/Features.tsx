export default function Features() {
  return (
    <div className="container mt-16 md:mt-36">
      <h3 className="text-center text-sm text-white">Features</h3>
      <div className="mt-16 grid grid-cols-1 justify-center gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="relative col-span-5 h-full w-full rounded-lg bg-gray-950 p-[1px] lg:col-span-2 lg:h-[450px]">
          <div className="bg-opacity-5 h-full w-full rounded-lg bg-radial-[at_25%_25%]
           from-[#363636] to-[#1A1A1A]/20 to-75% backdrop-blur-lg md:py-24 lg:px-11 py-10">
            <div className="  px-10">
              <h4 className="text-lg font-bold md:text-6xl">Powerful Features</h4>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex size-16 items-center justify-center rounded-full border-1 bg-black md:size-24">
                  <img src="/cash.png" alt="cash" className="object-contain" />
                </div>
                <div className="flex size-16 items-center justify-center rounded-full border-1 bg-black md:size-24">
                  <img src="/cash.png" alt="cash" className="object-contain" />
                </div>
                <div className="flex size-16 items-center justify-center rounded-full border-1 bg-black md:size-24">
                  <img src="/cash.png" alt="cash" className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-span-5 h-full w-full overflow-hidden rounded-lg bg-gray-950 p-[1px] lg:col-span-3 lg:h-[450px]">
          <div className="bg-opacity-5 flex h-full flex-col flex-wrap items-center justify-around rounded-lg bg-radial-[at_25%_25%] from-[#363636] to-[#1A1A1A]/20 to-75% backdrop-blur-lg md:flex-col lg:flex-row">
            <div className="max-w-96 shrink-0 space-y-4 px-10 py-10 md:py-24 lg:space-y-4 lg:pl-11">
              <h4 className="text-lg font-bold md:text-3xl">Seamless onboarding</h4>
              <p className="text-sm text-white/50 md:text-lg">
                Get started using a completely digital on-boarding process, and activate your
                OneCard in less than 5 minutes.
              </p>
            </div>
            <img src="/phone-app.png" alt="Phone App" className="aspect-square" />
          </div>
        </div>
        <div className="relative col-span-5 h-full w-full overflow-hidden rounded-lg bg-gray-950 p-[1px] lg:h-[450px]">
          <div className="bg-opacity-5 flex h-full flex-col items-center justify-between rounded-lg bg-radial-[at_25%_25%] from-[#363636] to-[#1A1A1A]/20 to-75% backdrop-blur-lg lg:flex-row">
            <div className="max-w-96 shrink-0 space-y-4 py-10 pl-11 md:space-y-9 md:py-24">
              <h4 className="text-lg font-bold md:text-3xl">Seamless onboarding</h4>
              <p className="text-sm text-white/50 md:w-3/4 md:text-lg">
                Get started using a completely digital on-boarding process, and activate your
                OneCard in less than 5 minutes.
              </p>
            </div>
            <img src="/cards.png" alt="Bank" className="hidden object-cover md:block" />
            <img
              src=" /mobild-screen-cards.png"
              alt="Bank"
              className="block object-cover md:hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// bg-radial-[at_5%_5%] from-white to-zinc-900 to-75%
