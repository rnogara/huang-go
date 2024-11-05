import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-14 bg-gradient-to-b from-transparent to-black  flex items-center justify-evenly text-pink-300 text-sm">
      <p>
        Site criado por&nbsp;
        <Link
          href="https://github.com/rnogara"
          rel="noopener noreferrer"
          target="_blanck"
          className="hover:underline"
        >
          Roberta Nogara
        </Link>
      </p>
    </footer>
  );
}