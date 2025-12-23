export default function ClientINClude() {
  const images = [
    {
      id: 2,
      path: '/Revolut.png',
    },
    {
      id: 1,
      path: '/NorthOne.png',
    },
    {
      id: 3,
      path: '/Checkout.com.png',
    },
  ];

  return (
    <div className="container mt-10">
      <h4 className="text-center text-sm text-white">Clients Includes</h4>

      <div className="relative mt-20 overflow-hidden bg-linear-to-r from-white/0 via-white/55 to-white/0 py-16">
        <div className="absolute top-1/2 left-1/2 flex h-[99%] w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-10 bg-black md:gap-20 lg:gap-52">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.path}
              alt={`Client ${image.id}`}
              className="aspect-[14/2] w-[100px] md:aspect-auto md:w-[150x] lg:w-fit"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
