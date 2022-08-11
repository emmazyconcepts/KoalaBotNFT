import React from "react";
import faqq from "../public/image/q.svg";
import Image from "next/image";

function Faq() {
  return (
    <div className="bg-black">
      <div class="text-gray-700">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-20">
            <Image src={faqq} className="w-full h-full" />

            <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">
              Frequently Asked Question
            </h1>
            <p class="text-base text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto ">
              The most common questions about KBC
            </p>
          </div>
          <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4 ">
                <summary class="font-semibold  bg-gray-200  rounded-full py-2 px-4 hover:text-[#62EA10]">
                  How Long is this site live?
                </summary>
                <hr class="border-b border-white mt-2" />
                <span className=" text-white">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold bg-gray-200 rounded-full py-2 px-4">
                  Can I install/upload anything I want on there?
                </summary>
                <hr class="border-b border-white mt-2" />

                <span className=" text-white">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-full py-2 px-4">
                  How can I migrate to another site?
                </summary>
                <hr class="border-b border-white mt-2" />

                <span className=" text-white">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
            <div class="w-full lg:w-1/2 px-4 py-2">
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-full py-2 px-4">
                  Can I change the domain you give me?
                </summary>
                <hr class="border-b border-white mt-2" />

                <span class="px-4 py-2 text-white">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-full py-2 px-4">
                  How many sites I can create at once?
                </summary>
                <hr class="border-b border-white mt-2" />

                <span class="px-4 py-2 text-white">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
              <details class="mb-4">
                <summary class="font-semibold  bg-gray-200 rounded-full py-2 px-4">
                  How can I communicate with you?
                </summary>
                <hr class="border-b border-white mt-2" />

                <span class="px-4 py-2 text-white">
                  Laboris qui labore cillum culpa in sunt quis sint veniam.
                  Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                  minim velit nostrud pariatur culpa magna in aute.
                </span>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
