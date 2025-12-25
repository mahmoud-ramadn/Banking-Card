import SwiperComponent from "./SwiperComponet";

export default function SavingInteresting() {
  return (
    <div className="bg-[#262626]">
      <div className="mx-auto max-w-2/5 space-y-6 pt-5">
        <h1 className="text-center md:text-5xl text-2xl font-bold">Are Your Saving is Interesting</h1>
        <p className="text-center  lg:text-lg font-medium">
          Let your money make more money with up to 4.75% AER/Gross (variable) interest on savings.
          Paid every single day.
        </p>
      </div>
      <div className=" mt-10">
<SwiperComponent/>
      </div>

    </div>
  );
}
