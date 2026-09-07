import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lead,
  image,
  compact,
}: {
  kicker?: string;
  title: string;
  lead?: string;
  image?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden bg-espresso",
        compact ? "min-h-[46vh] pt-28 pb-12" : "min-h-[62vh] pt-32 pb-16",
      )}
    >
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover"
          style={{ outline: "none" }}
        />
      ) : null}
      <div className="absolute inset-0 bg-espresso/62" />
      <div className="container-site relative z-10">
        {kicker ? <p className="eyebrow text-copper-bright">{kicker}</p> : null}
        <h1 className="display-lg mt-4 max-w-3xl text-ivory">{title}</h1>
        {lead ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sand md:text-lg">
            {lead}
          </p>
        ) : null}
      </div>
    </section>
  );
}
