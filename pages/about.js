import Container from "@components/container";
import Layout from "@components/layout";
import { authorsquery, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import GetImage from "@utils/getImage";
import Image from "next/image";
import Link from "next/link";
import photo from "../public/img/photo.jpg";


const myloader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}
export default function About({ authors, siteconfig }) {
  return (
    <Layout {...siteconfig}>
      <Container>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white  ">
          About
        </h1>
        <div className="mx-auto prose text-center dark:prose-invert mt-14">
        <Image className="w-24 h-24 rounded-full mx-auto" 
        loader={myloader}
        src={photo} alt="" width="200" height="200"/>
        </div>

        <div className="text-center">
          {/* <p className="text-lg">I’m Collins , C#(ASP.NET), node js Developer and designer adept at contributing to highly collaborative work environment, finding solutions and determining customer satisfaction..</p> */}

          <p className="text-lg"></p>
        </div>

        <figure className="mdbg-slate-100 rounded-xl p-8">
  {/* <img className="w-24 h-24 rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/> */}
  <div className="pt-6 text-center space-y-4">
    {/* <blockquote> */}
    <div className="mx-auto prose text-center dark:prose-invert mt-14">
          <p>
          With a strong background in C# (ASP.NET) and node.js, I am able to bring my expertise and technical skills to any project. I am highly collaborative and excels in working with cross-functional teams to ensure that all projects are completed on time and to the highest standard.
          I  Designed and developed web applications across multiple APIs, third-party integrations and databases.
          </p>
          <p>
          I am also a multidisciplinary designer with a curious mind, I enjoy to meet new people and understand how they are solving problems as a chance to improve myself as a professional and put things in practice when I’m creating my solutions.
          </p>
          <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <Link href="/contact">Get in touch</Link>
          </button>
          
        </div>
    {/* </blockquote> */}
    <figcaption className="font-medium">
      <div className="text-sky-500 pt-10 dark:text-sky-400">
      Collins Tonui
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Software Engineer, Kenya
      </div>
    </figcaption>
  </div>
</figure>

        {/* <div className="grid grid-cols-2 gap-5 mt-6 mb-16 md:mt-16 md:mb-32 md:gap-16">
          {authors.slice(0, 3).map(author => {
            const { width, height, ...imgprops } = GetImage(
              author?.image
            );
            return (
              <div
                key={author._id}
                className="relative overflow-hidden rounded-md aspect-square odd:translate-y-10 odd:md:translate-y-16">
                <Image
                  {...imgprops}
                  alt={author.name || " "}
                  layout="fill"
                  objectFit="cover"
                  sizes="(max-width: 320px) 100vw, 320px"
                />
              </div>
            );
          })}
        </div> */}

        
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  //console.log(params);
  const authors = await getClient(preview).fetch(authorsquery);
  const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      authors: authors,
      siteconfig: { ...config },
      preview
    },
    revalidate: 100
  };
}
