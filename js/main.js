document.querySelectorAll(".pokedex-menu-toggle").forEach((button) => {
  const nav = button.closest(".pokedex-nav");
  const menu = document.getElementById(button.getAttribute("aria-controls"));

  if (!nav || !menu || !nav.contains(menu)) return;

  button.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.classList.add("menu-ready");
});
