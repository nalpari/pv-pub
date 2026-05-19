import { Lnb } from "./_components/lnb";
import { ToolsOverlay } from "./_components/tools-overlay";

export default function PvMainPage() {
  return (
    <div className="flex h-screen bg-[#f5f7fb]">
      <Lnb />
      <main className="flex-1 relative">
        <iframe
          title="위성 지도"
          src="https://maps.google.com/maps?q=2+Chome-1-3+Kyobashi,+Chuo+City,+Tokyo&t=k&z=19&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <ToolsOverlay />
      </main>
    </div>
  );
}
