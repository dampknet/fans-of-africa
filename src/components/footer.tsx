import Link from "next/link";
import Container from "./ui/container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold">Fans of Africa</p>
            <p className="mt-2 text-sm text-neutral-600">
              Supporting communities through education, volunteering, and
              impact-driven projects.
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
              Email: info@fansofafrica.net
            </p>
            <p className="text-sm text-neutral-600">Location:</p>
            <p className="text-sm text-neutral-600">5306 26th Street</p>
            <p className="text-sm text-neutral-600">Lubbock Texas 79407 </p>
          </div>
        </div>

        <div className="border-t border-neutral-200 py-6 text-sm text-neutral-600">
          © {new Date().getFullYear()} Fans of Africa. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
