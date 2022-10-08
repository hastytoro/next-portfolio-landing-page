import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Luigi's Portfolio</title>
        <meta name="description" content="My portfolio webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-bold font-burtons">hastytoro</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div>
            <h2>Luigi Lupini</h2>
            <h3>Developer and designer.</h3>
            <p>
              Freelancer providing services fro programing and design content
              need. Contact me down below and lets get cracking!
              {/* /-> 22:00 <-/ */}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
