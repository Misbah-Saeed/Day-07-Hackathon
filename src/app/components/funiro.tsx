import Image from 'next/image';

export default function Funiro() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">
        Share your setup with
      </h2>
      <h1 className="text-center text-4xl font-bold mb-8">
        #FuniroFurniture
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="col-span-1">
          <Image
            src="/images/A 1.png"
            alt="Shelf"
            width={200}
            height={300}
            className="ml-[-70px] h-[200px] w-[250px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/A 2.png"
            alt="Desk"
            width={200}
            height={300}
            className="mt-[50px] w-[500px] ml-[-120px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/A 3.png"
            alt="Brick Wall"
            width={200}
            height={300}
            className="w-[500px] h-[300px] ml-[-120px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/A 4.png"
            alt="Chair"
            width={200}
            height={300}
            className=" ml-[900px] w-[250px] mr-[20px] mt-[-500px] "
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/A 5.png"
            alt="Tables"
            width={200}
            height={300}
            className="mt-[-250px] ml-[-350px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/A 6.png"
            alt="Bed"
            width={200}
            height={300}
            className="w-[400px] ml-[-450px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/A 7.png"
            alt="Couch"
            width={200}
            height={300}
            className=" ml-[600px] w-[250px] mr-[20px] mt-[-400px]"
            // className=" ml-[40px] w-[250px] mr-[20px] mt-[-150px]"
          />
        </div>
        <div className="col-span-1">
          <Image
            src="/images/A8.png"
            alt="Lamp"
            width={200}
            height={300}
            className="w-[250px] mt-[-300px] mr-[90px]  ml-[550px]"
          />
        </div>
      </div>
    </div>
  );
}
