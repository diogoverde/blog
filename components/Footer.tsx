import dynamic from "next/dynamic";
import { useState } from "react";

const CustomConfetti = dynamic(() => import("./CustomConfetti"), {
  ssr: false,
});

export default function Footer() {
  const [party, setParty] = useState(false);

  return (
    <footer className="max-w-5xl px-8 mx-auto text-gray-800 mb-4">
      <div className="pb-2 mb-2 border-t-2 border-gray-300"></div>
      <div className="flex flex-row justify-between ">
        <div></div>

        <div className="pt-0 font-medium lg:pt-0 flex">
          <div className="mr-2 cursor-pointer" onClick={() => setParty(!party)}>
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 122 122"
              className="h-6 w-6 ml-auto mt-1 fill-current text-gray-500 hover:text-purple-500 dark:hover:text-purple-500 dark:text-gray-200"
            >
              <g>
                <path d="M64.39,58.6c6.44,6.44,11.29,13.3,13.92,19.19c2.82,6.3,3.11,11.65,0.21,14.55c-1.36,1.36-3.27,2.02-5.56,2.04 l-50.83,22.65l0,0c-12.88,6.37-19.22,7.33-21.39,3.91c-2.05-3.23,0.38-10.08,4.8-19.81l0,0l23.11-52.06 c0.18-1.87,0.82-3.43,1.99-4.6c2.9-2.9,8.25-2.61,14.55,0.21C51.09,47.31,57.95,52.15,64.39,58.6L64.39,58.6z M115.85,88.94 c1.52,1.52,1.52,3.99,0,5.51c-1.52,1.52-3.99,1.52-5.51,0c-1.52-1.52-1.52-3.99,0-5.51C111.86,87.42,114.32,87.42,115.85,88.94 L115.85,88.94z M119.55,70.78c1.08-0.2,2.12,0.51,2.32,1.59c0.2,1.08-0.51,2.12-1.59,2.32c-5.29,1-9.74-2.24-14.34-5.58 c-6.05-4.4-12.4-9.02-20.43-0.77c-0.76,0.79-2.02,0.8-2.81,0.04c-0.79-0.76-0.8-2.02-0.04-2.81c10.43-10.72,18.21-5.07,25.61,0.32 C112.17,68.72,115.94,71.46,119.55,70.78L119.55,70.78z M120.46,11.45c1.1,0,1.98,0.89,1.98,1.98c0,1.1-0.89,1.98-1.98,1.98 c-9.14,0.02-11.54,7.38-14.08,15.16c-2.95,9.05-6.07,18.59-18.45,20.71c-1.15,0.2-2.33,0.39-3.63,0.57 c-1.24,0.17-2.47,0.31-3.71,0.39c-1.1,0.07-2.04-0.76-2.11-1.86c-0.07-1.1,0.76-2.04,1.86-2.11c1.16-0.08,2.3-0.2,3.43-0.36 c1.08-0.15,2.27-0.34,3.49-0.55c10.01-1.71,12.75-10.08,15.33-18.01C105.6,20.16,108.43,11.48,120.46,11.45L120.46,11.45z M50.24,1.62c0.2-1.08,1.24-1.79,2.32-1.59c1.08,0.2,1.79,1.24,1.59,2.32c-0.65,3.43,1.73,7.09,4.18,10.85 c5.09,7.83,10.44,16.04-3.03,26.7c-0.86,0.68-2.11,0.53-2.79-0.33c-0.68-0.86-0.53-2.11,0.33-2.79c10.63-8.41,6.3-15.08,2.16-21.43 C52.1,10.92,49.29,6.61,50.24,1.62L50.24,1.62z M95.42,7.52l-3.8,7.5l5.61,5.67l-7.95-1.08l-3.83,7.1l-1.26-7.9l-7.93-1.4 l7.12-3.69l-1.16-8.25l5.76,5.91L95.42,7.52L95.42,7.52z M77.44,31.86c1.52,1.52,1.52,3.99,0,5.51c-1.52,1.52-3.99,1.52-5.51,0 c-1.52-1.52-1.52-3.99,0-5.51C73.45,30.34,75.92,30.34,77.44,31.86L77.44,31.86z M71.75,5.19c1.52,1.52,1.52,3.99,0,5.51 c-1.52,1.52-3.99,1.52-5.51,0c-1.52-1.52-1.52-3.99,0-5.51C67.76,3.67,70.23,3.67,71.75,5.19L71.75,5.19z M46.59,24.48 c1.52,1.52,1.52,3.99,0,5.51c-1.52,1.52-3.99,1.52-5.51,0c-1.52-1.52-1.52-3.99,0-5.51C42.6,22.96,45.06,22.96,46.59,24.48 L46.59,24.48z M113.62,46.71c1.52,1.52,1.52,3.99,0,5.51c-1.52,1.52-3.99,1.52-5.51,0c-1.52-1.52-1.52-3.99,0-5.51 C109.63,45.19,112.1,45.19,113.62,46.71L113.62,46.71z M101.38,76.61l-4.73,3.09l1.36,5.18l-4.26-3.3l-4.61,2.84l1.92-5.02 l-4.14-3.48l5.38,0.24l2.1-5.19l1.36,5.37L101.38,76.61L101.38,76.61z M32.36,62.05c3.96,11.62,12.69,26.63,25.21,35.93L67.6,93.5 c-1.17-0.36-2.38-0.82-3.64-1.38c-5.89-2.63-12.75-7.48-19.19-13.92l0,0C39.41,72.84,35.15,67.19,32.36,62.05L32.36,62.05z M43.11,104.42C32.39,95,26.02,84.73,20.72,74.26l-6.65,14.99c2.56,5.32,9.58,14.3,16.29,20.85L43.11,104.42L43.11,104.42z M16.99,116.18c-5-4.31-7.29-6.94-9.76-11.56c-3.38,7.61-5.2,12.82-3.99,14.72C4.3,121,8.42,120.16,16.99,116.18L16.99,116.18z M31.6,49.33c0.01,0.07,0.01,0.15,0,0.23c-0.1,1.49,0.18,3.26,0.82,5.24c0.31,0.95,0.7,1.96,1.17,3.01 c2.48,5.56,7.12,12.09,13.31,18.29l0,0c6.19,6.19,12.73,10.83,18.29,13.31c1.19,0.53,2.33,0.97,3.4,1.29 c1.47,0.44,2.82,0.69,4.02,0.71c0.09,0,0.18,0.01,0.27,0.02c1.5-0.01,2.71-0.4,3.52-1.21c1.93-1.93,1.48-6.08-0.82-11.22 c-2.48-5.56-7.12-12.09-13.31-18.29c-6.19-6.19-12.73-10.83-18.29-13.31c-5.14-2.3-9.29-2.75-11.22-0.82 C32.1,47.25,31.72,48.18,31.6,49.33L31.6,49.33z" />
              </g>
            </svg>
          </div>
          <CustomConfetti party={party} setParty={setParty} />
          <a href="https://twitter.com/diogo__verde" className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-auto mt-1 fill-current text-gray-500 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600 "
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="https://github.com/diogoverde">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-auto mt-1 fill-current text-gray-500 hover:text-gray-900 dark:hover:text-gray-900  dark:text-gray-200"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
