import React from "react";

export default function EditorialSplit() {
  return (
    <section className="py-40">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="space-y-10">
          <h2 className="font-headline text-5xl md:text-6xl text-white leading-tight">
            Designed for those who demand more than &quot;Good Enough&quot;.
          </h2>
          <p className="text-xl text-on-surface-variant leading-relaxed font-body">
            In an era of mass-produced software, we choose artisanal
            engineering. Every pixel is placed with intent, every interaction
            refined for focus.
          </p>
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">
                check_circle
              </span>
              <div>
                <h4 className="text-white font-bold">Uncompromising Quality</h4>
                <p className="text-gray-500">
                  Peerless performance meets aesthetic excellence.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary mt-1">
                check_circle
              </span>
              <div>
                <h4 className="text-white font-bold">Global Scalability</h4>
                <p className="text-gray-500">
                  Deploy to 80+ regions with a single command.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] border border-white/5 shadow-2xl">
            <img
              className="w-full h-full object-cover grayscale"
              data-alt="Monochromatic vintage computer hardware stylized"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeO1CaSAp953nrnjuER2g9GDO27PUJNlVsFD0xQxv39u5HJkUPiGP8yCXFNm-f_9qlGMT0WWLMX3OWXIl0-3DNv1TkSlIyF94SbH2SNtDr55RGbOzgIaS3s96dRYjyIgGHlZK1tO-WJ-bql3-PmkS0qJNoOunc0QnQqKYyZNJSI4Fd230w7yGz99Mqth7KKUfvnuaUSuSD3Vsg0MXqgs_SusE_740HfQcJ3E5di3cW4Uk2YkMB-W_KZyiXdVfnkrJshKlXtQA66ewo"
              alt="Monochromatic vintage computer hardware stylized"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
