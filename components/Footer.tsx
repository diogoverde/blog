import Image from "next/image";

export default function Footer() {
  return (
    <footer className="max-w-4xl px-4 mx-auto text-gray-800">
      <div className="pb-8 mb-2 border-t-2 border-gray-300"></div>
      <div className="flex flex-col justify-between lg:flex-row">
        <p>Built with Next.js + Tailwind</p>
        <div className="pt-2 space-x-6 font-medium lg:pt-0">
          <a href="https://twitter.com/diogo__verde">Twitter</a>
          <a href="https://github.com/diogoverde">Github</a>
        </div>
      </div>
    </footer>
  );
}
