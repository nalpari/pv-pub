import Image from "next/image";
import {
  Button,
  InputBox,
  SelectBox,
  Toggle,
} from "@/components/common";

export function Lnb() {
  return (
    <aside className="w-[360px] min-h-screen flex flex-col px-6 pb-6 bg-white/98 backdrop-blur-[4px]">
      <header className="flex items-center justify-center py-[30px]">
        <Image
          src="/assets/images/common/pv_logo.svg"
          alt="Hanwha Japan PV Simulation"
          width={254}
          height={30}
          priority
        />
      </header>

      <div className="flex-1 flex flex-col gap-7">
        <nav className="flex pt-[18px]">
          <TabItem
            active
            label="ソーラーデザイン"
            iconSrc="/assets/images/contents/tab_icon01.svg"
            iconWidth={18}
            iconHeight={18}
          />
          <TabItem
            label="発電シミュレーション"
            iconSrc="/assets/images/contents/tab_icon02.svg"
            iconWidth={16}
            iconHeight={16}
          />
        </nav>

        <div className="flex-1 flex flex-col gap-6 pb-[44px]">
          <Section
            title="モジュール配置"
            iconSrc="/assets/images/contents/tab01_cont_icon01.svg"
            iconWidth={14}
            iconHeight={16}
          >
            <div className="flex flex-col gap-2">
              <InputBox
                defaultValue="2 Chome-1-3 Kyobashi,  Chuo City"
                withSearchIcon
              />
              <Button
                variant="primary"
                className="w-full"
                icon={
                  <Image
                    src="/assets/images/common/btn_icon01.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                }
              >
                建物確定
              </Button>
            </div>
            <Hint>
              ※太陽光モジュールを設置する屋根がよく見えるように 範囲を調整して確定します.
            </Hint>
          </Section>

          <Section
            title="屋根面傾斜"
            iconSrc="/assets/images/contents/tab01_cont_icon02.svg"
            iconWidth={16}
            iconHeight={16}
            tip
          >
            <SelectBox
              defaultValue="4"
              options={[{ value: "4", label: "4寸" }]}
            />
          </Section>

          <Section
            title="モジュール配置"
            iconSrc="/assets/images/contents/tab01_cont_icon03.svg"
            iconWidth={14}
            iconHeight={16}
          >
            <div className="flex flex-col gap-2">
              <SelectBox
                defaultValue="rerize"
                options={[{ value: "rerize", label: "Re-RIZE-G3 440" }]}
              />
              <div className="flex items-center h-[42px] pl-4 pr-2 bg-white border border-[#eff4f8] rounded-[4px]">
                <span className="flex-1 text-[13px] leading-[1.5] text-[#333]">
                  千鳥バッチを使う
                </span>
                <Toggle />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  icon={
                    <Image
                      src="/assets/images/common/btn_icon03_blue.svg"
                      alt=""
                      width={14}
                      height={16}
                    />
                  }
                  iconHover={
                    <Image
                      src="/assets/images/common/btn_icon03.svg"
                      alt=""
                      width={14}
                      height={16}
                    />
                  }
                >
                  モジュールの削除
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  icon={
                    <Image
                      src="/assets/images/common/btn_icon02_blue.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  }
                  iconHover={
                    <Image
                      src="/assets/images/common/btn_icon02.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  }
                >
                  モジュール配置
                </Button>
              </div>
            </div>
            <Hint>※北屋根面は日光が少なく設置を推奨しません ではありません.</Hint>
          </Section>

          <Section
            title="ソーラーモジュール設置容量"
            iconSrc="/assets/images/contents/tab01_cont_icon04.svg"
            iconWidth={16}
            iconHeight={18}
          >
            <div className="flex items-center justify-center h-[72px] px-4 bg-white border border-[#f2f2f2] rounded-[14px] drop-shadow-[0_6px_16px_rgba(0,0,0,0.05)]">
              <p className="text-[18px] font-medium leading-[1.5] text-[#101010]">
                17枚 · 7,480kW
              </p>
            </div>
          </Section>
        </div>

        <Button
          variant="orange"
          iconPosition="right"
          className="w-full"
          icon={<ChevronRight />}
        >
          発電シミュレーション計算入力
        </Button>
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
}: {
  active?: boolean;
  label: string;
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
}) {
  const color = active ? "#e74" : "#767676";
  return (
    <button
      type="button"
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

function Section({
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
    <section className="flex flex-col gap-4">
      <header className="flex items-center gap-2">
        <span className="flex items-center justify-center size-[34px] bg-[#f5f7fb] rounded-full">
          <Image src={iconSrc} alt="" width={iconWidth} height={iconHeight} />
        </span>
        <h2 className="flex-1 text-[14px] font-medium leading-[1.5] text-[#101010]">
          {title}
        </h2>
        {tip && <TipIcon />}
      </header>
      {children}
    </section>
  );
}

function Hint({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[12px] leading-[1.5] text-[#999]">{children}</p>
  );
}

function TipIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.4" />
      <path
        d="M8 7v4M8 5.2v.1"
        stroke="#999"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronRight() {
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
