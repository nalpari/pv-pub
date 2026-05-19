import Link from "next/link";

const pages = [
  {
    href: "/ui",
    title: "공통 컴포넌트",
    description: "Button · InputBox · Checkbox · Radio · SelectBox · Toggle · DatePicker",
  },
  {
    href: "/pv-main",
    title: "PV Main",
    description: "PV 메인 화면",
  },
];

export default function Home() {
  return (
    <main className="flex-1 px-4 lg:px-16 py-8 lg:py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-foreground">pv-pub</h1>
        <p className="mt-2 text-sm text-gray-600">페이지 목록</p>
      </header>

      <nav aria-label="페이지 목록">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {pages.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                transitionTypes={["fade"]}
                className="flex flex-col gap-2 p-6 bg-white border border-gray-200 rounded-xl shadow-sm transition-colors hover:border-gray-400 hover:bg-gray-50"
              >
                <h2 className="text-lg font-semibold text-foreground">{page.title}</h2>
                <p className="text-sm text-gray-600">{page.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
