"use client";

import Image from "next/image";
import { useState } from "react";

export function TipPopover({ children }: { children?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-flex shrink-0"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Image
        src={
          open
            ? "/assets/images/contents/tooltip_on.svg"
            : "/assets/images/contents/tooltip.svg"
        }
        alt="툴팁"
        width={16}
        height={16}
      />
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 z-10 pb-3 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {children ?? <HouseTip />}
      </div>
    </span>
  );
}

function HouseTip() {
  return (
    <div className="relative w-[338px] bg-white border border-[#36a] rounded-[4px] px-[18px] py-[24px]">
      <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 block size-2 bg-white border-b border-l border-[#36a] rotate-[-45deg]" />
      <div className="flex gap-3 items-end justify-center">
        <RoofItem
          src="/assets/images/contents/tooltip_cont01.svg"
          width={76}
          height={48}
          label="緩やかな屋根(約3寸)"
        />
        <RoofItem
          src="/assets/images/contents/tooltip_cont02.svg"
          width={75}
          height={48}
          label="標準屋根(約4寸)"
        />
        <RoofItem
          src="/assets/images/contents/tooltip_cont03.svg"
          width={77}
          height={48}
          label="やや急な屋根(約6寸)"
        />
      </div>
    </div>
  );
}

function RoofItem({
  src,
  width,
  height,
  label,
}: {
  src: string;
  width: number;
  height: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image src={src} alt="" width={width} height={height} />
      <p className="text-[11px] leading-normal text-[#333] text-center -tracking-[0.33px] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}

export function BaechiTip() {
  return (
    <div className="relative w-[222px] bg-white border-2 border-[#36a] rounded-[4px] p-6">
      <span className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 block size-2 bg-white border-b-2 border-l-2 border-[#36a] rotate-[-45deg]" />
      <div className="flex flex-col gap-[18px] items-start">
        <div className="text-[11px] leading-normal text-[#333] -tracking-[0.33px]">
          <p className="font-medium">千鳥配置</p>
          <p>太陽光パネルをレンガのように、</p>
          <p>一列ずつずらして並べる方法</p>
        </div>
        <Image
          src="/assets/images/contents/baechi_tip.svg"
          alt=""
          width={174}
          height={80}
        />
      </div>
    </div>
  );
}
