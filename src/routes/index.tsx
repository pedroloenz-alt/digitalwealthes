import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evaluador SoundRate" },
      {
        name: "description",
        content:
          "Página de presell estática pronta para receber o conteúdo do funil de vendas.",
      },
      { property: "og:title", content: "Evaluador SoundRate" },
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
    <main className="bg-presell h-screen w-screen overflow-hidden">
      {/* conteúdo da presell (HTML estático do funil) renderizado em tela cheia */}
      <iframe
        src="/presell/index-es.html"
        title="Presell SoundRate"
        className="h-full w-full border-0"
        allow="autoplay; clipboard-write"
      />
    </main>
  );
}
