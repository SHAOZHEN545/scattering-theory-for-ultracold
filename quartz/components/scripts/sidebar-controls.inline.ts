const narrowLayout = window.matchMedia("(max-width: 1200px)")
const mobileLayout = window.matchMedia("(max-width: 800px)")
const sidebarState: Partial<Record<"left" | "right", boolean>> = {}
for (const side of ["left", "right"] as const) {
  try {
    const saved = localStorage.getItem(`notes-sidebar-${side}`)
    if (saved !== null) sidebarState[side] = saved === "hidden"
  } catch { /* Sidebar controls also work when storage is unavailable. */ }
}

function updateSidebars() {
  for (const side of ["left", "right"] as const) {
    const panel = document.querySelector<HTMLElement>(`.sidebar.${side}`)
    const button = document.querySelector<HTMLButtonElement>(`[data-sidebar="${side}"]`)
    if (!panel || !button) continue
    panel.id = `notes-sidebar-${side}`
    panel.querySelector(".mobile-explorer")?.setAttribute("aria-label", "Toggle notes menu")
    const available = panel.children.length > 0
    button.hidden = !available
    // Small screens retain Quartz's native notes menu; the outline is a drawer.
    const hidden = side === "left" && mobileLayout.matches
      ? false
      : sidebarState[side] ?? (side === "right" && narrowLayout.matches)
    document.documentElement.toggleAttribute(`data-${side}-hidden`, hidden || !available)
    panel.inert = hidden
    button.setAttribute("aria-expanded", String(!hidden))
    const label = `${hidden ? "Show" : "Hide"} ${side === "left" ? "notes" : "outline"} sidebar`
    button.setAttribute("aria-label", label)
    button.title = label
  }
}

document.addEventListener("nav", () => {
  updateSidebars()
  document.querySelectorAll<HTMLButtonElement>("[data-sidebar]").forEach((button) => {
    const click = () => {
      const side = button.dataset.sidebar as "left" | "right"
      sidebarState[side] = !document.documentElement.hasAttribute(`data-${side}-hidden`)
      try {
        localStorage.setItem(`notes-sidebar-${side}`, sidebarState[side] ? "hidden" : "visible")
      } catch { /* Keep the current session preference without storage. */ }
      updateSidebars()
    }
    button.addEventListener("click", click)
    window.addCleanup(() => button.removeEventListener("click", click))
  })
})

narrowLayout.addEventListener("change", updateSidebars)
mobileLayout.addEventListener("change", updateSidebars)
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && narrowLayout.matches &&
      !document.documentElement.hasAttribute("data-right-hidden")) {
    const button = document.querySelector<HTMLButtonElement>('[data-sidebar="right"]')
    button?.click()
    button?.focus()
  }
})
