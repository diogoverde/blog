import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      <span className="mr-2">Powered by</span>
      <Image src="/vercel.svg" alt="Vercel Logo" height={60} width={60} />
    </footer>
  );
}
