import Link from "next/link";
import Container from "./ui/container";

const FACEBOOK_URL =
  "https://www.facebook.com/share/1AgvVHKAps/?mibextid=wwXIfr";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold">Fans of Africa</p>
            <p className="mt-2 text-sm text-neutral-600">
              Supporting communities through education, volunteering, and
              impact-driven projects. 501(c)3 Employee ID number 81-3016586
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold">Quick Links</p>
            <div className="mt-3 grid gap-2 text-sm text-neutral-700">
              <Link href="/about" className="hover:text-neutral-950">
                About
              </Link>
              <Link href="/projects" className="hover:text-neutral-950">
                Projects
              </Link>
              <Link href="/volunteers" className="hover:text-neutral-950">
                Volunteers
              </Link>
              <Link href="/contact" className="hover:text-neutral-950">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold">Trust</p>
            <div className="mt-3 grid gap-2 text-sm text-neutral-700">
              <p>Transparent donations</p>
              <p>Contactable team</p>
              <p>Clear project updates</p>
            </div>
          </div>

         <div>
            <p className="text-sm font-semibold">Get in touch</p>

            <p className="mt-2 text-sm text-neutral-600">
              Email: info@fansofafrica.com
            </p>
            <p className="text-sm text-neutral-600">5306 26th Street</p>
            <p className="text-sm text-neutral-600">Lubbock Texas 79407</p>

            {/* Social */}
            <div className="mt-4">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-600 transition hover:text-emerald-700"
                aria-label="Visit our Facebook page"
              >
                {/* Facebook SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.58v1.9h2.78l-.44 2.91h-2.34V22c4.78-.8 8.44-4.94 8.44-9.93z" />
                </svg>

                <span className="text-sm font-medium">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} Fans of Africa. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
