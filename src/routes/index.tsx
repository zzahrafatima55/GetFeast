import { createFileRoute } from '@tanstack/react-router'
import heroAsset from "@/assets/radison.jpg";
import hotelAsset from "@/assets/hotel.jpg";
import dinnerAsset from "@/assets/dinner.jpg";
import shuttleAsset from "@/assets/shuttle.jpg";
import {
  GenFeatMark,
  MicrosoftMark,
  CopilotMark,
  FabricMark,
  KlayytechMark,
} from "@/components/logos";
import { RegistrationForm } from "@/components/registration-form";

const TITLE = "Accelerate AI Adoption with Microsoft Copilot & Fabric";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${TITLE} | GenFeat & Klayytech, Riyadh` },
      {
        name: "description",
        content:
          "Executive event on 16 September 2026, Radisson Hotel Riyadh Airport. Microsoft Copilot & Fabric live demos, VIP shuttle from Olaya, and dinner. Hosted by GenFeat with Klayytech.",
      },
      { property: "og:title", content: TITLE },
      {
        property: "og:description",
        content:
          "16 September 2026, 16:00-20:30 at Radisson Hotel Riyadh Airport. Copilot & Fabric live demos, VIP shuttle service and dinner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Invitation,
});

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Radisson+Hotel+Riyadh+Airport";
const HOTEL_MAP_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Radisson+Hotel+Riyadh+Airport";

const agenda: Array<{ time: string; session: string; tag?: string }> = [
  { time: "16:00 – 16:40", session: "Registration & Networking" },
  { time: "16:40 – 17:00", session: "Welcome Address by GenFeat & Event Overview" },
  { time: "17:00 – 17:30", session: "The Future of AI at Work: Microsoft Copilot Vision" },
  {
    time: "17:30 – 18:00",
    session: "Live Demo: Copilot for Microsoft 365 and Business Productivity",
    tag: "Live demo",
  },
  { time: "18:00 – 18:30", session: "Coffee & Prayer Break" },
  { time: "18:30 – 18:45", session: "Unlocking Data Intelligence with Microsoft Fabric" },
  { time: "18:45 – 19:15", session: "Live Demo: From Data to Insights using Fabric & AI", tag: "Live demo" },
  { time: "19:15 – 19:45", session: "Live Demo: Qiwam AI powered by Copilot", tag: "Live demo" },
  { time: "19:45 onwards", session: "Q&A and Dinner", tag: "Dinner" },
];

const highlights: Array<{ title: string; body: string }> = [
  {
    title: "Copilot as a daily co-worker",
    body: "AI moves from a chat window into the tools your teams already use — drafting, summarising and reasoning inside Word, Teams, Outlook and Excel.",
  },
  {
    title: "From prompts to agents",
    body: "The next wave of Copilot handles multi-step work: agents that follow business rules, act on approvals and keep a human in control.",
  },
  {
    title: "Data intelligence with Fabric",
    body: "One governed foundation for all your data, so Copilot answers from your numbers instead of generic guesses.",
  },
  {
    title: "Measurable adoption",
    body: "Practical rollout patterns: pilot groups, security and governance guardrails, and how leaders track real productivity gains.",
  },
];

function Invitation() {
  return (
    <div className="min-h-screen bg-background text-foreground">
     <header className="border-b border-border bg-card">
 <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-3 md:gap-4 md:px-6 md:py-3">
    <GenFeatMark className="h-5 w-auto sm:h-6 md:h-10" />
    <div className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:gap-2 sm:text-[10px] sm:tracking-[0.18em] md:gap-3 md:text-xs md:tracking-[0.2em]">
      in collaboration with
      <KlayytechMark className="h-4 w-auto sm:h-5 md:h-7" />
    </div>
  </div>
</header>
      <section className="relative isolate overflow-hidden">
        <img
                    src={heroAsset}
          alt="Radisson Hotel Riyadh Airport lit at dusk"
          width={1600}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 surface-ink opacity-90" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground">
            Executive Invitation
          </p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold uppercase leading-[1.05] tracking-tight text-primary-foreground md:text-6xl">
            Accelerate AI Adoption with{" "}
            <span className="text-primary brightness-150">Microsoft Copilot & Fabric</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            An afternoon-to-evening session for business and technology leaders in Riyadh —
            keynote perspectives, three live demos, VIP shuttle service and dinner.
          </p>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 sm:grid-cols-3">
            {[
              ["Date", "Wednesday, 16 September 2026"],
              ["Time", "16:00 – 20:30 (Riyadh)"],
              ["Venue", "Radisson Hotel Riyadh Airport"],
            ].map(([label, value]) => (
              <div key={label} className="bg-ink/70 p-5 backdrop-blur">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
                  {label}
                </dt>
                <dd className="mt-2 text-lg font-medium text-primary-foreground">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#register"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Register now
            </a>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              View venue location
            </a>
            <a
              href="#agenda"
              className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              See full agenda
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/60">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-6 px-6 py-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Technologies in focus
          </span>
          <div className="flex flex-wrap items-center gap-8">
            <div className="flex items-center gap-2">
              <MicrosoftMark className="h-6 w-auto" />
              <span className="text-sm font-semibold text-ink">Microsoft</span>
            </div>
            <div className="flex items-center gap-2">
              <CopilotMark className="h-7 w-auto" />
              <span className="text-sm font-semibold text-ink">Copilot</span>
            </div>
            <div className="flex items-center gap-2">
              <FabricMark className="h-7 w-auto" />
              <span className="text-sm font-semibold text-ink">Fabric</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
          Why Copilot, why now
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A grounded look at where Microsoft is taking AI at work — and what it takes to adopt it
          across a Saudi enterprise.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {highlights.map((item, i) => (
            <article
              key={item.title}
              className="card-elevated rounded-xl border border-border bg-card p-7"
            >
              <span className="font-display text-sm font-semibold text-primary">
                0{i + 1}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="agenda" className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl font-semibold uppercase tracking-tight text-primary-foreground md:text-4xl">
            Agenda
          </h2>
          <p className="mt-3 text-primary-foreground/70">16 September 2026 · 16:00 – 20:30</p>
          <ul className="mt-10 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
            {agenda.map((row) => (
              <li
                key={row.time}
                className="flex flex-col gap-1 py-5 md:flex-row md:items-center md:gap-8"
              >
                <span className="w-40 shrink-0 font-display text-lg font-semibold text-primary brightness-150">
                  {row.time}
                </span>
                <span className="flex-1 text-primary-foreground">{row.session}</span>
                {row.tag ? (
                  <span className="w-fit rounded-full border border-primary-foreground/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-foreground/70">
                    {row.tag}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              The Venue
            </h2>
            <p className="mt-4 text-lg font-medium text-ink">Radisson Hotel Riyadh Airport</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A quiet, well-connected venue with dedicated conference facilities and ample parking —
              minutes from King Khalid International Airport and easily reached from anywhere in
              Riyadh.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Open in Google Maps
              </a>
              {/* <a
                href={HOTEL_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-muted"
              >
                Hotel listing
              </a> */}
            </div>
          </div>
          <img
                        src={hotelAsset}
            alt="Entrance of the Radisson Hotel Riyadh Airport"
            width={1600}
            height={1008}
            loading="lazy"
            className="card-elevated aspect-[4/3] w-full rounded-xl object-cover"
          />
        </div>

        <div className="mt-14 grid items-center gap-10 md:grid-cols-2">
          <img
                        src={dinnerAsset}
            alt="Hotel ballroom set for a corporate dinner"
            width={1600}
            height={1008}
            loading="lazy"
            className="card-elevated aspect-[4/3] w-full rounded-xl object-cover md:order-2"
          />
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              19:45 onwards
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              Q&A and Dinner
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              The evening closes with an open Q&A with the speakers, followed by a seated dinner in
              the hotel ballroom — time to continue the conversation with peers, GenFeat specialists
              and the Klayytech team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/60 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
              Complimentary
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
              VIP Shuttle Service
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A VIP shuttle bus runs from Olaya (GenFeat Office) to the Radisson Hotel and back to
              Olaya after dinner.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <span className="font-display text-lg font-semibold text-primary">15:15</span>
                <span className="text-muted-foreground">
                  Departure from Olaya (GenFeat Office) to Radisson Hotel Riyadh Airport
                </span>
              </li>
              <li className="flex gap-3 rounded-lg border border-border bg-card p-4">
                <span className="font-display text-lg font-semibold text-primary">After dinner</span>
                <span className="text-muted-foreground">
                  Return shuttle from the hotel back to Olaya (GenFeat Office)
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Please arrive 10 minutes before departure. Seats are limited.
            </p>
          </div>
          <img
                        src={shuttleAsset}
            alt="VIP shuttle bus waiting outside an office tower in Riyadh"
            width={1600}
            height={1008}
            loading="lazy"
            className="card-elevated aspect-[4/3] w-full rounded-xl object-cover"
          />
        </div>
      </section>

      <section id="register" className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary">
          Confirm your seat
        </span>
        <h2 className="mt-2 font-display text-3xl font-semibold uppercase tracking-tight md:text-4xl">
          Registration
        </h2>
        <p className="mt-3 text-muted-foreground">
          Complete the form below to reserve your place. Please indicate if you would like a seat on
          the complimentary VIP shuttle from Olaya.
        </p>
        <div className="mt-8">
          <RegistrationForm />
        </div>
      </section>



      <footer className="surface-ink py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-between gap-8 rounded-xl bg-primary-foreground p-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Organized by
              </p>
              <GenFeatMark className="mt-2 h-10 w-auto" />
              <p className="mt-1 text-xs text-muted-foreground">
                Generation Feat for Information Technology
              </p>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                In collaboration with
              </p>
              <KlayytechMark className="mt-3 h-9 w-auto" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Powered by
              </p>
              <div className="mt-3 flex items-center gap-5">
                <MicrosoftMark className="h-7 w-auto" />
                <CopilotMark className="h-8 w-auto" />
                <FabricMark className="h-8 w-auto" />
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-primary-foreground/60">
            Radisson Hotel Riyadh Airport · 16 September 2026 · 16:00 – 20:30
          </p>
        </div>
      </footer>
    </div>
  );
}
