import React from "react";
import Image from "next/image";
import nft1 from "../public/image/downlogo.svg";
import nft2 from "../public/image/downpics.svg";

function Footer() {
  return (
    <footer>
      <div className="flex justify-center absolute mt-0 ml-0 md:ml-24 xl:mt-40">
        <Image src={nft1} />
      </div>

      <div class=" flex justify-center    ">
        <div className="mt-40 block lg:flex ">
          <button class="rounded-full flex bg-[#1DA1F2] font px-4 py-2 mr-7 mb-6 lg:mb-0   text-gray-200 hover:bg-gray-200 hover:text-gray-900 duration-300">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.544 10.7191C44.3656 12.4775 42.8745 14.0432 41.143 15.2958C41.167 15.6571 41.167 16.0425 41.167 16.428C41.167 28.1107 32.2929 41.5759 16.0837 41.5759C11.1055 41.5759 6.46403 40.1066 2.54401 37.6014C3.24143 37.6737 3.93886 37.7218 4.66034 37.7218C8.7968 37.7218 12.5966 36.3006 15.6027 33.94C13.7638 33.9019 11.9827 33.2895 10.5081 32.1882C9.03352 31.087 7.93918 29.552 7.3779 27.7975C7.90698 27.8939 8.46011 27.9662 9.03729 27.9662C9.83092 27.9662 10.6245 27.8457 11.346 27.653C9.35138 27.2429 7.55895 26.1564 6.27096 24.5767C4.98297 22.997 4.27822 21.0208 4.27555 18.9813V18.8849C5.47801 19.5353 6.82477 19.9448 8.26772 19.993C7.05997 19.1816 6.07048 18.0845 5.38676 16.7989C4.70304 15.5133 4.34617 14.0787 4.3477 12.622C4.3477 11.0081 4.78058 9.49059 5.55016 8.18983C9.90307 13.5374 16.3964 17.0542 23.7314 17.4156C23.5871 16.7652 23.4909 16.0907 23.4909 15.3922C23.4972 13.0517 24.4299 10.8094 26.0845 9.15668C27.739 7.504 29.9803 6.57592 32.3169 6.57593C34.8661 6.57593 37.1508 7.6358 38.7621 9.37015C40.7582 8.96065 42.6581 8.23801 44.3656 7.22631C43.6922 9.27379 42.2974 11.0081 40.4696 12.0921C42.2218 11.9003 43.9337 11.4371 45.544 10.7191Z"
                fill="#62EA10"
              />
            </svg>
            <span class="ml-2 mt-3">Twitter</span>
          </button>
          <button class="rounded-full flex font px-4 bg-[#5865F2] py-2 mr-7 mb-6 lg:mb-0   text-gray-200 hover:bg-gray-200 hover:text-gray-900 duration-300">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.635 8.9859C37.575 7.6059 34.295 6.5859 30.865 6.0059C30.8344 6.00004 30.8028 6.00382 30.7745 6.01671C30.7462 6.02961 30.7226 6.051 30.707 6.0779C30.287 6.8159 29.819 7.7779 29.491 8.5379C25.8532 7.99437 22.1548 7.99437 18.517 8.5379C18.1516 7.69562 17.7397 6.87435 17.283 6.0779C17.2675 6.05067 17.2441 6.0288 17.2158 6.01522C17.1876 6.00164 17.1559 5.99699 17.125 6.0019C13.697 6.5819 10.417 7.6019 7.35496 8.9839C7.32862 8.99495 7.30629 9.01379 7.29096 9.0379C1.06696 18.1879 -0.639039 27.1119 0.198961 35.9239C0.201293 35.9455 0.207992 35.9664 0.218651 35.9853C0.22931 36.0042 0.243705 36.0207 0.260961 36.0339C3.89375 38.6787 7.94563 40.6935 12.247 41.9939C12.2769 42.0031 12.309 42.0031 12.339 41.9938C12.369 41.9846 12.3954 41.9665 12.415 41.9419C13.3406 40.704 14.1608 39.3908 14.867 38.0159C14.8768 37.9971 14.8824 37.9764 14.8835 37.9552C14.8846 37.9341 14.8812 37.9129 14.8734 37.8932C14.8656 37.8735 14.8537 37.8556 14.8385 37.8409C14.8232 37.8262 14.805 37.815 14.785 37.8079C13.493 37.3214 12.2411 36.7342 11.041 36.0519C11.0194 36.0396 11.0012 36.0221 10.9881 36.0011C10.9749 35.98 10.9672 35.956 10.9656 35.9312C10.964 35.9064 10.9686 35.8816 10.979 35.8591C10.9893 35.8365 11.0051 35.8169 11.025 35.8019C11.277 35.6159 11.529 35.4219 11.769 35.2279C11.7906 35.2105 11.8166 35.1993 11.8441 35.1958C11.8717 35.1923 11.8997 35.1965 11.925 35.2079C19.779 38.7359 28.285 38.7359 36.047 35.2079C36.0723 35.1958 36.1006 35.1911 36.1285 35.1942C36.1565 35.1974 36.183 35.2084 36.205 35.2259C36.445 35.4219 36.695 35.6159 36.949 35.8019C36.969 35.8165 36.985 35.8359 36.9957 35.8583C37.0064 35.8807 37.0114 35.9054 37.0102 35.9301C37.009 35.9549 37.0017 35.979 36.9889 36.0002C36.9761 36.0215 36.9583 36.0392 36.937 36.0519C35.741 36.7399 34.497 37.3219 33.191 37.8059C33.1709 37.8132 33.1526 37.8247 33.1374 37.8396C33.1221 37.8545 33.1102 37.8725 33.1024 37.8923C33.0947 37.9122 33.0912 37.9335 33.0924 37.9548C33.0935 37.9761 33.0991 37.997 33.109 38.0159C33.829 39.3899 34.653 40.6979 35.559 41.9399C35.5778 41.9654 35.604 41.9844 35.6341 41.9945C35.6642 42.0045 35.6966 42.005 35.727 41.9959C40.0357 40.6992 44.0942 38.6835 47.731 36.0339C47.7487 36.0215 47.7636 36.0054 47.7746 35.9868C47.7857 35.9682 47.7926 35.9474 47.795 35.9259C48.795 25.7379 46.119 16.8859 40.697 9.0419C40.6837 9.01641 40.6617 8.99654 40.635 8.9859ZM16.041 30.5579C13.677 30.5579 11.727 28.4199 11.727 25.7979C11.727 23.1739 13.639 21.0379 16.041 21.0379C18.461 21.0379 20.393 23.1919 20.355 25.7979C20.355 28.4219 18.443 30.5579 16.041 30.5579ZM31.991 30.5579C29.625 30.5579 27.677 28.4199 27.677 25.7979C27.677 23.1739 29.587 21.0379 31.991 21.0379C34.411 21.0379 36.343 23.1919 36.305 25.7979C36.305 28.4219 34.413 30.5579 31.991 30.5579Z"
                fill="#62EA10"
              />
            </svg>
            <span class="ml-2 mt-3">Discord</span>
          </button>
          <button class=" z-20 rounded-full flex font px-4 py-2  bg-[#2081E2] mb-6 lg:mb-0  text-gray-200 hover:bg-gray-200 hover:text-gray-900 duration-300">
            <svg
              width="49"
              height="49"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 0C5.374 0 0 5.374 0 12C0 18.626 5.374 24 12 24C18.626 24 24 18.626 24 12C24 5.374 18.629 0 12 0ZM5.92 12.403L5.971 12.322L9.094 7.438C9.10446 7.42195 9.11904 7.40899 9.13621 7.4005C9.15339 7.392 9.17253 7.38828 9.19164 7.38971C9.21075 7.39114 9.22912 7.39767 9.24484 7.40863C9.26056 7.41959 9.27305 7.43457 9.281 7.452C9.801 8.621 10.253 10.075 10.041 10.98C9.953 11.352 9.706 11.856 9.427 12.322C9.39121 12.3902 9.35216 12.4566 9.31 12.521C9.2999 12.5354 9.28639 12.547 9.27068 12.5549C9.25497 12.5627 9.23756 12.5665 9.22 12.566H6.013C5.99386 12.5663 5.97499 12.5614 5.95841 12.5518C5.94183 12.5423 5.92814 12.5284 5.91881 12.5117C5.90948 12.495 5.90485 12.476 5.90541 12.4569C5.90597 12.4378 5.9117 12.4191 5.922 12.403H5.92ZM19.834 14.083C19.8342 14.1044 19.8282 14.1253 19.8167 14.1433C19.8051 14.1612 19.7885 14.1754 19.769 14.184C19.526 14.287 18.699 14.669 18.355 15.146C17.477 16.368 16.807 18.116 15.307 18.116H9.053C8.52496 18.1152 8.00226 18.0104 7.51476 17.8075C7.02726 17.6046 6.58451 17.3076 6.21183 16.9336C5.83915 16.5595 5.54384 16.1156 5.34277 15.6274C5.1417 15.1391 5.03882 14.616 5.04 14.088V14.016C5.04 13.958 5.088 13.91 5.148 13.91H8.633C8.703 13.91 8.753 13.973 8.748 14.042C8.722 14.268 8.765 14.501 8.873 14.712C9.079 15.132 9.509 15.394 9.972 15.394H11.698V14.047H9.99C9.96999 14.0468 9.95041 14.0411 9.93338 14.0306C9.91635 14.0201 9.90251 14.0051 9.89335 13.9873C9.8842 13.9695 9.88007 13.9496 9.88142 13.9296C9.88276 13.9096 9.88954 13.8904 9.901 13.874L9.964 13.784C10.124 13.553 10.355 13.198 10.585 12.792C10.741 12.518 10.893 12.226 11.015 11.932C11.039 11.88 11.058 11.825 11.08 11.772C11.113 11.678 11.147 11.59 11.171 11.503C11.1946 11.4292 11.2162 11.3549 11.236 11.28C11.293 11.03 11.317 10.766 11.317 10.493C11.317 10.385 11.313 10.272 11.303 10.166C11.298 10.049 11.283 9.931 11.269 9.814C11.2578 9.70932 11.2418 9.6052 11.221 9.502C11.1941 9.34485 11.1614 9.18874 11.123 9.034L11.109 8.974C11.079 8.866 11.053 8.764 11.019 8.657C10.9238 8.32841 10.8143 8.0041 10.691 7.685C10.648 7.56497 10.6007 7.44656 10.549 7.33C10.477 7.152 10.403 6.991 10.336 6.84C10.3027 6.77531 10.2713 6.70961 10.242 6.643C10.2095 6.57114 10.1751 6.50012 10.139 6.43C10.115 6.377 10.086 6.326 10.067 6.278L9.856 5.89C9.827 5.837 9.875 5.772 9.933 5.789L11.253 6.146H11.263L11.436 6.196L11.628 6.25L11.698 6.269V5.486C11.698 5.107 12 4.8 12.377 4.8C12.466 4.79976 12.5542 4.81753 12.6361 4.85225C12.7181 4.88696 12.7922 4.9379 12.854 5.002C12.9817 5.13078 13.0535 5.30465 13.054 5.486V6.65L13.195 6.689C13.205 6.694 13.217 6.699 13.226 6.706C13.26 6.73 13.31 6.768 13.373 6.816C13.423 6.854 13.476 6.902 13.538 6.953C13.7355 7.11388 13.9269 7.28199 14.112 7.457C14.326 7.656 14.566 7.889 14.796 8.148C14.861 8.222 14.923 8.294 14.988 8.374C15.05 8.453 15.12 8.53 15.178 8.606C15.257 8.71 15.338 8.818 15.413 8.93C15.446 8.983 15.487 9.038 15.518 9.091C15.614 9.233 15.696 9.379 15.775 9.526C15.809 9.593 15.842 9.667 15.871 9.739C15.96 9.936 16.03 10.135 16.073 10.337C16.0872 10.3799 16.0969 10.4241 16.102 10.469V10.479C16.116 10.536 16.121 10.599 16.126 10.663C16.1542 10.9586 16.118 11.2567 16.02 11.537C15.989 11.621 15.96 11.707 15.922 11.791C15.847 11.961 15.761 12.134 15.658 12.293C15.624 12.353 15.583 12.415 15.545 12.475C15.502 12.538 15.456 12.598 15.418 12.655C15.363 12.7307 15.3053 12.8044 15.245 12.876C15.192 12.948 15.139 13.02 15.079 13.085C14.998 13.183 14.919 13.275 14.834 13.363C14.786 13.421 14.734 13.481 14.678 13.533C14.626 13.593 14.57 13.646 14.522 13.694C14.438 13.778 14.372 13.841 14.314 13.896L14.177 14.018C14.1579 14.0371 14.132 14.0479 14.105 14.048H13.054V15.394H14.376C14.671 15.394 14.952 15.29 15.18 15.096C15.257 15.029 15.595 14.736 15.996 14.294C16.0091 14.279 16.0266 14.2684 16.046 14.264L19.696 13.207C19.712 13.2024 19.7289 13.2015 19.7453 13.2045C19.7617 13.2075 19.7772 13.2142 19.7906 13.2242C19.804 13.2342 19.8148 13.2471 19.8224 13.262C19.8299 13.2769 19.8339 13.2933 19.834 13.31V14.083Z"
                fill="#62EA10"
              />
            </svg>{" "}
            <span class="ml-2 mt-3">Open Sea</span>
          </button>
        </div>
      </div>

      <div className="hidden justify-end mt-[-14.3rem] lg:flex ">
        <Image src={nft2} className="w-full h-full" />
      </div>

      <div>
        <span class=" flex justify-center">(C)2022 KAOLA BOT Club.</span>
        <span class=" flex justify-center">All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
