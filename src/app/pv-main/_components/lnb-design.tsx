import Image from "next/image";
import { Button, InputBox, SelectBox } from "@/components/common";
import { ChevronRight, Hint, Section } from "./lnb";
import { BaechiTip, TipPopover } from "./tip-popover";

export function LnbDesign() {
  return (
    <>
      <div
        className="flex-1 overflow-x-hidden overflow-y-auto min-h-0 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-button]:size-0 [&::-webkit-scrollbar-button]:[display:none] [&::-webkit-scrollbar-thumb]:bg-[#c4c4c4] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent"
        dir="rtl"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#c4c4c4 transparent" }}
      >
        <div className="flex flex-col gap-4 px-1 py-1" dir="ltr">
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
            <div className="flex items-center gap-2">
              <Button variant="outline" className="flex-1">
                整列配置
              </Button>
              <Button variant="outline" className="flex-1">
                千鳥配置
              </Button>
              <TipPopover>
                <BaechiTip />
              </TipPopover>
            </div>
            <Button variant="outline" className="w-full">
              モジュールの削除
            </Button>
          </div>
          <div className="flex flex-col gap-3">
            <Hint>
              ※北面への設置は日射量が少なく、発電量や経済効果が低下しやすいです. また、反射光により近隣とのトラブルにつながる可能性があるため、原則として推奨しておりません.
            </Hint>
            <Hint>
              ※本ツールは複数種類のパネルの混合配置には対応いたしません. あらかじめご了承ください.
            </Hint>
          </div>
        </Section>

        <Section
          title="ソーラーモジュール設置容量"
          iconSrc="/assets/images/contents/tab01_cont_icon04.svg"
          iconWidth={16}
          iconHeight={18}
        >
          <div className="flex items-center justify-center h-[72px] px-4 bg-[#f5f5f5] border border-[#f2f2f2] rounded-[14px]">
            <p className="text-[18px] font-medium leading-[1.5] text-[#101010]">
              17枚 · 7,480kW
            </p>
          </div>
        </Section>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button
          variant="orange"
          iconPosition="right"
          className="w-full"
          icon={<ChevronRight />}
        >
          モジュール配置完了
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
