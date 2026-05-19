import { InputBox, SelectBox } from "@/components/common";

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
      </div>
    </main>
  );
}
