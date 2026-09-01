import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Presell — Página de Vendas" },
      {
        name: "description",
        content:
          "Página de presell estática pronta para receber o conteúdo do funil de vendas.",
      },
      { property: "og:title", content: "Presell — Página de Vendas" },
      {
        property: "og:description",
        content:
          "Página de presell estática pronta para receber o conteúdo do funil de vendas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Presell,
});

function Presell() {
  return (
    <main className="bg-presell relative min-h-screen w-full overflow-hidden">
      {/* brilho suave no topo, mantendo o degradê verde profundo da referência */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, var(--green-soft) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-6 py-24 text-center" />
    </main>
  );
}
