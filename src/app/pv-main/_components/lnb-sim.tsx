import Image from "next/image";
import { Button, Radio, SelectBox } from "@/components/common";
import { ChevronRight, Section } from "./lnb";

export function LnbSim() {
  return (
    <>
      <div
        className="flex-1 overflow-x-hidden overflow-y-auto min-h-0 -ml-4 pl-2 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-button]:size-0 [&::-webkit-scrollbar-button]:[display:none] [&::-webkit-scrollbar-thumb]:bg-[#c4c4c4] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
        dir="rtl"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#c4c4c4 transparent" }}
      >
        <div className="flex flex-col divide-y divide-[#eef2f7]" dir="ltr">
        <Section
          title="防衛設定"
          iconSrc="/assets/images/contents/tab02_cont_icon01.svg"
          iconWidth={17}
          iconHeight={17}
        >
          <SelectBox
            defaultValue="ssw"
            options={[{ value: "ssw", label: "南南西 (SSW)" }]}
          />
          <div className="flex gap-6 items-center">
            <Compass />
            <div className="flex-1 pt-[10px] text-[12px] leading-[1.5] text-[#333]">
              <p className="mb-0">
                モジュールを載せる屋根の方位を選択してください.
              </p>
              <p>
                複数の屋根面にモジュールを設置する場合、最も広い屋根面の方位を選択してください.
              </p>
            </div>
          </div>
        </Section>

        <Section
          title="蓄電池"
          iconSrc="/assets/images/contents/tab02_cont_icon02.svg"
          iconWidth={18}
          iconHeight={12}
        >
          <p className="text-[12px] leading-[1.5] text-[#999]">
            ※太陽光で作った電気を保存しておき 必要なとき 使用するバッテリーユニットです.
          </p>
          <div className="flex gap-3">
            <Radio name="battery" defaultChecked label="あり" />
            <Radio name="battery" label="なし" />
          </div>
          <SelectBox
            defaultValue="qready"
            options={[{ value: "qready", label: "Q.READY 7.7kWh" }]}
          />
        </Section>

        <Section
          title="月平均電気料金"
          iconSrc="/assets/images/contents/tab02_cont_icon03.svg"
          iconWidth={13}
          iconHeight={16}
        >
          <div className="flex items-center h-[42px] px-4 bg-white border border-[#eff4f8] rounded-[4px]">
            <p className="flex-1 text-[16px] font-medium leading-[1.5] text-[#333] text-right">
              5,000(円)
            </p>
          </div>
        </Section>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <Button variant="orange-outline" className="w-full">
          モジュール編集に戻る
        </Button>
        <Button
          variant="orange"
          iconPosition="right"
          className="w-full"
          icon={<ChevronRight />}
        >
          発電シミュレーション計算入力
        </Button>
      </div>
    </>
  );
}

function Compass() {
  return (
    <Image
      src="/assets/images/contents/compass_img.svg"
      alt=""
      width={98}
      height={98}
      className="shrink-0"
    />
  );
}
