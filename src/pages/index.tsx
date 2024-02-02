"use client";
import exportToPdf from "@/utils/export";
import { Assistant } from "next/font/google";
import {
  PiPhone,
  PiEnvelopeSimple,
  PiMapPin,
  PiLinkedinLogo,
  PiGithubLogo,
  PiCalendarBlank,
  PiMagnifyingGlass,
  PiBookOpen,
  PiTimer,
  PiStackOverflowLogo,
  PiCircleFill,
  PiCircle,
} from "react-icons/pi";

import { usePDF } from "react-to-pdf";

export default function Home() {
  const { toPDF, targetRef } = usePDF({ filename: "Vala_Khosravi.pdf" });

  return (
    <main>
      <div className="main-background">
        <div className="fixed bottom-0 z-10 text-center left-0 right-0 pb-4">
          <button
            onClick={() => toPDF()}
            // onClick={() => {
            //   exportToPdf('main-page', 'exported-document');
            // }}
            className="bg-emerald-500 px-4 py-2 rounded-full border-2 border-emerald-300 text-white shadow-lg animate-bounce"
          >
            Download as PDF
          </button>
        </div>
        <div
          className="w-[1240px] h-[1752px] mx-auto bg-white shadow-lg"
          ref={targetRef}
          id="main-page"
        >
          <div className="bg-sky-50 border-l-[8px] border-sky-700 pl-[24px] pr-[32px] py-[32px]">
            <div className="text-sky-900 text-[42px] font-black tracking-wider">
              Vala Khosravi
            </div>
            <div className="text-sky-700 tracking-wider text-[24px] mb-4">
              Front-end Developer
            </div>
            <div className="text-sky-500 tracking-wider flex text-md">
              <a href="mailto:valakhosravi@outlook.com">
                <div className="flex items-center me-8">
                  <span>
                    <PiEnvelopeSimple />
                  </span>
                  <span className="ps-1">valakhosravi@outlook.com</span>
                </div>
              </a>
              <a href="tel:+989352535150">
                <div className="flex items-center me-8">
                  <span>
                    <PiPhone />
                  </span>
                  <span className="ps-1">+98 935 253 5150</span>
                </div>
              </a>
              <div className="flex items-center me-8">
                <span>
                  <PiMapPin />
                </span>
                <span className="ps-1">Tehran, Iran</span>
              </div>
              <a
                className="ps-1"
                href="https://www.linkedin.com/in/vala-khosravi/"
                target="_blank"
              >
                <div className="flex items-center me-8">
                  <span>
                    <PiLinkedinLogo />
                  </span>
                  <span className="ps-1">linkedin.com</span>
                </div>
              </a>
              <a
                href="https://github.com/valakhosravi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center me-8">
                  <span>
                    <PiGithubLogo />
                  </span>
                  <span className="ps-1">github.com</span>
                </div>
              </a>
              <a
                href="https://stackoverflow.com/users/7706936/vala-khosravi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center me-8">
                  <span>
                    <PiStackOverflowLogo />
                  </span>
                  <span className="ps-1">stackoverflow.com</span>
                </div>
              </a>
            </div>
          </div>
          <div className="flex p-[32px]">
            <div className="w-[60%]">
              <div className="mb-[24px]">
                <div className="text-gray-500 text-2xl border-b-2 pt-2 mb-4 tracking-tight pb-1">
                  SUMMARY
                </div>
                <div className="text-md text-justify">
                  Experienced front-end developer with over 4 years of expertise
                  in web development across diverse industries, specializing in
                  React. A task-driven professional with a proven track record
                  of delivering high-quality work on time and within budget.
                  Experienced in collaborating with international companies,
                  contributing to the success of cross-cultural projects. Eager
                  to take on leadership responsibilities and contribute to
                  large-scale front-end projects. Flexible and adaptable, with
                  the ability to work remotely or relocate as needed.
                </div>
              </div>
              <div className="mb-[24px]">
                <div className="text-gray-500 text-2xl border-b-2 pt-2 mb-4 tracking-tight pb-1">
                  EXPERIENCE
                </div>
                <div className="mb-3">
                  <div className="text-2xl">Front-end Developer</div>
                  <div className="font-bold text-lg text-sky-400 tracking-wide">
                    <a
                      href="https://www.emofid.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mofid Securities
                    </a>
                  </div>
                  <div className="flex items-center text-sm mb-2 text-gray-500">
                    <span className="flex items-center">
                      <span>
                        <PiCalendarBlank />
                      </span>
                      <span className="ms-1">Jun 2023 - Present</span>
                    </span>
                    <span className="flex items-center ms-4">
                      <span>
                        <PiMapPin />
                      </span>
                      <span className="ms-1">Tehran, Iran</span>
                    </span>
                  </div>
                  {/* <div className="text-md text-justify">
                    Demonstrates strong collaboration with both front-end and
                    back-end developers, ensuring efficient cross-functional
                    communication and a harmonious workflow.
                  </div> */}
                  <div className="ps-4">
                    <ul className="text-md text-justify list-disc">
                      <li>
                        Developed and maintains an internal npm package,
                        featuring an advanced date picker that significantly
                        enhances user experience.
                      </li>
                      <li>
                        Led a crucial system overhaul, resulting in a remarkable
                        60% speed improvement, fixing event loss issues, and
                        earning commendation for increased efficiency.
                      </li>
                      <li>
                        The successful refactoring effort received a
                        commendation for its significant impact on system
                        efficiency.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-2xl">Full-stack Developer</div>
                  <div className="font-bold text-lg text-sky-400 tracking-wide">
                    <a
                      href="http://spar.ir/?lang=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      SPAR Iran
                    </a>
                  </div>
                  <div className="flex items-center text-sm mb-2 text-gray-500">
                    <span className="flex items-center">
                      <span>
                        <PiCalendarBlank />
                      </span>
                      <span className="ms-1">Oct 2021 - May 2023</span>
                    </span>
                    <span className="flex items-center ms-4">
                      <span>
                        <PiMapPin />
                      </span>
                      <span className="ms-1">Tehran, Iran</span>
                    </span>
                  </div>
                  {/* <div className="text-md text-justify">
                    Developed a comprehensive sales platform from inception to
                    completion, handling both backend and frontend development.
                    Integrated Microsoft NAV web services for seamless
                    functionality.
                  </div> */}
                  <div className="ps-4">
                    <ul className="text-md text-justify list-disc">
                      <li>
                        Developed a comprehensive sales platform from inception
                        to completion, handling both backend and frontend
                        development. Integrated Microsoft NAV web services for
                        seamless functionality.
                      </li>
                      <li>
                        Elevated to Front-end Lead Developer, successfully
                        managing and guiding two junior developers in front-end
                        development projects.
                      </li>
                      <li>
                        Steered the transformation of a project from Windows
                        Forms to React and Electron, orchestrating a
                        comprehensive rewrite that not only modernized the stack
                        but also brought significant UI improvements, resulting
                        in enhanced performance and user experience.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-2xl">Full-stack Developer</div>
                  <div className="font-bold text-lg text-sky-400 tracking-wide">
                    Hediehchi
                  </div>
                  <div className="flex items-center text-sm mb-2 text-gray-500">
                    <span className="flex items-center">
                      <span>
                        <PiCalendarBlank />
                      </span>
                      <span className="ms-1">Feb 2020 - Mar 2021</span>
                    </span>
                    <span className="flex items-center ms-4">
                      <span>
                        <PiMapPin />
                      </span>
                      <span className="ms-1">Tehran, Iran</span>
                    </span>
                  </div>
                  {/* <div className="text-md text-justify">
                    Demonstrates strong collaboration with both front-end and
                    back-end developers, ensuring efficient cross-functional
                    communication and a harmonious workflow.
                  </div> */}
                  <div className="ps-4">
                    <ul className="text-md text-justify list-disc">
                      <li>
                        Spearheaded a web application project solo, overseeing
                        ideation to deployment.
                      </li>
                      <li>
                        Collaborated closely with stakeholders for requirements,
                        designing a responsive interface using modern
                        technologies.
                      </li>
                      <li>
                        Demonstrated problem-solving skills to ensure
                        high-quality and timely delivery.
                      </li>
                      <li>
                        Successfully deployed the application, receiving
                        positive user feedback.
                      </li>
                      <li>
                        Gained a strong foundation in full-stack development and
                        deep understanding of the software development
                        lifecycle.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-2xl">Front-end Developer</div>
                  <div className="font-bold text-lg text-sky-400 tracking-wide">
                    <a
                      href="https://www.irantalent.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IranTalent
                    </a>
                  </div>
                  <div className="flex items-center text-sm mb-2 text-gray-500">
                    <span className="flex items-center">
                      <span>
                        <PiCalendarBlank />
                      </span>
                      <span className="ms-1">Dec 2017 - Aug 2018</span>
                    </span>
                    <span className="flex items-center ms-4">
                      <span>
                        <PiMapPin />
                      </span>
                      <span className="ms-1">Tehran, Iran</span>
                    </span>
                  </div>
                  {/* <div className="text-md text-justify">
                    Integrated a cropping package to optimize and customize
                    uploaded images efficiently.
                  </div> */}
                  <div className="ps-4">
                    <ul className="text-md text-justify list-disc">
                      <li>
                        Acquired valuable teamwork experience in IranTalent main
                        website project with a sizable team.
                      </li>
                      <li>
                        Integrated a cropping package to optimize and customize
                        uploaded images efficiently.
                      </li>
                      <li>
                        Independently shipped the MVP version of
                        <a
                          className="mx-1 text-sky-500 font-bold"
                          href="https://salary.irantalent.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          IranSalary
                        </a>
                        as a sole front-end developer.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-2xl border-b-2 pt-2 mb-4 tracking-tight pb-1">
                  EDUCATION
                </div>
                <div className="mb-3">
                  <div className="text-2xl">Master of Computer Science</div>
                  <div className="flex items-center">
                    <div className="font-bold text-lg text-sky-400 tracking-wide">
                      <a
                        href="https://en.sbu.ac.ir/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Shahid Beheshti University
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="flex items-center">
                      <span>
                        <PiCalendarBlank />
                      </span>
                      <span className="ms-1">2020 - 2023</span>
                    </span>
                    <span className="flex items-center ms-4">
                      <span>
                        <PiMapPin />
                      </span>
                      <span className="ms-1">Tehran, Iran</span>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <div>
                    <div className="text-2xl">Bachelor of Statistics</div>
                    <div className="flex items-center">
                      <div className="font-bold text-lg text-sky-400 tracking-wide">
                        <a
                          href="https://en.sbu.ac.ir/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Shahid Beheshti University
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="flex items-center">
                        <span>
                          <PiCalendarBlank />
                        </span>
                        <span className="ms-1">2015 - 2019</span>
                      </span>
                      <span className="flex items-center ms-4">
                        <span>
                          <PiMapPin />
                        </span>
                        <span className="ms-1">Tehran, Iran</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div className="w-[40%] ps-[32px]">
              <div className="mb-[24px]">
                <div className="text-gray-500 text-2xl border-b-2 pt-2 mb-4 tracking-tight pb-1">
                  STRENGTH
                </div>
                <div className="flex mb-4">
                  <div className="pe-3">
                    <span className="text-[20px] w-[48px] h-[48px] border border-sky-200 bg-sky-50 text-sky-700 flex justify-center items-center rounded-full shadow">
                      <PiTimer />
                    </span>
                  </div>
                  <div>
                    <div className="text-lg text-sky-700">
                      Effective Time Management
                    </div>
                    <div>
                      Passionate about continuous learning, regularly engaging
                      in self-directed exploration and pursuing relevant
                      certifications and training programs. Actively
                      participates in workshops, webinars, and conferences to
                      stay abreast of industry trends, ensuring a dynamic and
                      up-to-date skill set.
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="pe-3">
                    <span className="text-[20px] w-[48px] h-[48px] border border-sky-200 bg-sky-50 text-sky-700 flex justify-center items-center rounded-full shadow">
                      <PiBookOpen />
                    </span>
                  </div>
                  <div>
                    <div className="text-lg text-sky-700">
                      Continuous Learning
                    </div>
                    <div>
                      Passionate about continuous learning, regularly engaging
                      in self-directed exploration and pursuing relevant
                      certifications and training programs. Actively
                      participates in workshops, webinars, and conferences to
                      stay abreast of industry trends, ensuring a dynamic and
                      up-to-date skill set.
                    </div>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="pe-3">
                    <span className="text-[20px] w-[48px] h-[48px] border border-sky-200 bg-sky-50 text-sky-700 flex justify-center items-center rounded-full shadow">
                      <PiMagnifyingGlass />
                    </span>
                  </div>
                  <div>
                    <div className="text-lg text-sky-700">
                      Attention to Detail
                    </div>
                    <div>
                      Demonstrates unwavering attention to detail through
                      rigorous code reviews, ensuring adherence to coding
                      standards and optimizing code quality. Meticulously
                      designs pixel-perfect user interfaces, conducts thorough
                      quality assurance processes, and provides comprehensive
                      documentation for code and project specifications.
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-[24px]">
                <div className="text-gray-500 text-2xl border-b-2 pt-2 mb-4 tracking-tight pb-1">
                  SKILLS
                </div>
                <div className="text-md border-b border-dashed pb-2">
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Javascript
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Next.js
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    React
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Typescript
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    HTML
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    CSS/SASS
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Tailwind CSS
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Git
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Responsive Design
                  </span>
                </div>
                <div className="pt-[16px]">
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Python
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Django
                  </span>
                  <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-2 mb-2">
                    Docker
                  </span>
                </div>
              </div>
              <div>
                <div className="text-gray-500 text-2xl border-b-2 pt-2 mb-4 tracking-tight pb-1">
                  PROJECTS
                </div>
              </div>
              <div className="mb-3">
                <div className="text-sky-500 font-bold text-xl">
                  <a
                    href="http://stage.s-pay.click/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    S-Pay
                  </a>
                </div>
                <div>
                  I independently developed a dynamic payment application,
                  handling both front-end and back-end tasks using Next.js and
                  Django Rest Framework. The successful delivery of the MVP
                  showcased an intuitive design and streamlined payment
                  functionality.
                </div>
              </div>
              <div className="mb-3">
                <div className="text-sky-500 font-bold text-xl">Neorca</div>
                <div>
                  I meticulously crafted a pixel-perfect front-end application
                  using Next.js, mirroring the precision and aesthetics of the
                  BingX platform. My role involved ensuring every detail was
                  accurately implemented to achieve a seamless and visually
                  appealing user interface.
                </div>
              </div>
              <div className="mb-3">
                <div className="text-sky-500 font-bold text-xl">
                  <a
                    href="https://cwi-frontend-q8pgfjc99-valakhosravi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CWI
                  </a>
                </div>
                <div>
                  Led the implementation of an e-commerce front-end based on
                  Figma design, meticulously translating the visual concept into
                  a fully functional and aesthetically pleasing user interface.
                  Utilized responsive design principles to ensure optimal user
                  experience across various devices. Integrated interactive
                  elements and navigation features, contributing to an engaging
                  and seamless online shopping experience for users.
                </div>
              </div>
              {/* <div>
                <div className="text-gray-500 text-2xl border-b-2 pt-2 mb-4 tracking-tight pb-1">
                  LANGUAGES
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="font-bold text-lg">English</span>
                <span>Advanced</span>
              </div>
              <div className=" flex justify-between">
                <span className="font-bold text-lg">Farsi</span>
                <span>Native</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
