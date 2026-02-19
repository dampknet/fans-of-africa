import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import Link from "next/link";

const PAYPAL_LINK =
  "https://www.paypal.com/donate/?hosted_button_id=CL4Y7MPAV7CHS";

export default function DonatePage() {
  return (
    <>
      {/* HERO */}
      <Section
        title="Support the Mission"
        subtitle="Your generosity fuels education, teacher training, and sustainable development in Ghana."
      >
        <div className="mx-auto max-w-3xl text-center text-neutral-600 text-sm sm:text-base">
          Every dollar given supports real work on the ground — classroom
          construction, teacher training, scholarships, infrastructure, and
          long-term partnerships.&quot;501(c)3&quot;
        </div>
      </Section>

      {/* DONATION OPTIONS */}
      <Section title="" subtitle="">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* ONE-TIME */}
          <Card
            title="One-Time Donation"
            desc="Make an immediate impact with a single contribution."
          >
            <div className="mt-4 grid grid-cols-3 gap-2">
              {["25", "50", "100", "250", "500", "1000"].map((a) => (
                <Link
                  key={a}
                  href={PAYPAL_LINK}
                  target="_blank"
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-center text-sm font-medium transition hover:border-emerald-400 hover:bg-emerald-50"
                >
                  ${a}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Button href={PAYPAL_LINK} variant="primary">
                Donate Securely
              </Button>
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              You will be redirected to our secure PayPal donation page.
            </p>
          </Card>

          {/* MONTHLY */}
          <Card
            title="Monthly Support"
            desc="Provide consistent support for long-term impact."
          >
            <p className="text-sm text-neutral-600">
              Monthly giving helps us plan construction, training programs, and
              scholarships with confidence and stability.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2">
              {["15", "30", "75"].map((a) => (
                <Link
                  key={a}
                  href={PAYPAL_LINK}
                  target="_blank"
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-center text-sm font-medium transition hover:border-emerald-400 hover:bg-emerald-50"
                >
                  ${a}/mo
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Button href={PAYPAL_LINK} variant="primary">
                Start Monthly Giving
              </Button>
            </div>

            <p className="mt-3 text-xs text-neutral-500">
              Managed securely through PayPal.
            </p>
          </Card>

          {/* WHERE FUNDS GO */}
          <Card
            title="Where Your Donation Goes"
            desc="Transparency builds trust."
          >
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              <li className="flex gap-2">
                <span className="h-2 w-2 mt-2 rounded-full bg-emerald-600" />
                Classroom construction & expansion
              </li>
              <li className="flex gap-2">
                <span className="h-2 w-2 mt-2 rounded-full bg-emerald-600" />
                Teacher training & curriculum resources
              </li>
              <li className="flex gap-2">
                <span className="h-2 w-2 mt-2 rounded-full bg-emerald-600" />
                Student scholarships & supplies
              </li>
              <li className="flex gap-2">
                <span className="h-2 w-2 mt-2 rounded-full bg-emerald-600" />
                Infrastructure improvements (fans, transport, equipment)
              </li>
            </ul>

            <div className="mt-6">
              <Button href={PAYPAL_LINK} variant="secondary">
                Give Now
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      {/* TRUST / FAQ */}
      <Section
        title="Donation FAQ"
        subtitle="Clear answers to build confidence."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card
            title="Is my donation secure?"
            desc="Yes. All payments are processed securely through PayPal’s encrypted system."
          />

          <Card
            title="Will I receive confirmation?"
            desc="Yes. PayPal provides a receipt immediately after your donation."
          />

          <Card
            title="Can I donate in honor of someone?"
            desc="Yes. You can include notes directly within the PayPal donation form."
          />

          <Card
            title="Can I support a specific project?"
            desc="Yes. Include the project name in the PayPal notes section when donating."
          />
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section title="" subtitle="">
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center shadow-sm">
          <h3 className="text-xl font-semibold text-emerald-900 sm:text-2xl">
            Thank you for partnering with us.
          </h3>
          <p className="mt-2 text-sm text-emerald-900/80">
            Your generosity strengthens communities, equips teachers, and opens
            doors for students.
          </p>

          <div className="mt-6">
            <Button href={PAYPAL_LINK} variant="primary">
              Continue to Secure Donation
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
