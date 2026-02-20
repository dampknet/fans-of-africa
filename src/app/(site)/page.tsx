import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/count-up";
import ParallaxBg from "@/components/parallax-bg";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
  {/* Globe background */}
  <ParallaxBg
    src="/globe.jpg"
    alt="African network globe background"
    opacity={0.25}
  />

  {/* Gradient overlay ABOVE globe */}
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/80 via-white/70 to-white" />


       <div className="relative z-20 mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Left */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/75 px-3 py-1 text-xs font-semibold text-emerald-900 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Verified impact • Transparent updates
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Building brighter futures across Africa through education and
                community projects.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
                Fans of Africa is a non-profit, Christian organization supporting
                education, medical care, and economic empowerment across Western
                Africa — with clear updates and real outcomes.
              </p>

              {/* Keep it clean: 2 CTAs max */}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/volunteers"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Become a volunteer
                </Link>

                <a
                  href="#who-we-are"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                >
                  Read our mission
                </a>
              </div>

              {/* Trust chips */}
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Education Support",
                  "Building Support",
                  "Economic Empowerment",
                  "Project Reports",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-800 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Kids card moved UP + extra styling */}
            <div className="relative lg:-mt-8">
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-3xl bg-amber-200/40 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl bg-emerald-200/40 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/projects/Trip 4, 2022. Started at Mt. Moriah Academy in Kumasi. Trained teachers, worked on construction of new building, then went to Bibiani and trained teachers there. Grace Baidoo is the proprietor pi.jpeg"
                    alt=" Fans of Africa"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" />

                  {/* Little tag on image */}
                  <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-neutral-900 backdrop-blur">
                    Community impact
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    Real people. Real impact.
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    Every donation and volunteer hour supports lives, learning,
                    and long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats — FULL WIDTH + straight line on desktop */}
          <div className="mt-10 pb-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Stat to={3} suffix="+" label="Projects delivered" />
              <Stat to={1000} suffix="+" label="Students reached" />
              <Stat to={400} suffix="+" label="Teachers Trained" />
              <Stat to={80} suffix="+" label="Active volunteers" />
              <CommunityStat
                label="Communities served"
                value="Kumasi • Abuesi • Senya Beraku • Bibiani"
              />
            </div>
          </div>
        </div>
      </section>
      

      {/* WHO WE ARE (globe still here, stronger) */}
      <section
        id="who-we-are"
        className="relative border-t border-neutral-100 bg-white"
      >
        <ParallaxBg
          src="/globe.jpg"
          alt="African network globe background"
          opacity={0.22}
        />

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Who We Are
            </h2>
           <p className="mt-2 text-sm text-neutral-700 sm:text-base">
              Fans of Africa is a non-profit, Christian organization committed to
              strengthening communities through education, teacher training, and
              sustainable school development. We partner with local leaders in Ghana
              to expand classrooms, equip teachers, and create long-term impact for
              students and families.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              title="Education Support"
              desc="Classroom expansion, learning materials, and student resources."
            />
            <Card
              title="Teacher Training"
              desc="Practical training programs that equip and empower local educators."
            />
            <Card
              title="Infrastructure Development"
              desc="School construction, facility upgrades, and long-term improvements."
            />
            <Card
              title="Volunteer Engagement"
              desc="Structured mission trips and partnerships that build lasting relationships."
            />
          </div>

        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-t border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                Featured projects
              </h2>
              <p className="mt-2 text-sm text-neutral-700 sm:text-base">
                A clean snapshot of ongoing work and recent wins.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex w-fit items-center justify-center rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
            >
              View all →
            </Link>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            <Project
              tag="Education"
              title="Back-to-School Drive"
              desc="Supplies and mentorship to support learning outcomes."
            />
            <Project
              tag="Outreach"
              title="Community Outreach"
              desc="Volunteer-led support programs for families and youth."
            />
            <Project
              tag="Support"
              title="School Essentials"
              desc="Helping schools with materials and basic resources."
            />
          </div>
        </div>
      </section>

      {/* DONATE STRIP */}
      <section className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-900 px-6 py-10 text-white sm:px-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />

            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h3 className="text-xl font-semibold sm:text-2xl">
                  Donate with confidence.
                </h3>
                <p className="mt-2 text-sm text-neutral-200 sm:text-base">
                  No popups. Clear details. A professional donation page that
                  builds trust.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 shadow-sm transition hover:bg-neutral-100"
                >
                  Go to Donate page
                </Link>
                <Link
                  href="/volunteers"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                >
                  Become a volunteer
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({
  to,
  suffix,
  label,
}: {
  to: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/85 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="text-2xl font-semibold text-neutral-900">
        <CountUp to={to} suffix={suffix ?? ""} />
      </div>
      <div className="mt-1 text-sm text-neutral-700">{label}</div>
    </div>
  );
}
function CommunityStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/85 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="text-base font-semibold text-neutral-900 leading-relaxed">
        {value}
      </div>
      <div className="mt-2 text-sm text-neutral-700">{label}</div>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/90 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <div className="mt-2 text-sm text-neutral-700">{desc}</div>
    </div>
  );
}

function Project({
  tag,
  title,
  desc,
}: {
  tag: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
        {tag}
      </span>
      <h3 className="mt-4 text-base font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm text-neutral-700">{desc}</p>
      <Link
        href="/projects"
        className="mt-4 inline-flex text-sm font-semibold text-emerald-700 hover:text-emerald-800"
      >
        Learn more →
      </Link>
    </div>
  );
}
