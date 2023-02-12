import Container from "@components/container";
import Layout from "@components/layout";
import { authorsquery, configQuery } from "@lib/groq";
import { getClient } from "@lib/sanity";
import GetImage from "@utils/getImage";
import Image from "next/image";
import Link from "next/link";
import photo from "../public/img/photo.jpg";
import Work from "../components/Hero.js"
import Nav from "../components/navbar.js"


// const myloader = ({ src, width, quality }) => {
//   return `${src}?w=${width}&q=${quality || 75}`
// }
export default function About() {
  return (
   <>
   <Nav />
   < Work />
   </>
  );
}
