const bottomNavigation = `
  <nav class="mobile-bottom-nav" aria-label="Navegação principal">
    <a href="index.html" data-route="index.html"><span>⌂</span><small>Início</small></a>
    <a href="courses.html" data-route="courses.html"><span>▣</span><small>Cursos</small></a>
    <a href="dashboard.html" data-route="dashboard.html"><span>◔</span><small>Progresso</small></a>
    <a href="login.html" data-route="login.html"><span>◯</span><small>Perfil</small></a>
  </nav>`;

document.addEventListener("DOMContentLoaded", () => {
  if (!document.querySelector('link[rel="manifest"]')) {
    const manifest = document.createElement("link");
    manifest.rel = "manifest";
    manifest.href = "manifest.webmanifest";
    document.head.appendChild(manifest);
  }

  if (!document.querySelector('meta[name="theme-color"]')) {
    const themeColor = document.createElement("meta");
    themeColor.name = "theme-color";
    themeColor.content = "#009739";
    document.head.appendChild(themeColor);
  }

  document.body.insertAdjacentHTML("beforeend", bottomNavigation);
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelector(`[data-route="${page}"]`)?.classList.add("is-active");
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
});
