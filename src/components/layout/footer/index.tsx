import GithubIcon from "@/assets/github.svg";
import MailIcon from "@/assets/mail.svg";
import LinkedinIcon from "@/assets/linkedin.svg";

export function Footer() {
  const currentYear = new Date().getFullYear(); // For dynamic year

  return (
    <footer className="text-white my-10">
      <div className="container mx-auto flex flex-col gap-10 sm:flex-row sm:gap-0 justify-between items-center px-4 pb-10">
        <div className="flex space-x-4">
          <a
            href="https://github.com/frejala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="mailto:fa.rejala03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={MailIcon} alt="Mail" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/frejala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
        <p className="text-xs font-mono">FABRIZIO REJALA | {currentYear}</p>
      </div>
    </footer>
  );
}
