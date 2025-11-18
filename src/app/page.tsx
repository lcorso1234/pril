"use client";

const contact = {
  header: "I ain’t doing nothing.",
  firstName: "April",
  lastName: "Mantas",
  phoneNumber: "+17083416794",
  website: "https://kingsberrywafflehouse.com/",
  poweredBy: "Kingsberry Waffle House"
};

function buildSmsUrl(phoneNumber: string, message: string) {
  if (typeof window === "undefined") return "";

  const smsBody = encodeURIComponent(message);
  const base = `sms:${phoneNumber}`;
  const isIos = /iphone|ipad|ipod/i.test(window.navigator.userAgent);

  return isIos ? `${base}&body=${smsBody}` : `${base}?body=${smsBody}`;
}

function triggerContactDownload() {
  const downloadLink = document.createElement("a");
  downloadLink.href = "/april-mantas.vcf";
  downloadLink.download = "april-mantas.vcf";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

export default function HomePage() {
  const handleSaveContact = () => {
    triggerContactDownload();

    const smsUrl = buildSmsUrl(
      contact.phoneNumber,
      "Hey Prilly! I just saved the contact and would love to connect."
    );

    if (smsUrl) {
      // Delay slightly to ensure the file download is triggered first.
      setTimeout(() => {
        window.location.href = smsUrl;
      }, 150);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 text-gray-50">
      <div className="w-full max-w-sm">
        <div className="relative rounded-[32px] bg-gradient-to-b from-white/40 to-transparent p-[1px]">
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/5 to-transparent blur-xl" />
          <article className="relative rounded-[32px] border border-white/10 bg-[#1c2127] p-8 shadow-[0px_25px_60px_rgba(0,0,0,0.6)]">
            <header className="space-y-3 text-center">
              <h1 className="text-2xl font-semibold text-white">{contact.header}</h1>
            </header>

            <div className="mt-8 space-y-1 text-center">
              <p className="text-3xl font-semibold text-white">
                {contact.firstName}{" "}
                <span className="text-white/70">{contact.lastName}</span>
              </p>
            </div>

            <div className="mt-6" />

            <button
              type="button"
              onClick={handleSaveContact}
              className="mt-8 flex w-full items-center justify-between rounded-2xl border border-[#39ff14]/40 bg-[#39ff14] px-5 py-4 font-semibold text-black shadow-[0_15px_30px_rgba(57,255,20,0.35)] transition hover:translate-y-0.5 hover:shadow-[0_12px_25px_rgba(57,255,20,0.45)] animate-jiggle"
              aria-label="Save April Mantas to contacts and text Prilly"
            >
              <span>Save contact</span>
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            <p className="mt-6 text-center text-xs text-white/60">
              Powered by {contact.poweredBy}
            </p>
            <p className="mt-2 text-center text-[11px] uppercase tracking-[0.3em] text-white/40">
              Built in America. On Earth.
            </p>
          </article>
        </div>
      </div>
    </main>
  );
}
