import Image from "next/image";

export default function Home() {
  return (
    //HERO SEACTION
    <section className="body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded-3xl "
        alt="hero"
        src="/my pic.jpg"
        width={290}
        height={290}
        
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">
        Hey
        <br className="hidden lg:inline-block" />
        im Abdul Subhan
      </h1>
      <p className="mb-8 leading-relaxed text-yellow-200">
      As a passionate and detail-oriented web developer, I specialize in crafting visually appealing and highly functional websites. With extensive experience in HTML, CSS, JavaScript, and TypeScript, I excel at creating responsive, user-friendly, and performance-driven web applications. My expertise allows me to transform complex design concepts into seamless, interactive web experiences. Whether working on front-end development, optimizing code for scalability, or integrating modern technologies, I am committed to delivering clean, efficient code that ensures a great user experience across all devices.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-yellow-500 border-4 border-solid border-yellow-500 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          About me
        </button>
        <button className="ml-4 inline-flex text-black bg-gray-100 border-4 border-solid border-yellow-500  py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg">
         Contact
        </button>
      </div>
    </div>
  </div>
</section>





    );
}
