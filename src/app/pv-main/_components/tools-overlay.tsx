"use client";

import Image from "next/image";
import { useState } from "react";

type ToolKey =
  | "select"
  | "create"
  | "obstacle"
  | "flow"
  | "edit"
  | "removeSelected"
  | "removeAll"
  | "back"
  | "done";

const TOOLS: { key: ToolKey; label: string; tip: string }[] = [
  {
    key: "select",
    label: "選択/移動",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
  {
    key: "create",
    label: "屋根作成",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
  {
    key: "obstacle",
    label: "障害物の作成",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
  {
    key: "flow",
    label: "フロー設定",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
  {
    key: "edit",
    label: "屋根の編集",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
  {
    key: "removeSelected",
    label: "屋根面選択を削除",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
  {
    key: "removeAll",
    label: "屋根面全体削除",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
  {
    key: "back",
    label: "戻る",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
  {
    key: "done",
    label: "作成完了",
    tip: "クリックで選択/解除ㅣドラッグに移動ㅣ複数の場合、クリックを重複選択ㅣ空の場所クリックで完全解除",
  },
];

export function ToolsOverlay() {
  const [active, setActive] = useState<ToolKey | null>("create");

  const handleClick = (key: ToolKey) => {
    setActive((prev) => (prev === key ? null : key));
  };

  const activeTip = TOOLS.find((t) => t.key === active)?.tip;

  return (
    <div className="absolute top-25 left-1/2 -translate-x-1/2 z-10 flex flex-col items-start drop-shadow-[0_6px_16px_rgba(0,0,0,0.05)]">
      <div className="flex items-start gap-px">
        <div className="bg-white flex items-start p-[10px] rounded-[14px]">
          <button
            type="button"
            aria-label="選択/移動 モード"
            className="bg-white flex items-center justify-center rounded-[6px] size-[32px] cursor-pointer"
          >
            <Image
              src="/assets/images/contents/move_tool_icon.svg"
              alt=""
              width={16}
              height={16}
            />
          </button>
        </div>

        <div className="bg-white flex items-start gap-2 p-[10px] rounded-[14px]">
          {TOOLS.map((t) => (
            <ToolButton
              key={t.key}
              active={t.key === active}
              onClick={() => handleClick(t.key)}
            >
              {t.label}
            </ToolButton>
          ))}
        </div>
      </div>

      <div
        className={`mt-2 ml-[53px] w-[845px] h-[52px] bg-[#1190fc] flex flex-col items-center justify-center px-[18px] rounded-[14px] transition-all duration-200 ease-out ${
          active
            ? "opacity-95 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!active}
      >
        <p className="font-medium text-[13px] leading-[1.5] text-white text-center whitespace-nowrap">
          {activeTip ?? ""}
        </p>
      </div>
    </div>
  );
}

function ToolButton({
  active = false,
  children,
  onClick,
}: {
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const cls = active
    ? "bg-[#1190fc] text-white font-medium border border-transparent"
    : "bg-[#fbfbfb] border border-[#f5f5f5] text-[#333] font-normal hover:bg-white";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex h-[32px] items-center justify-center px-[12px] rounded-[6px] text-[12px] leading-[1.5] whitespace-nowrap cursor-pointer transition-colors ${cls}`}
    >
      {children}
    </button>
  );
}

