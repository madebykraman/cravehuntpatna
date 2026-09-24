import queue from "../../data/recheck-queue-2026-09-24.json";

export default function ResearchQueue() {
  const priority = { high: "HIGH", medium: "MEDIUM", low: "LOW" } as const;

  return (
    <main style={{ minHeight: "100vh", padding: "48px 6vw", background: "#f4efe8", color: "#191714", fontFamily: "Arial, sans-serif" }}>
      <header style={{ maxWidth: 980, margin: "0 auto 42px" }}>
        <p style={{ letterSpacing: ".14em", fontSize: 12, fontWeight: 700 }}>CRAVE HUNT · RESEARCH OPERATIONS</p>
        <h1 style={{ fontSize: "clamp(42px, 7vw, 88px)", lineHeight: .95, margin: "14px 0" }}>What needs<br /><em>checking?</em></h1>
        <p style={{ maxWidth: 680, fontSize: 18, lineHeight: 1.55, opacity: .7 }}>
          An editorial queue for claims that can change. Historical evidence stays in the archive; this queue tells the researcher what deserves another look.
        </p>
      </header>

      <section style={{ maxWidth: 980, margin: "0 auto" }}>
        <div style={{ display: "grid", gap: 14 }}>
          {queue.items.map((item) => (
            <article key={item.id} style={{ background: "#fff", border: "1px solid #ddd5ca", borderRadius: 18, padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start" }}>
                <div>
                  <small style={{ letterSpacing: ".1em", fontWeight: 700 }}>{priority[item.priority as keyof typeof priority]} · {item.type.replace("_", " ")}</small>
                  <h2 style={{ margin: "8px 0", fontSize: 24 }}>{item.entity}</h2>
                  <p style={{ margin: 0, lineHeight: 1.55, opacity: .72 }}>{item.reason}</p>
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" }}>{item.id}</span>
              </div>
              <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid #e8e1d8" }}>
                <b>Next action</b>
                <p style={{ margin: "6px 0 0", opacity: .72 }}>{item.next_action}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer style={{ maxWidth: 980, margin: "42px auto 0", opacity: .55, fontSize: 13 }}>
        Queue generated {queue.generated_at}. Community signals are not automatically facts. Contradictions are preserved rather than silently resolved.
      </footer>
    </main>
  );
}
