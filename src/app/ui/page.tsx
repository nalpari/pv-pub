import Image from "next/image";
import {
  Button,
  Checkbox,
  InputBox,
  Radio,
  SelectBox,
  Toggle,
} from "@/components/common";

export default function UIComponentsPage() {
  return (
    <main className="px-4 lg:px-16 py-8 lg:py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-foreground">공통 UI 컴포넌트</h1>
        <p className="mt-2 text-sm text-gray-600">
          Button · InputBox · Checkbox · Radio · SelectBox · Toggle · DatePicker
        </p>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">InputBox</h2>
          <div className="flex flex-col gap-4 w-[214px]">
            <InputBox defaultValue="2 Chome-1-3 Kyobashi, Chuo City" />
            <InputBox
              defaultValue="2 Chome-1-3 Kyobashi, Chuo City"
              withSearchIcon
            />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">SelectBox</h2>
          <div className="flex flex-col gap-4 w-[214px]">
            <SelectBox
              options={[
                { value: "1", label: "2 Chome-1-3 Kyobashi, Chuo City" },
                { value: "2", label: "Option 2" },
              ]}
            />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Radio</h2>
          <div className="flex flex-col gap-3">
            <Radio name="demo-radio" defaultChecked label="保証申請" />
            <Radio name="demo-radio" label="保証申請" />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Checkbox</h2>
          <div className="flex flex-col gap-3">
            <Checkbox defaultChecked label="保証申請" />
            <Checkbox label="保証申請" />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Toggle</h2>
          <div className="flex flex-col gap-3">
            <Toggle />
            <Toggle defaultChecked />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-foreground">Button</h2>
          <div className="flex flex-col gap-3 w-[214px]">
            <Button
              variant="primary"
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
            <Button
              variant="outline"
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
            <Button
              variant="outline"
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
              variant="orange"
              iconPosition="right"
              icon={
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
              }
              className="w-[342px]"
            >
              発電シミュレーション計算入力
            </Button>
            <Button
              variant="orange-outline"
              icon={
                <Image
                  src="/assets/images/common/btn_arr_org.svg"
                  alt=""
                  width={6}
                  height={11}
                />
              }
              iconHover={
                <Image
                  src="/assets/images/common/btn_arr.svg"
                  alt=""
                  width={6}
                  height={11}
                />
              }
              className="w-[82px]"
            >
              以前
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
