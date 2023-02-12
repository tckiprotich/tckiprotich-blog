// Works Data
import works from "./Data/Data.js";
import Image from "next/image.js";
import Link from "next/link";
// import layout from "@components/layout";
// React Icons
import { HiArrowNarrowRight } from "@heroicons/react/outline";



const myloader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
// 
const Works = ({siteconfig}) => {
    return (
      <layout>
        <div className="max-w-6xl m-auto pt-20 pt-8 px-2 sm:pt-5" id="projects">
            {/* <h1 className="text-4xl text-teal-500 font-bold sm:text-5xl pb-10">Featured Works</h1> */}
            <h1 className="mb-10 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Check out my works
        </h1>
            <div className="grid py-10 grid-cols-1 gap-0 lg:grid-cols-3 sm:grid-cols-2 sm:gap-4">
                {
                    works ?
                        works.map((work, index) =>
                            <div key={index} title={`${work.work_title} - ${work.genre}`} className="bg-zinc-800 rounded-lg p-4 max-w-4xl m-auto mb-4 w-full grid grid-cols-1 gap-0 ease-in-out duration-150 hover:bg-cyan-800 sm:mb-0">
                                {/* <div className="w-45 felx justify-center items-center">
                                    <Image
                                        className="rounded-lg w-100"
                                        loader={myloader}
                                        src={work.image_url}
                                        width={500}
                                        height={500}
                                        alt="Work-Image" />
                                </div> */}

                                <div className="flex flex-col justify-center items-start w-55 pb-0">
                                    <h2 className="text-2xl text-white font-bold my-5 mb-2">{work.work_title}</h2>
                                    <b className="text-teal-500 mb-2">⎯⎯ {work.genre}</b>
                                    <p className="text-gray-300 text-sm leading-6 m-0">{work.description}</p>
                                    <button className="py-2 px-4 bg-white mt-4 text-black ease-in-out duration-150 border-2 border-white rounded-md hover:bg-gray-900 hover:border-gray-900 hover:text-white" style={{ width: "100%" }} title="Visit website">
                                        <a href={work.link} className="flex justify-between items-center gap-1 font-semibold text-md p-0 m-0">
                                            <span>Visit website  ↗</span>

                                          

                                        </a>
                                    </button>
                                </div>
                            </div>
                        )
                        : null
                }
            </div>
            <Link href="/blog">
            <button className=" mx-auto  py-15 flex justify-between items-center gap-1  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            
               <span className="px-5">View Blogs  ↗</span> 
                
            </button>
            </Link>
        </div>
        </ layout>
    );
}

export async function getStaticProps({ params, preview = false }) {
  const config = await getClient(preview).fetch(configQuery);

  return {
    props: {
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}

export default Works;