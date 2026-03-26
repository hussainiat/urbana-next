"use client";

import { Trophy, Award, GraduationCap, Stethoscope, Cpu, MapPin } from "lucide-react";
import AboutTemplate from "../AboutTemplate";
import Image from "next/image";
import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

const mbbs2025 = [
  {
    name: "Ranvir Sah",
    detail: "Merit 65 · CEE Entrance 2025",
    badge: "MBBS",
    image: "/images/achievements/ranvir.png",
  },
  {
    name: "Anish Kumar Sah Teli",
    detail: "Bangladesh Scholarship · MECEE 2025",
    badge: "MBBS",
    image: "/images/achievements/anish.png",
  },
];

const engineering2025 = [
  {
    name: "Raunak Karn",
    detail: "Rank 107 · Indian Embassy COMPEX Scholarship",
    badge: "IOE",
    image: "/images/achievements/raunak.png",
  },
  {
    name: "Khagendra Neupane",
    detail: "Rank 108 · IOE Engineering Entrance",
    badge: "IOE",
    image: "/images/achievements/khagendra.png",
  },
  {
    name: "Navaraj Bhandari",
    detail: "Rank 145 · IOE Engineering Entrance",
    badge: "IOE",
    image: "/images/achievements/navraaj.png",
  },
];

const mbbsScholarship = [
  { name: "Altaf Ali Ansari", detail: "Unique Homes, Rupandehi",                 badge: "MBBS", image: "/images/achievements/mbbs/altaf.png" },
  { name: "Ananta Basyal",    detail: "Padmodaya Sec., Kathmandu",               badge: "MBBS", image: "/images/achievements/mbbs/ananta.png" },
  { name: "Bibek Shrestha",   detail: "Shree Melamchi Chayang, Sindhupalchowk", badge: "MBBS", image: "/images/achievements/mbbs/bibek.png" },
  { name: "Biki Adhikari",    detail: "Om Sec. School, Rautahat",                badge: "MBBS", image: "/images/achievements/mbbs/biki.png" },
  { name: "Nirajan Bhatt",    detail: "Tribhuvan Sec. School, Rampur",           badge: "MBBS", image: "/images/achievements/mbbs/nirajan.png" },
  { name: "Sandesh Budha",    detail: "Shree Samareshi School, Banke",           badge: "MBBS", image: "/images/achievements/mbbs/sandesh.png" },
  { name: "Sunil Darnal",     detail: "Manthali Sec. School, Ramechhap",         badge: "MBBS", image: "/images/achievements/mbbs/sunil.png" },
  { name: "Sabin Tripathi",   detail: "Pragati Pathshala, Chitwan",              badge: "MBBS", image: "/images/achievements/mbbs/sabin.png" },
];

const ioeScholarship = [
  { name: "Bidhan Aryal",      detail: "Greenland High School, Kathmandu",       badge: "IOE", image: "/images/achievements/ioe/bidhan.png" },
  { name: "Chrinjibi Sejuwal", detail: "Eager Bridge H.S., Surkhet",             badge: "IOE", image: "/images/achievements/ioe/chrinjibi.png" },
  { name: "Dinesh Bam",        detail: "Laboratory Sec. School, Kathmandu",      badge: "IOE", image: "/images/achievements/ioe/dinesh.png" },
  { name: "Dipal Singh",       detail: "Shree Sec. School, Mahottari",           badge: "IOE", image: "/images/achievements/ioe/dipal.png" },
  { name: "Sasani Thapa",      detail: "Janata Sec. English S.S., Sindhuli",     badge: "IOE", image: "/images/achievements/ioe/sasani.png" },
  { name: "Junesh Adhikari",   detail: "Brilliant Academy Udayapur, Udayapur",   badge: "IOE", image: "/images/achievements/ioe/junesh.png" },
  { name: "Nishan Pachhai",    detail: "Kalika Mahaboyan S.S., Rupandehi",       badge: "IOE", image: "/images/achievements/ioe/nishan.png" },
  { name: "Prajwol Adhikari",  detail: "Charkhandi Bidhya Mandir, Bharatpur",    badge: "IOE", image: "/images/achievements/ioe/prajwol.png" },
];

// ─── Types ───────────────────────────────────────────────────────────────────

type Achiever = {
  name: string;
  detail: string;
  badge: string;
  image: string;
};

type Tab = "top-rankers" | "mbbs-scholars" | "ioe-scholars";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getInitials(name: string) {
  return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
}

// ─── Unified Achiever Card ────────────────────────────────────────────────────
//
// Same structure for all three tabs:
//   • Fixed-height photo zone (object-cover, object-top) with initials fallback
//   • Subtle rank/badge pill (top-left)
//   • Name + detail below — consistent padding
//

function AchieverCard({
  achiever,
  rank,
  detailIcon,
}: {
  achiever: Achiever;
  rank?: number;           // pass for top-rankers tab
  detailIcon?: React.ReactNode; // MapPin for scholars
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#800020]/25 transition-all duration-300 hover:-translate-y-1 flex flex-col">

      {/* ── Photo zone ── */}
      <div className="relative h-56 bg-gray-100 flex-shrink-0 overflow-hidden">

        {/* rank / badge pill */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#800020] text-white px-2.5 py-1 rounded-md text-xs font-bold font-montserrat tracking-wide shadow">
          <Trophy className="w-3 h-3" />
          {rank !== undefined ? (rank === 0 ? "Rank 1" : `Rank ${rank + 1}`) : achiever.badge}
        </div>

        {!imgError ? (
          <Image
            src={achiever.image}
            alt={achiever.name}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-[#800020]/5">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#800020] to-[#a0002a] flex items-center justify-center text-white font-montserrat font-extrabold text-2xl shadow-lg mb-2">
              {getInitials(achiever.name)}
            </div>
            <span className="text-xs text-gray-400 font-lato uppercase tracking-wider">Photo coming soon</span>
          </div>
        )}

        {/* bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
      </div>

      {/* ── Info zone ── */}
      <div className="px-5 py-4 flex flex-col gap-1 flex-1">
        <h4 className="font-montserrat font-bold text-gray-900 text-base leading-tight">
          {achiever.name}
        </h4>
        <div className="flex items-start gap-1.5 mt-0.5">
          {detailIcon && (
            <span className="mt-0.5 text-[#800020] flex-shrink-0">{detailIcon}</span>
          )}
          <p className="font-lato text-gray-500 text-sm leading-snug">
            {achiever.detail}
          </p>
        </div>
      </div>

    </div>
  );
}

// ─── Section Heading ──────────────────────────────────────────────────────────

function SectionHeading({ label, title, icon }: { label: string; title: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      <div className="inline-flex items-center gap-2 bg-[#800020]/10 text-[#800020] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 font-montserrat">
        {icon}
        {label}
      </div>
      <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
      <div className="mt-3 flex items-center gap-2">
        <div className="w-10 h-px bg-[#800020]/30" />
        <div className="w-2 h-2 rounded-full bg-[#800020]" />
        <div className="w-10 h-px bg-[#800020]/30" />
      </div>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md hover:border-[#800020]/20 transition-all duration-300">
      <div className="text-4xl font-extrabold text-[#800020] mb-2 font-montserrat">{value}</div>
      <p className="font-lato text-gray-500 text-sm leading-snug">{label}</p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<Tab>("top-rankers");

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: "top-rankers",   label: "Top Rankers",   icon: <Trophy className="w-4 h-4" /> },
    { id: "mbbs-scholars", label: "MBBS Scholars", icon: <Stethoscope className="w-4 h-4" /> },
    { id: "ioe-scholars",  label: "IOE Scholars",  icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <AboutTemplate
      title="Achievements"
      description="Celebrating our academic excellence and institutional recognition"
      icon={<Trophy className="w-8 h-8 text-[#800020]" />}
    >

      {/* ── Hero banner ── */}
      <div className="relative rounded-2xl overflow-hidden mb-16 bg-[#800020]">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "28px 28px" }}
        />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-10 py-12 md:px-14">
          <div>
            <p className="font-montserrat text-white/60 text-xs uppercase tracking-widest mb-3 font-semibold">
              First Batch · First Success
            </p>
            <h1 className="font-montserrat text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Small Batch,<br />
              <span className="text-white/65">Bigger Dreams.</span>
            </h1>
            <p className="font-lato text-white/75 max-w-md text-sm leading-relaxed">
              Our inaugural batch proved that excellence knows no bounds — top rankers in both medical and engineering entrances, with national and international scholarships.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 flex-shrink-0">
            {[
              { val: "100%", sub: "Medical Success" },
              { val: "100%", sub: "Engineering Success" },
              { val: "16+",  sub: "Scholarship Winners" },
              { val: "Top",  sub: "National Ranks" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 rounded-xl px-5 py-4 text-center border border-white/15">
                <div className="font-montserrat text-2xl font-extrabold text-white">{s.val}</div>
                <div className="font-lato text-white/60 text-xs mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab navigation ── */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-0.5">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-montserrat text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-[#800020] text-white shadow-md"
                  : "text-gray-500 hover:text-gray-800 hover:bg-white"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Tab: Top Rankers ── */}
      {activeTab === "top-rankers" && (
        <div>
          <div className="mb-14">
            <SectionHeading
              label="Medical · MBBS"
              title="Future Doctors of Nepal"
              icon={<Stethoscope className="w-3.5 h-3.5" />}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {mbbs2025.map((a, i) => (
                <AchieverCard key={i} achiever={a} rank={i} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 my-10">
            <div className="flex-1 h-px bg-gray-200" />
            <Award className="w-4 h-4 text-gray-300" />
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="mb-14">
            <SectionHeading
              label="Engineering · IOE"
              title="Future Engineers of Nepal"
              icon={<Cpu className="w-3.5 h-3.5" />}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {engineering2025.map((a, i) => (
                <AchieverCard key={i} achiever={a} rank={i} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Tab: MBBS Scholars ── */}
      {activeTab === "mbbs-scholars" && (
        <div>
          <SectionHeading
            label="MBBS Scholarship Achievers"
            title="Medical Scholarship Winners"
            icon={<Stethoscope className="w-3.5 h-3.5" />}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mbbsScholarship.map((s, i) => (
              <AchieverCard
                key={i}
                achiever={s}
                detailIcon={<MapPin className="w-3.5 h-3.5 mt-px" />}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Tab: IOE Scholars ── */}
      {activeTab === "ioe-scholars" && (
        <div>
          <SectionHeading
            label="IOE Scholarship Achievers"
            title="Engineering Scholarship Winners"
            icon={<Cpu className="w-3.5 h-3.5" />}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ioeScholarship.map((s, i) => (
              <AchieverCard
                key={i}
                achiever={s}
                detailIcon={<MapPin className="w-3.5 h-3.5 mt-px" />}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Stats ── */}
      <div className="mt-20 mb-14">
        <SectionHeading
          label="By The Numbers"
          title="Key Statistics"
          icon={<Award className="w-3.5 h-3.5" />}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <StatCard value="100%" label="Medical Entrance Success Rate" />
          <StatCard value="100%" label="Engineering Entrance Success Rate" />
          <StatCard value="16+"  label="Total Scholarship Winners" />
          <StatCard value="3"    label="International Scholarships" />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="relative bg-[#800020] rounded-2xl px-10 py-12 text-center text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-white/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/3 pointer-events-none" />
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/15 mb-5">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-3">Join Our Success Story</h2>
          <p className="font-lato mb-7 max-w-xl mx-auto text-white/80 text-base leading-relaxed">
            Be a part of our legacy of excellence. Enroll in our programs and embark on a journey towards academic success with proven results.
          </p>
          <a
            href="/admissions"
            className="inline-flex items-center gap-2 font-oswald bg-white text-[#800020] hover:bg-gray-50 px-8 py-3 rounded-lg uppercase tracking-wider transition-all duration-200 font-bold text-sm shadow-lg hover:shadow-xl"
          >
            <Trophy className="w-4 h-4" />
            Apply Now
          </a>
        </div>
      </div>

    </AboutTemplate>
  );
}