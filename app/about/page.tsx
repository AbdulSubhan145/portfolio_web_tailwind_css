import Image from "next/image";

export default function About(){
    return(

  <div className="container mx-auto flex flex-col gap-16 p-8">

  {/* Title Section */}
  <h1 className="flex justify-center text-4xl text-yellow-500 font-bold">
    About Page
  </h1>

  {/* Image and Text Section */}
  <div className="bg-yellow-500 rounded-3xl flex flex-col md:flex-row gap-10 md:gap-40 items-center">

    {/* Image Section */}
    <Image
      alt="hero"
      src="/web-anima.webp" // Add your image path here
      height={200}
      width={200}
      className="ml-5 w-72 h-72 md:w-72 md:h-72 object-cover"  // Combine all the classes into one `className`
    />


    {/* Text Section */}
    <div className="text-black mt-1 flex flex-col gap-3 px-4 md:px-0">
      <h1 className="text-2xl font-bold">About me</h1>
      <p>
        Hello! im a passionate and dedicated Web Developer with a deep
        enthusiasm for building clean, responsive, and user-friendly websites.
        Over the years, I have honed my skills in HTML, CSS, JavaScript, and
        TypeScript, and im constantly evolving to stay updated with the latest
        technologies and best practices.
      </p>
    </div>
  </div>
  




    {/* skills section */}
   

    <div>
        <h1 className="flex justify-center text-4xl text-yellow-500 font-bold mt-2">My Skills</h1>
        <ul className="text-yellow-500 mt-4 text-2xl flex flex-col gap-4">
          <li>HTML</li><div className="w-[80%] h-4 bg-green-600 rounded-2xl "></div>
          <li>CSS</li><div className="w-[70%] h-4 bg-green-400 rounded-2xl "></div>
          <li>Jawascript</li><div className="w-[50%] h-4 bg-red-500 rounded-2xl "></div>
          <li>Typscript</li><div className="w-[50%] h-4 bg-red-500 rounded-2xl "></div>
          <li>React</li><div className="w-[40%] h-4 bg-red-500 rounded-2xl "></div>
          <li>Next.js</li><div className="w-[90%] h-4 bg-green-700 rounded-2xl "></div>
        </ul>
    </div>


  </div>
  
        
    );
}