
"use client";

import { useState } from "react";

const members = [
  { name: "𝐈𝐛𝐫𝐚𝐡𝐢𝐦 𝐀𝐛𝐝𝐞𝐥𝐡𝐚𝐦𝐞𝐞𝐝", rank: "Boss" },
  { name: "𝐉𝐨𝐬𝐞𝐩𝐡", rank: "Co-Boss" },
  { name: "𝐋𝐚𝐲𝐥𝐚 𝐂𝐡𝐚𝐢𝐛𝐢", rank: "High Command" },
    { name: "𝐋𝐢𝐧𝐜𝐨𝐥𝐧", rank: "High Command" },
 { name: "𝐀𝐛𝐝𝐨", rank: "Member" },
{ name: "𝐌𝐮𝐬𝐭𝐚𝐟𝐚", rank: "Member" },
{ name: "𝐌𝐮𝐬𝐭𝐚𝐟𝐚", rank: "Member" },
];

const creators = [
  { name: "Creator 01", platform: "YouTube / TikTok" },
  { name: "Creator 02", platform: "Twitch / YouTube" },
];

export default function Home() {
  const [section, setSection] = useState("home");
  const [sent, setSent] = useState(false);

  const nav = [
    ["home", "الرئيسية"],
    ["members", "الأفراد والرتب"],
    ["creators", "صناع المحتوى"],
    ["apply", "التقديمات"],
  ];

  return (
    <main dir="rtl" className="min-h-screen bg-[#080808] text-white">
      <header className="sticky top-0 z-20 border-b border-red-900/40 bg-black/95">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 p-5">
          <h1 className="text-3xl font-black tracking-widest text-red-600">
            DEMON'S
          </h1>
          <nav className="flex flex-wrap gap-2">
            {nav.map(([id, label]) => (
              <button
                key={id}
                onClick={() => {
                  setSection(id);
                  setSent(false);
                }}
                className={`rounded-lg px-4 py-2 text-sm ${
                  section === id
                    ? "bg-red-700 text-white"
                    : "bg-zinc-900 hover:bg-red-950"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {section === "home" && (
        <section className="flex min-h-[75vh] flex-col items-center justify-center px-5 text-center">
          <p className="mb-4 text-sm tracking-[0.4em] text-red-500">
            THE FAMILY • THE LEGACY
          </p>
          <h2 className="text-6xl font-black md:text-8xl">
            DEMON'S
          </h2>
          <p className="mt-5 max-w-xl text-zinc-400">
            عيلة الشياطين — القوة، الولاء، وصناعة التاريخ.
            المكان الرسمي لأفراد العيلة والتقديمات وصناع المحتوى.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSection("apply")}
              className="rounded-xl bg-red-700 px-7 py-3 font-bold hover:bg-red-600"
            >
              قدّم للانضمام
            </button>
            <button
              onClick={() => setSection("members")}
              className="rounded-xl border border-red-800 px-7 py-3 font-bold hover:bg-red-950"
            >
              اكتشف أفراد العيلة
            </button>
          </div>
        </section>
      )}

      {section === "members" && (
        <section className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="mb-3 text-4xl font-black">
            الأفراد <span className="text-red-600">والرتب</span>
          </h2>
          <p className="mb-8 text-zinc-400">
            قيادة وأفراد عيلة DEMON'S
          </p>
         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, i) => (
              <article
                key={i}
                className="rounded-2xl border border-red-950 bg-zinc-950 p-6 text-center"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-red-700 bg-red-950 text-3xl font-black">
                  D
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="mt-2 text-sm text-red-500">{member.rank}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {section === "creators" && (
        <section className="mx-auto max-w-7xl px-5 py-16">
          <h2 className="mb-3 text-4xl font-black">
            Content <span className="text-red-600">Creators</span>
          </h2>
          <p className="mb-8 text-zinc-400">
            صناع المحتوى الرسميون لعيلة الشياطين
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {creators.map((creator, i) => (
              <article
                key={i}
                className="rounded-2xl border border-red-950 bg-zinc-950 p-7"
              >
                <h3 className="text-xl font-bold">{creator.name}</h3>
                <p className="mt-3 text-red-500">{creator.platform}</p>
                <p className="mt-3 text-sm text-zinc-500">
                  أضف روابط قنوات صانع المحتوى هنا.
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {section === "apply" && (
        <section className="mx-auto max-w-2xl px-5 py-16">
          <h2 className="mb-3 text-center text-4xl font-black">
            التقديمات <span className="text-red-600">DEMON'S</span>
          </h2>
          <p className="mb-8 text-center text-zinc-400">
            املأ البيانات التالية لإرسال طلب الانضمام.
          </p>

          {sent ? (
            <div className="rounded-2xl border border-green-800 bg-zinc-950 p-8 text-center">
              <h3 className="text-2xl font-bold text-green-500">
                تم تسجيل الطلب تجريبيًا
              </h3>
              <p className="mt-3 text-zinc-400">
                يلزم ربط قاعدة بيانات لحفظ الطلبات فعليًا.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-5 rounded-lg bg-red-700 px-5 py-3"
              >
                طلب جديد
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5 rounded-2xl border border-red-950 bg-zinc-950 p-6"
            >
              <label className="block">
                <span className="mb-2 block">الاسم داخل السيرفر</span>
                <input
                  required
                  className="w-full rounded-lg border border-zinc-800 bg-black p-3 outline-none focus:border-red-600"
                  placeholder="اكتب اسمك"
                />
              </label>

              <label className="block">
                <span className="mb-2 block">Discord ID أو اسم المستخدم</span>
                <input
                  required
                  className="w-full rounded-lg border border-zinc-800 bg-black p-3 outline-none focus:border-red-600"
                  placeholder="Discord"
                />
              </label>

              <label className="block">
                <span className="mb-2 block">نوع التقديم</span>
                <select
                  className="w-full rounded-lg border border-zinc-800 bg-black p-3"
                  defaultValue="member"
                >
                  <option value="member">عضو جديد</option>
                  <option value="admin">الإدارة</option>
                  <option value="creator">صانع محتوى</option>
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block">العمر والخبرة في RP</span>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-lg border border-zinc-800 bg-black p-3 outline-none focus:border-red-600"
                  placeholder="اكتب بياناتك وخبرتك..."
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-red-700 p-4 font-bold hover:bg-red-600"
              >
                إرسال طلب التقديم
              </button>
            </form>
          )}
        </section>
      )}

      <footer className="border-t border-red-950 px-5 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} DEMON'S FAMILY — ALL RIGHTS RESERVED
      </footer>
    </main>
  );
}
