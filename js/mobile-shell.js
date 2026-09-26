const bottomNavigation = `
  <nav class="mobile-bottom-nav" aria-label="Navegação principal">
    <a href="index.html" data-route="index.html"><span>⌂</span><small>Início</small></a>
    <a href="courses.html" data-route="courses.html"><span>▣</span><small>Cursos</small></a>
    <a href="dashboard.html" data-route="dashboard.html"><span>◔</span><small>Progresso</small></a>
    <a href="login.html" data-route="login.html"><span>◯</span><small>Perfil</small></a>
  </nav>`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("beforeend", bottomNavigation);
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelector(`[data-route="${page}"]`)?.classList.add("is-active");
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
});
