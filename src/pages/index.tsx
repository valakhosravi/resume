import Image from "next/image";
import { Assistant } from "next/font/google";
import {
  PiPhone,
  PiEnvelopeSimple,
  PiMapPin,
  PiLinkedinLogo,
  PiGithubLogo,
  PiCalendarBlank,
} from "react-icons/pi";

const assistant = Assistant({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={assistant.className}>
      <div className="bg-black">
        <div className="w-[1240px] h-[1752px] mx-auto border p-4 bg-white">
          <div className="">
            <div className="text-sky-900 text-[32px] font-black tracking-wider">
              Vala Khosravi
            </div>
            <div className="text-sky-700 tracking-wider">
              Front-end Developer
            </div>
            <div className="text-sky-500 tracking-wider flex text-sm">
              <div className="flex items-center me-4">
                <span>
                  <PiEnvelopeSimple />
                </span>
                <span className="ps-1">valakhosravi@outlook.com</span>
              </div>
              <div className="flex items-center me-4">
                <span>
                  <PiPhone />
                </span>
                <span className="ps-1">+98 935 253 5150</span>
              </div>
              <div className="flex items-center me-4">
                <span>
                  <PiMapPin />
                </span>
                <span className="ps-1">Tehran, Iran</span>
              </div>
              <div className="flex items-center me-4">
                <span>
                  <PiLinkedinLogo />
                </span>
                <a
                  className="ps-1"
                  href="https://www.linkedin.com/in/vala-khosravi/"
                  target="_blank"
                >
                  linkedin.com
                </a>
              </div>
              <div className="flex items-center me-4">
                <span>
                  <PiGithubLogo />
                </span>
                <a
                  className="ps-1"
                  href="https://www.linkedin.com/in/vala-khosravi/"
                  target="_blank"
                >
                  github.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-[60%]">
              <div className="mb-4">
                <div className="text-gray-500 text-[20px] border-b-2 pt-2 mb-2 tracking-tight">
                  SUMMARY
                </div>
                <div className="text-sm text-justify">
                  Experienced and innovative full stack developer (FE heavy)
                  with over 4 years of expertise in web development across
                  diverse industries, including experience with React and
                  Angular. A task-driven professional with a proven track record
                  of delivering high-quality work on time and within budget.
                  Eager to take on leadership responsibilities and contribute to
                  large-scale projects. Flexible and adaptable, with the ability
                  to work remotely or relocate as needed.
                </div>
              </div>
              <div className="mb-4">
                <div className="text-gray-500 text-[20px] border-b-2 pt-2 mb-2 tracking-tight">
                  EXPERIENCE
                </div>
                <div className="mb-3">
                  <div className="text-xl">Front-end Developer</div>
                  <div className="font-bold text-sky-400 tracking-wide">
                    Mofid Securities
                  </div>
                  <div className="flex items-center text-xs mb-2 text-gray-500">
                    <span className="flex items-center">
                      <span>
                        <PiCalendarBlank />
                      </span>
                      <span className="ms-1">2023 - 2024</span>
                    </span>
                    <span className="flex items-center ms-4">
                      <span>
                        <PiMapPin />
                      </span>
                      <span className="ms-1">2023 - 2024</span>
                    </span>
                  </div>
                  <div className="text-sm text-justify">
                    Demonstrates strong collaboration with both front-end and
                    back-end developers, ensuring efficient cross-functional
                    communication and a harmonious workflow.
                  </div>
                  <div className="ps-4">
                    <ul className="text-sm text-justify list-disc">
                      <li>
                        Collaborated closely with cross-functional teams,
                        conducted rigorous testing, and documented
                        implementation details for seamless integration.
                      </li>
                      <li>
                        fostering a supportive atmosphere that enhances overall
                        team productivity and success.
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
                  <div className="text-xl">Full-stack Developer</div>
                  <div className="font-bold text-sky-400 tracking-wide">
                    SPAR Iran
                  </div>
                  <div className="flex items-center text-xs mb-2 text-gray-500">
                    <span className="flex items-center">
                      <span>
                        <PiCalendarBlank />
                      </span>
                      <span className="ms-1">2023 - 2024</span>
                    </span>
                    <span className="flex items-center ms-4">
                      <span>
                        <PiMapPin />
                      </span>
                      <span className="ms-1">Tehran, Iran</span>
                    </span>
                  </div>
                  <div className="text-sm text-justify">
                    Demonstrates strong collaboration with both front-end and
                    back-end developers, ensuring efficient cross-functional
                    communication and a harmonious workflow.
                  </div>
                  <div className="ps-4">
                    <ul className="text-sm text-justify list-disc">
                      <li>
                        Collaborated closely with cross-functional teams,
                        conducted rigorous testing, and documented
                        implementation details for seamless integration.
                      </li>
                      <li>
                        fostering a supportive atmosphere that enhances overall
                        team productivity and success.
                      </li>
                      <li>
                        The successful refactoring effort received a
                        commendation for its significant impact on system
                        efficiency.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] ps-[4rem]">
              <div className="text-gray-500 text-[20px] border-b-2 pt-2 mb-2 tracking-tight">
                SKILLS
              </div>
              <div className="text-sm">
                <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-1 mb-1">
                  Javascript
                </span>
                <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-1 mb-1">
                  Next.js
                </span>
                <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-1 mb-1">
                  React
                </span>
                <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-1 mb-1">
                  Typescript
                </span>
                <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-1 mb-1">
                  HTML
                </span>
                <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-1 mb-1">
                  CSS/SASS
                </span>
                <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-1 mb-1">
                  Tailwind CSS
                </span>
                <span className="border border-sky-200 text-sky-700 rounded-full px-3 py-1 inline-block bg-sky-50 me-1 mb-1">
                  Git
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
