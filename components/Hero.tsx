import { GridScan } from './GridScan';

export default function Hero() {
  return (
    <div className="relative mt-20">
      <div style={{ width: '100%' }} className="relative h-[600px] md:h-[900px] rounded-lg overflow-hidden">
        <GridScan
          sensitivity={2}
          lineThickness={1}
          scanGlow={2}
          linesColor="#392e4e"
          gridScale={0.5}
          scanColor="#ff9ffc"
          lineJitter={1}
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.065}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-center text-5xl font-bold">The first Employee Consumer Card</h1>
          <p className="mt-5 text-center font-medium">
            Higher perk adoption, instant expense management, simple benefits access and much more
          </p>
        </div>
      </div>
      <div className="relative mx-auto hidden aspect-[8/5] max-w-[57%] items-center justify-center md:flex">
        <img src="/hero-group.png" alt="hero-group" className="object-cover" />
      </div>
      <img
        src="/card-figure-group.png"
        alt="group"
        className="mx-auto block aspect-[8/5] aspect-square w-full max-w-[100%] object-cover md:hidden"
      />
    </div>
  );
}
