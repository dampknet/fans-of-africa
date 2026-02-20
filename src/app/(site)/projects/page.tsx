import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/section";

const PROJECTS_2015 = [
  {
    src: "/projects/2015-orphanage-walk.jpeg",
    alt: "2015 visit to the orphanage in Abuesi",
    caption:
      "2015 — Our first visit to the orphanage in Abuesi, Ghana. Seeing the needs up close changed everything.",
  },
  {
    src: "/projects/2015-school-building.jpeg",
    alt: "Mike and Pastor John standing in front of the building",
    caption:
      "This building (with Mike and Pastor John) later became the school — TICA — as the vision grew into action.",
  },
  {
    src: "/projects/2015-laura-mike.jpeg",
    alt: "Laura and Mike in Ghana",
    caption:
      "We knew we wanted to keep returning, not just for a trip, but for lasting Christian outreach and partnership.",
  },
  {
    src: "/projects/2015-installation-work.jpeg",
    alt: "Hands-on mission work",
    caption:
      "From the beginning, our mission has included physical work, showing up with love, effort, and consistency.",
  },
];

const PROJECTS_2016 = [
  {
    src: "/projects/2016-chief-group.jpeg",
    alt: "Group standing with the chief, Mike and Pastor John",
    caption:
      "2016 — Our second trip to Abuesi. Amara, Forest, and Amanda joined us, pictured with the chief, Mike, and Pastor John.",
  },
  {
    src: "/projects/amara.jpg",
    alt: "Tree Planting",
    caption:
      "Tree Planting by Amara.",
  },
  {
    src: "/projects/2016-tree-planting.jpeg",
    alt: "Planting a tree in Ghana",
    caption:
      "A planted tree, a marker of faith and time. We’ll later show it grown to highlight the progression of years.",
  },
  {
    src: "/projects/2016-construction-addition.jpeg",
    alt: "Construction of school addition",
    caption:
      "Construction of an addition to the school which we paid for. Growth happening step by step.",
  },
   {
    src: "/projects/TICA.jpg",
    alt: "Construction of school addition",
    caption:
      "That's Tica.",
  },
  {
    src: "/projects/2016-young-missionaries.jpeg",
    alt: "Young missionaries on the trip",
    caption:
      "Our young missionaries served with joy and humility, learning, helping, and building relationships.",
  },
  {
    src: "/projects/2016-teacher-training.jpeg",
    alt: "Training teachers on the school patio",
    caption:
      "Training teachers on the patio of the school, strengthening education through support, curriculum, and partnership.",
  },
];

// ✅ Added (Trip 3 / 2017) — filenames match exactly what you stored
const PROJECTS_2017 = [
  {
    src: "/projects/project 3.jpeg",
    alt: "Large group gathering at Assemblies of God Ghana",
    caption:
      "2017 — Trip three. We gathered with the Assemblies of God community, strengthening partnerships and deepening relationships.",
  },
  {
    src: "/projects/Bibaini teachers.jpeg",
    alt: "Teacher training in Bibiani",
    caption:
      "Teacher training in Bibiani, equipping educators with tools, curriculum support, and encouragement.",
  },
  {
    src: "/projects/Teacher training in Bibiani, 100 teachers.jpeg",
    alt: "Training 100 teachers in Bibiani",
     caption:
      "Over 100 teachers trained, expanding impact beyond one school into the wider district.",
  },
  {
    src: "/projects/TICA growing with more students 2017.jpeg",
    alt: "TICA growth in 2017",
    caption:
      "TICA continues growing in enrollment and structure, the vision becoming reality.",
  },
  {
    src: "/projects/We hired Emmanuel to work for us.jpeg",
    alt: "Hiring Emmanuel",
    caption:
      "We hired Emmanuel, prioritizing local employment and sustainability.",
  },
];

/** Trip 4 (2022) — 15 photos (as you said) */
const PROJECTS_TRIP4_2022 = [
  {
    src: "/projects/d84fd7fc-3703-461c-aeea-c6224a61f61a.jpg.jpeg",
    alt: "Trip 4 (2022) — project moment",
    caption:
      "Trip 4 (2022) — Hands-on work during our visit as we supported school needs alongside local partners.",
  },
  {
    src: "/projects/IMG_0626.jpeg",
    alt: "Trip 4 (2022) — school environment",
    caption:
      "A look at one of the school environments we visited and supported.",
  },
  {
    src: "/projects/IMG_0643.jpeg",
    alt: "Trip 4 (2022) — facilities and services board",
    caption:
      "Facilities and services on display at the school, a reminder that learning thrives with good support systems.",
  },
  {
    src: "/projects/IMG_5058.jpeg",
    alt: "Trip 4 (2022) — before/needs assessment",
    caption:
      "Seeing needs clearly helps us plan the right support and improvements.",
  },
  {
    src: "/projects/IMG_5068.jpeg",
    alt: "Trip 4 (2022) — team moment",
    caption:
      "Volunteers and friends connected through service and shared purpose.",
  },
  {
    src: "/projects/IMG_5075.jpeg",
    alt: "Trip 4 (2022) — supplies and materials",
    caption:
      "Supplies and materials gathered to help move work forward.",
  },
  {
    src: "/projects/IMG_5089.jpeg",
    alt: "Trip 4 (2022) — recognition at the school",
    caption:
      "A meaningful moment of recognition and encouragement during the trip.",
  },
  {
    src: "/projects/IMG_5241.jpeg",
    alt: "Trip 4 (2022) — project support item",
    caption:
      "Supporting classrooms with practical resources that improve learning conditions.",
  },
  {
    src: "/projects/IMG_5262.jpeg",
    alt: "Trip 4 (2022) — project support item",
    caption:
      "Continued support and logistics that help projects run smoothly.",
  },
  {
    src: "/projects/2e3f2e96-3a43-48e8-ad76-17527a2b70bb.jpg.jpeg",
    alt: "Trip 4 (2022) — school space / improvement area",
    caption:
      "One of the key spaces we looked at for improvement and support.",
  },
  {
    src: "/projects/f2487315-d361-46de-9db1-1d74494fb703.jpg.jpeg",
    alt: "Trip 4 (2022) — community moment",
    caption:
      "Community and partnership are at the center of everything we do.",
  },
  {
    src: "/projects/IMG_4954.JPG.jpeg",
    alt: "Trip 4 (2022) — classroom or school activity",
    caption:
      "Encouraging learning through presence, support, and partnership.",
  },
  {
    src: "/projects/IMG_5275.JPG.jpeg",
    alt: "Trip 4 (2022) — learning space",
    caption:
      "A snapshot of a learning space we visited during the trip.",
  },
  {
    src: "/projects/This is a picture of the ongoing progress at TICA in Abuesi. Notice the growth of the trees..jpeg",
    alt: "TICA progress over time (tree growth)",
    caption:
      "Ongoing — Progress at TICA in Abuesi. The growth over time is visible, even in small details like the trees.",
  },
  {
    src: "/projects/Trip 4, 2022. Started at Mt. Moriah Academy in Kumasi. Trained teachers, worked on construction of new building, then went to Bibiani and trained teachers there. Grace Baidoo is the proprietor pi.jpeg",
    alt: "Trip 4 (2022) — Mt. Moriah to Bibiani teacher training",
    caption:
      "Started at Kandit standard school in Bibiani and that is Grace Baidoo, the proprietress",
  },
];

/** Trip 5 (2024) — 21 photos (as you said) */
const PROJECTS_TRIP5_2024 = [
  {
    src: "/projects/trip5.jpeg",
    alt: "Trip 5 (2024) — first time to Senya Beraku, then Bibiani and Kumasi",
    caption:
      "Trip 5 (2024) — First time to Senya Beraku, then Bibiani and Kumasi. Before-and-after progress as projects moved forward with local support.",
  },
  {
    src: "/projects/IMG_1351.jpeg",
    alt: "Trip 5 (2024) — school/community scene",
    caption:
      "Before Renovations.",
  },
  {
    src: "/projects/WhatsApp Image 2024-10-10 at 10.14.03.jpeg",
    alt: "Trip 5 (2024) — trip moment",
    caption:
      " The addition to Mt Moriah academy in Kumasi. ",
  },
  {
    src: "/projects/Grace’s new addition recognizing our work..jpeg",
    alt: "Trip 5 (2024) — recognition addition",
    caption:
      " Kandit school with the finished addition.",
  },
   {
    src: "/projects/WhatsApp Image 2024-10-10 at 09.12.55.jpeg",
    alt: "Trip 5 (2024) — trip moment",
    caption:
      " the finished addition to Kandit",
  },
  {
    src: "/projects/Michael Mokarzel and our Kumasi hosts.jpeg",
    alt: "Trip 5 (2024) — Michael and Kumasi hosts",
    caption:
      "Michael Mokarzel with our Kumasi hosts — friendship and partnership make the work possible.",
  },
  {
    src: "/projects/WhatsApp Image 2024-07-18 at 17.08.50.jpeg",
    alt: "Trip 5 (2024) — trip moment",
    caption:
      "One of the dilapidated educational structures in Senya Beraku",
  },
  {
    src: "/projects/WhatsApp Image 2024-07-18 at 17.08.55.jpeg",
    alt: "Trip 5 (2024) — trip moment",
    caption:
      "What we saw underupon arrival. An operating educational structure at star field school.",
  },
  {
    src: "/projects/WhatsApp Image 2025-03-29 at 11.42.00.jpeg",
    alt: "Trip 5 (2024) — continued story moment",
    caption:
      "A meaningful follow-up moment connected to the ongoing story and impact.",
  },
  {
    src: "/projects/IMG_8675.jpeg",
    alt: "Trip 5 (2024) — school progress",
    caption:
      "Evidence of growth and improvement as projects continue over time.",
  },
  {
    src: "/projects/IMG_8696.jpeg",
    alt: "Trip 5 (2024) — school progress",
    caption:
      "fans bought to be fixed in classrooms.",
  },
  {
    src: "/projects/IMG_8787 2.JPG.jpeg",
    alt: "Trip 5 (2024) — team and partners",
    caption:
      "Volunteers and partners together, relationships are part of the mission.",
  },
  {
    src: "/projects/IMG_8826.jpeg",
    alt: "Trip 5 (2024) — project work",
    caption:
      "Rewarding one of our Teaching Interventionist.",
  },
  {
    src: "/projects/IMG_8907.jpeg",
    alt: "Trip 5 (2024) — project work",
    caption:
      "Practical work that supports better learning conditions and school growth.",
  },
  {
    src: "/projects/IMG_8933.JPG.jpeg",
    alt: "Trip 5 (2024) — project work",
    caption:
      "Continuing the work, step by step, with local partnership and shared responsibility.",
  },
  {
    src: "/projects/IMG_8952.JPG.jpeg",
    alt: "Trip 5 (2024) — project work",
    caption:
      " These were the 45 teachers trained in Senya Beraku",
  },
  {
    src: "/projects/IMG_8967.JPG.jpeg",
    alt: "Trip 5 (2024) — project work",
    caption:
      "Another moment captured during the visit as projects moved forward.",
  },
  {
    src: "/projects/a0d4a097-d119-4440-af2d-984767a38f46.jpg.jpeg",
    alt: "Trip 5 (2024) — project moment",
    caption:
      "A project moment showing the practical side of service and improvement work.",
  },
  {
    src: "/projects/e65ce5dc-ca83-4bb0-ac99-223ca26053d6.jpg.jpeg",
    alt: "Trip 5 (2024) — group photo",
    caption:
      "A group moment celebrating partnership, culture, and shared progress.",
  },
  {
    src: "/projects/PHOTO-2025-02-08-09-27-57.jpg.jpeg",
    alt: "Trip 5 (2024) — school courtyard / campus view",
    caption:
      "A wider view of the school environment — spaces where learning and growth happen daily.",
  },
];

function PhotoGrid({
  items,
}: {
  items: { src: string; alt: string; caption: string }[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((it) => (
        <figure
          key={it.src}
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
        >
          <div className="relative h-48 w-full sm:h-56">
           <Image src={it.src} alt={it.alt} fill className="object-cover object-[50%_20%]" />
          </div>
          <figcaption className="p-4 text-sm leading-relaxed text-neutral-700">
            {it.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function PhotoRow({
  items,
}: {
  items: { src: string; alt: string; caption: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {items.map((it) => (
        <figure
          key={it.src}
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
        >
         <div className="relative h-44 w-full md:h-52 xl:h-44 bg-neutral-50">
        <Image
          src={it.src}
          alt={it.alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 20vw"
        />
      </div>

          <figcaption className="p-4 text-sm leading-relaxed text-neutral-700">
            {it.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-neutral-100">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-900 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Projects • Partnerships • Progress
              </div>

              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                Our projects grow with the needs of the community.
              </h1>

              <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
                Our projects change periodically based on the needs of the
                community and our Ghanaian partners. All projects benefit from
                monetary donations, and there is also the opportunity to
                participate in one of our mission trips to assist us with the
                physical work that needs to be done during our visits.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/volunteers"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Volunteer with us
                </Link>
                <a
                  href="#ongoing-projects"
                  className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                >
                  View ongoing projects
                </a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Education", "Teacher training", "Infrastructure", "Outreach"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Side card */}
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                How we approach projects
              </p>

              <ul className="mt-4 space-y-3 text-sm text-neutral-700 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  We listen to our Ghanaian partners and respond to real needs.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  We prioritize long-term impact: education, dignity, and growth.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                  We build relationships — not “one-time” interventions.
                </li>
              </ul>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-sm font-semibold text-emerald-900">
                  Want to support a project?
                </p>
                <p className="mt-1 text-sm text-emerald-900/80">
                  Donations help us buy supplies locally, fund construction, and
                  provide training resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE STORY */}
      <Section title="">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Our story in Ghana
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            From a first visit… to a growing mission of education and outreach.
          </p>
        </div>

        {/* 2015 */}
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Trip 1 — 2015 (Where it began)
            </p>

            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              We began in 2015 at the orphanage in Abuesi. After returning home,
              we established Fans of Africa because we knew we wanted to do
              more—and we knew we wanted a Christian outreach and could find
              nothing like that which was available to us at the time. The
              building that Mike and Pastor John are standing in front of was
              the building that later became the school TICA, which we can show
              evolving to what it is today.
            </p>

            <div className="mt-6">
              <PhotoGrid items={PROJECTS_2015} />
            </div>
          </div>
        </div>

        {/* 2016 */}
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Trip 2 — 2016 (Returning with purpose)
            </p>

            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
             In 2016, we returned to Abuesi with a clearer purpose. I planted a tree that we’ll later revisit fully grown as a sign of how time and impact have progressed. I also trained teachers on the school patio, and our young missionaries—Amara, Forest, and Amanda—joined us, pictured with the chief, Mike, and Pastor John. During this trip, we also funded and supported the construction of an addition to the school.
            </p>

            <div className="mt-6">
              <PhotoRow items={PROJECTS_2016} />
            </div>
          </div>
        </div>

        {/* 2017 */}
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Trip 3 — 2017 (Expanding impact)
            </p>

            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              In 2017, our third trip deepened partnerships and broadened our
              reach. We trained over 100 teachers in Bibiani, saw TICA continue
              to grow, and strengthened relationships with local churches and
              leaders. This year also marked an important milestone as we hired
              Emmanuel, reinforcing our commitment to supporting Ghanaian
              leadership.
            </p>

            <div className="mt-6">
              <PhotoRow items={PROJECTS_2017} />
            </div>
          </div>
        </div>

        {/* Trip 4 — 2022 */}
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Trip 4 — 2022 (Expanding Partnerships & Infrastructure)
            </p>

            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              Trip 4 began at Mount Moriah Academy in Kumasi, where we trained
              teachers and worked on construction toward a new building. From
              there we continued on to Bibiani for additional teacher training
              and support alongside our partners.
            </p>

            <div className="mt-6">
              <PhotoGrid items={PROJECTS_TRIP4_2022} />
            </div>
          </div>
        </div>

        {/* Trip 5 — 2024 */}
        <div className="mx-auto mt-8 max-w-6xl">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Trip 5 — 2024 (From Growth to Generational Impact)
            </p>

            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              Trip 5 was our first time to SB. From there we went to Bibiani and
              Kumasi, capturing before-and-after progress of schools we worked
              on, strengthening partnerships, and continuing teacher training as
              resources allowed.
            </p>

            <div className="mt-6">
              <PhotoRow items={PROJECTS_TRIP5_2024} />
            </div>
          </div>
        </div>
      </Section>

      {/* ONGOING PROJECTS */}
      <section
        id="ongoing-projects"
        className="border-t border-neutral-100 bg-white"
      >
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Ongoing projects
            </h2>
            <p className="mt-2 text-sm text-neutral-600 sm:text-base">
              Work that continues year after year, as resources allow.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                TICA — our first school in Ghana
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                Our first school in Ghana, TICA, which started with 8 students
                now has 370 students from preschool through grade 6. Twenty
                eight staff are employed by the school, including 22 teachers
                and 6 support staff. Currently, six new classrooms are being
                constructed, and recently TICA received the award of the best
                private school in the district, and the entire staff and student
                body were provided with a free lunch. TICA continues to benefit
                from assistance through our non-profit for student scholarships,
                ongoing construction efforts, and supplies and materials.
              </p>
            </div>

            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                How you can support
              </p>

              <ul className="mt-4 space-y-3 text-sm text-neutral-800 sm:text-base">
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                  Donate toward scholarships, supplies, and construction.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                  Volunteer your time, skills, or services.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-700" />
                  Join a mission trip to help with physical work.
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/volunteers"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
                >
                  Volunteer
                </Link>
                <a
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-900 shadow-sm transition hover:bg-emerald-50"
                >
                  Donate
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Ceiling fans project (long-term)
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                Another project provides ceiling fans to classrooms within the
                villages of Abuesi and Juaso, and surrounding villages as
                resources allow. Few of the schools, public or private, in Ghana
                have ceiling fans in the classrooms, so this is a long-term,
                ongoing project that could last for years. The fans are
                purchased in Ghana when the volunteer team arrives and are
                installed during each mission trip.
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    1) Donate toward fans
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">
                    You may choose to make a monetary donation for the purchase
                    and installation of classroom fans.
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-sm font-semibold text-neutral-900">
                    2) Join a mission trip
                  </p>
                  <p className="mt-2 text-sm text-neutral-700">
                    You may elect to join us on one of our trips to Ghana to
                    assist Mike and other volunteers with the installation at
                    the school.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Expanding partnerships — Mount Moriah Academy
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                We have expanded our partnerships through a chance meeting with
                a fellow Christian, Johnson Antwi, who is now our most recent
                board member. Johnson has family in Ghana, and his sister in
                Kumasi has opened a small school called Mount Moriah Academy.
                This school has now become one focus of our outreach efforts as
                there is a great need for expansion, infrastructure development,
                and teacher training. In keeping with our model, Mike’s efforts
                will be devoted to the physical plant, and Laura will continue
                her work with teacher training and provision of sound,
                research-based curriculum.
              </p>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
                Open to project ideas
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
                We are always open to project ideas from all our stake-holders.
                Ideal projects employ Ghanaian labor, are self-sustaining once
                completed, add to the quality of life, health, well-being, or
                financial independence of our Ghanaian partners, and alleviate
                suffering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION PLACEHOLDER */}
      <section className="border-t border-neutral-100 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="rounded-3xl border border-neutral-200 bg-white p-6 text-center shadow-sm sm:p-10">
            <h3 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
              More project stories coming next
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}
