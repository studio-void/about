import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border">
      <div className="px-4 sm:px-6 py-8 sm:py-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base text-center">
                © {new Date().getFullYear()} VO!D. All rights reserved.
              </p>
            </div>

            <nav className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <Link
                to="/privacy-policy"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-foreground transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </nav>

            <div className="flex items-center justify-center gap-6">
              <a
                href="mailto:ceo@wevoid.com"
                className="text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:scale-110 transition-all duration-200"
                aria-label="Email"
              >
                <IconMail size={24} />
              </a>
              <a
                href="https://linkedin.com/company/wevoid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:scale-110 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={24} />
              </a>
              <a
                href="https://github.com/studio-void"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-600 dark:text-neutral-400 hover:text-foreground hover:scale-110 transition-all duration-200"
                aria-label="GitHub"
              >
                <IconBrandGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
