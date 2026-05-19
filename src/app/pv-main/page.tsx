import { Lnb } from "./_components/lnb";

export default function PvMainPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f7fb]">
      <Lnb />
      <main className="flex-1">
        {/* 우측 콘텐츠(지도/시뮬레이션) 영역 — 추후 작업 */}
      </main>
    </div>
  );
}
