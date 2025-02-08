import Image from 'next/image';

export default function Browse() {
  return (
    <div className="container  h-[500px] mt-[-430px] ml-[100px] mr-[500px] ">
      <h1 className="text-center text-3xl font-bold mb-8">Browse The Range</h1>
      <p className="text-center text-gray-600 mb-10 mt-[-15px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-40">
        <div className="flex flex-col items-center">
          <Image
            src="/images/img1.png"
            alt="Dining Room"
            width={300}
            height={200}
            className="ml-[180px]"
          />
          <h2 className="text-lg font-semibold mt-4">Dining</h2>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/img2.png"
            alt="Living Room"
            width={300}
            height={200}
            className="gap-5"
          />
          <h2 className="text-lg font-semibold mt-4">Living</h2>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/images/img3.png"
            alt="Bedroom"
            width={300}
            height={200}
            className="mr-[180px]"
          />
          <h2 className="text-lg font-semibold mt-4">Bedroom</h2>
        </div>
      </div>
    </div>
  );
}
