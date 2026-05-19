"use client";

import Image from "next/image";
import { useState } from "react";
import { TipPopover } from "./tip-popover";
import { LnbDesign } from "./lnb-design";
import { LnbSim } from "./lnb-sim";

type LnbTab = "design" | "sim";

export function Lnb() {
  const [tab, setTab] = useState<LnbTab>("design");
  return (
    <aside className="w-[360px] h-screen flex flex-col p-6 bg-white/85 backdrop-blur-[7px]">
      <header className="flex items-center justify-center pt-[10px] pb-[20px]">
        <Image
          src="/assets/images/common/pv_logo.svg"
          alt="Hanwha Japan PV Simulation"
          width={254}
          height={30}
          priority
        />
      </header>

      <div className="flex-1 flex flex-col gap-[34px] min-h-0">
        <nav className="flex pt-[18px]">
          <TabItem
            active={tab === "design"}
            label="ソーラーデザイン"
            iconSrc="/assets/images/contents/tab_icon01.svg"
            iconWidth={18}
            iconHeight={18}
            onClick={() => setTab("design")}
          />
          <TabItem
            active={tab === "sim"}
            label="発電シミュレーション"
            iconSrc="/assets/images/contents/tab_icon02.svg"
            iconWidth={16}
            iconHeight={16}
            onClick={() => setTab("sim")}
          />
        </nav>

        {tab === "design" ? <LnbDesign /> : <LnbSim />}
      </div>
    </aside>
  );
}

function TabItem({
  active = false,
  label,
  iconSrc,
  iconWidth,
  iconHeight,
  onClick,
}: {
  active?: boolean;
  label: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  onClick?: () => void;
}) {
  const color = active ? "#e74" : "#767676";
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex-1 flex flex-col items-center justify-center gap-2 pb-5 border-b-2 cursor-pointer"
      style={{ borderColor: color }}
    >
      <span
        className="flex items-center justify-center size-[34px] rounded-full"
        style={{ backgroundColor: color }}
      >
        <Image src={iconSrc} alt="" width={iconWidth} height={iconHeight} />
      </span>
      <span
        className={`text-[13px] leading-[1.5] ${
          active ? "font-medium" : "font-normal"
        }`}
        style={{ color }}
      >
        {label}
      </span>
    </button>
  );
}

export function Section({
  title,
  iconSrc,
  iconWidth,
  iconHeight,
  tip = false,
  children,
}: {
  title: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
  tip?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 px-5 pt-6 pb-7 bg-white rounded-[12px] drop-shadow-[0_6px_16px_rgba(0,0,0,0.05)]">
      <header className="flex items-center gap-2">
        <span className="flex items-center justify-center size-[34px] bg-[#f5f7fb] rounded-full">
          <Image src={iconSrc} alt="" width={iconWidth} height={iconHeight} />
        </span>
        <h2 className="flex-1 text-[14px] font-medium leading-[1.5] text-[#101010]">
          {title}
        </h2>
        {tip && <TipPopover />}
      </header>
      {children}
    </section>
  );
}

export function Hint({ children }: { children: React.ReactNode }) {
  return <p className="text-[12px] leading-[1.5] text-[#999]">{children}</p>;
}

export function ChevronRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
