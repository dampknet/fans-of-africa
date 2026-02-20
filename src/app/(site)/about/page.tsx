import Image from "next/image";
import Section from "@/components/ui/section";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* HERO IMAGE */}
      <div className="relative h-[320px] w-full overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Fans of Africa mission"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Our Story & Our People
            </h1>
            <p className="mt-2 text-sm text-white/90 sm:text-base">
              Faith-driven impact through education, care, and empowerment.
            </p>
          </div>
        </div>
      </div>

      {/* MISSION + VISION */}
      <Section title="">
        {/* Centered header (single header only) */}
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Mission & Vision
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            What we believe, and where we’re going.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {/* Mission (white) */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Our Mission
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-700 sm:text-base">
              We at <strong>Fans of Africa</strong>, believe that with God there
              is no scarcity, no lack of love and compassion. There is always
              more than enough, and we are called to love one another as God has
              loved us. No one need starve, die of thirst, or live without
              mercy. There is no end to grace, and we are all instruments of
              grace. The more we share it and use it, the more God makes.
            </p>
          </div>

          {/* Vision (brand tinted) */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
              Our Vision
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-800 sm:text-base">
              Our focus is on <strong>education</strong> and the{" "}
              <strong>economic empowerment</strong> of our African partners—so
              families can thrive, communities can grow stronger, and
              opportunities can multiply for generations.
            </p>

            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {["Education", "Empowerment", "Partnership", "Sustainability"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-emerald-200 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-900"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* TEAM */}
      <Section title="">
        {/* Centered header (single header only) */}
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Our Team & Partners
          </h2>
          <p className="mt-2 text-sm text-neutral-600 sm:text-base">
            Meet the people behind the mission.
          </p>
        </div>

        <div className="mt-8 space-y-14">
          {/* Leadership / Core Team */}
          <GroupHeader title="Leadership & Outreach" />

          <div className="space-y-10">
            <Person
              img="/team/laura.jpg"
              name="Laura Orrell"
              role="President"
              reverse={false}
              text={`Laura’s first love is music, and she holds a Bachelor’s degree in Music Therapy. It was the desire to teach music that led her to her first mission trip in Ghana with her husband Mike in 2015. Mike and Laura’s first contacts were made during that trip, and upon returning home they decided to begin their own non-profit, which became Fans of Africa. Laura also holds a Master’s degree in Special Education and a Master’s degree in Education Administration, and is a certified reading therapist. While in Ghana, Laura has had the opportunity to tour many private and government schools, and to collaborate with students, teachers, and administrators. Laura and Mike try to travel to Ghana annually, and it is through these trips that new partnerships and relationships are developed. One of Laura’s favorite Bible verses comes from 1 Peter 4:10; “Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in various forms.”`}
            />

            <Person
              img="/team/mike.jpg"
              name="Mike Leinneweber"
              role="Director of Outreach"
              reverse
              text={`Mike is a skilled tradesman and has the responsibility of vetting the projects requested by our African partners, and determining the resources needed for the accepted projects. Mike is self-employed, which allows him the freedom to pursue his greatest passion, mission work. Mike is married to Laura, and they live in Lubbock, Texas. He has been in the mission field for many years and has given his time and expertise to people all over the world, including Mexico, Russia, Nigeria, South Africa, and Ghana. There is nothing that Mike can’t build or fix, and his mission work reflects this. Once projects are selected, local craftsmen are hired to do the work with materials that are sourced locally, which further lifts the community. Mike has the true heart of a servant and views his African partners as his second family. His goal is to have a ceiling fan in each classroom in the country, which supports the mission of the aptly named Fans of Africa. Mike’s favorite Bible parable is the parable of the talents found in Matthew 25:14-29. He wants to get the greatest return from the resources available.`}
            />
          </div>

          {/* Board */}
          <GroupHeader title="Board" />

          <div className="space-y-10">
            <Person
              img="/team/jerry.jpg"
              name="Jerry Graeber"
              role="Treasurer"
              reverse={false}
              text={`The Bible tells us to use our abilities to serve each other. Jerry has over 30 years of experience in the automotive industry and has used this experience to serve at his church in the Pit Stop and Trailer Ministries. The Pit Stop Ministry maintains and repairs cars for single mothers and the elderly. The Trailer ministry pulls a trailer filled with clothing and food to satellite churches to distribute these goods for those in need. Jerry met Mike Leinneweber several years ago in a Home Depot parking lot. As it turns out, they had gone to high school together in Albuquerque, New Mexico. Mike shared his Ghana mission work with Jerry, and Jerry knew that he wanted to be a part of this ministry. He lives in Rio Rancho, New Mexico. One of Jerry’s favorite verses in the Bible comes from Matthew 6: 19-21: “Do not lay up for yourselves treasures on earth, where moth and rust destroy and where thieves break in and steal, but lay up for yourselves treasures in heaven, where neither moth nor rust destroys and where thieve do not break in and steal. For where your treasure is, there your heart will be also.”`}
            />

            <Person
              img="/team/johnson.jpg"
              name="Johnson Antwi"
              role="Board Member"
              reverse
              text={`Hello, my name is Johnson Antwi. I completed my bachelor’s degree in Ghana at the Kwame Nkrumah University of Science and Technology. After completing my National Service, I moved to the United States of America for further studies where I obtained my master’s and Ph.D. It was a great blessing meeting Laura and Mike at church one day. As we got to know each other, I divulged that I have a sister living in Ghana and she runs a school. That led us to a partnership with Mt. Moriah Academy in Kumasi, where Mike and Laura have worked over the years to build and enhance the school. They have trained the teachers and added several classrooms to the existing school. Their partner Jerry purchased two buses for the school to use for their transportation. The school is now thriving. It’s my pleasure to serve and to share hope with the hopeless. Favorite scripture: 1st Corinthians 4:7 GNT “Who made you superior to others? Didn’t God give you everything you have? Well, then, how can you boast, as if what you have were not a gift?”`}
            />

             <Person
              img="/team/samuel.jpg"
              name="Samuel Essandoh"
              role="Coordinator"
              reverse={false}
              text={`Samuel takes creativity to heart and makes sure it reflects in all aspects of his life. He is ambitious and dedicated to learning anything that gives him the safe space to create and improvise.   Samuel enjoys playing piano to express himself and directing a choir training singers to sing soothing songs. Samuel has a bachelor’s degree in integrated arts in industry from the Kwame Nkrumah University of Science and Technology with a major in metal engineering. He went on to take a diploma course in computer aided design and manufacturing. Initially, Fans of Africa involved Samuel as their host for the 2024, 2025 and 2026 visits to Ghana. Samuel uses his skills and computer abilities to simplify and modernize administrative tasks that take place as projects are planned. He coordinates the projects by mediating deals between Fans of Africa and local workers. He works directly with Mike and Laura by laying the groundwork for the projects before they arrive and coordinating the work as it takes place. Samuel ensures that Mike and Laura’s visits are pleasant and successful right from the gates of arrival to the gates of departure, as he also serves as their driver and host. Favorite scripture, 1st Peter 5:7 "Cast all your anxiety on him because he cares for you".`}
            />

          </div>

          {/* Teaching Interventionists */}
          <GroupHeader title="Teaching Interventionists" subtitle="Reading specialists and instructional support" />

          <div className="space-y-10">
            <Person
              img="/team/emmanuel.jpg"
              name="Nana Awere Quame (Emmanuel Agyapong)"
              role="Teaching Staff"
              reverse
              text={`Emmanuel was born on a Saturday; thus, according to Ghana tradition, he was given the name Kwame for his name, according to the day he was born. He was also named after a Chief whose name was Nana Awere Kwame Nti. Emmanuel is the fourth and last born of four children, and his parents are Cecilia Yaa Achiaah and Charles Kwabena Mensah Asiamah. His father was a traditional musician, and Emmanuel has the gift of a beautiful singing voice. Emmanuel attended the University of Cape Coast. He pursued Diploma in Basic  Education from 2015 -18 further attained a Degree 2019-2021 (English and Social studies). He persue a switch program in 2024 and attain another Degree 2024-2025 (English and Twi). Currently, He is  Pursuing Masters in Education (English Language) 2025- 2026. Emmanuel states that “I am a teacher because I have a passion for it. Just like insects are attracted to flowers, children are attracted to me, irrespective of any weakness. I become worried if I see children with reading difficulties, and I am challenged to fix and repair the breakdown. Sometimes it seems impossible, but I am motivated by the fact that the word impossible is also read as I’m possible with just an addition of a punctuation mark. I am happy that I have become the punctuation mark for children with reading difficulties. Since my eyes are healthy, my whole body is full of light”.`}
            />

            <Person
              img="/team/ebenezer.jpg"
              name="Ebenezer Acquah"
              role="Teaching Interventionist"
              reverse={false}
              text={`Ebenezer Acquah is a young Ghanaian teacher with a passion for the teaching
                    profession. He obtained a Diploma in Psychology and Foundations of Education
                    in 2014 at the University of Cape Coast. He is also a writer and has several
                    collections, including Tolinka Tournament- (the 99th Edition: ‘Memento Mori’),
                    The Burning Temple, The Poverty Tree, and A Heat from the Fireside
                    (Anthology), etc. He was an occasional participant in the Commonwealth Writers'
                    Competitions. In 2010-2013, he founded the Reading Club Magazine - a monthly
                    newsletter that promoted reading among students.
                    Ebenezer loves to work with learners and figure out the barriers that affect them,
                    and design strategies to unlock the puzzle. He is result-oriented and is always
                    working hard to make a great impact wherever he finds himself.
                    One of my favourite Bible Quotes: Philippians 4:13 “I can do all things through
                    Christ that strengthens me.”`
                  }
            />

            <Person
              img="/team/isaac.jpg"
              name="Isaac Nkrumah"
              role="Teaching Interventionist"
              reverse
              text={`Isaac Nkrumah is an experienced and devoted educator who has taught at Kandit Standard School for over 12 years. He holds a Diploma in Special Education from the University of Education, Winneba, specializing in Community-Based Rehabilitation and Disability Studies, and a Diploma in Education from the University of Buckingham International. He is a trained Phono-Graphix instructor and a Reading Specialist with Fans of Africa. His teaching philosophy is centered on supporting learners with reading difficulties, building their confidence, and ensuring that every child, regardless of ability, develops strong literacy skills and becomes a valued member of the community.
Isaac believes that with the right instructional approach and encouragement, every child can become a confident reader.`}
            />

            <Person
              img="/team/joseph.jpg"
              name="Joseph Baidoo"
              role="Teaching Interventionist"
              reverse={false}
              text={`Joseph Baidoo is a passionate and dedicated educator with nine years of teaching experience at Kandit Standard School. He holds a Bachelor of Education (B.Ed.) degree from the University of Cape Coast (UCC), where he specialized in English Language and Twi (Akan). Joseph is a trained Phono-Graphix instructor and a reading specialist with Fans of Africa, focusing on supporting learners, particularly those who struggle with reading and spelling, to build confidence and strong foundational skills. His teaching philosophy is that every child can learn when given the right support, encouragement, and teaching approach. He strives to create a classroom environment where learners feel valued, motivated, and empowered to achieve academic success.`}
            />

          </div>
        </div>
      </Section>
    </div>
  );
}

function GroupHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-6xl text-center">
      <h3 className="text-xl font-semibold tracking-tight text-neutral-900 sm:text-2xl">
        {title}
      </h3>
      {subtitle ? (
        <p className="mt-2 text-sm text-neutral-600 sm:text-base">{subtitle}</p>
      ) : null}
      <div className="mx-auto mt-5 h-px w-24 bg-neutral-200" />
    </div>
  );
}

/* Alternating Person Card + centered image (no hanging look) */
function Person({
  img,
  name,
  role,
  text,
  reverse = false,
}: {
  img: string;
  name: string;
  role: string;
  text: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md",
        "p-7 sm:p-8 lg:p-10",
        "flex flex-col gap-7 lg:items-stretch",
        reverse ? "lg:flex-row-reverse" : "lg:flex-row",
      ].join(" ")}
    >
      {/* Image block (centered so it never looks like it's hanging) */}
      <div className="flex shrink-0 items-center justify-center">
        <div className="relative h-[300px] w-full overflow-hidden rounded-2xl sm:h-[340px] lg:h-[360px] lg:w-[340px]">
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover object-[50%_47%]"
          />
        </div>
      </div>

      {/* Text block */}
      <div className="min-w-0">
        <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {name}
        </h3>
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-emerald-700">
          {role}
        </p>

        <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-neutral-700 sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
