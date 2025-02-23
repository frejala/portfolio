"use client";

import Image from "next/image";
import Link from "next/link";

import GithubIcon from "@/assets/icons/github.svg";
import MailIcon from "@/assets/icons/mail.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-10">
      <div className="container mx-auto flex flex-col gap-10 sm:flex-row sm:gap-0 justify-between items-center px-4">
        <div className="flex space-x-4 items-end">
          <Link
            href="https://github.com/frejala"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <Image src={GithubIcon} alt="GitHub" width={24} height={24} />
          </Link>
          <Link
            href="mailto:fa.rejala03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <Image src={MailIcon} alt="Mail" width={24} height={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/frejala/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity duration-200 hover:opacity-80"
          >
            <Image src={LinkedinIcon} alt="LinkedIn" width={24} height={24} />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-md font-mono text-white flex items-center">
            <span className="text-md mr-1 leading-none font-poppins text-center">
              &copy;
            </span>
            {currentYear} | Fabrizio Rejala
          </p>
        </div>
      </div>
    </footer>
  );
}
