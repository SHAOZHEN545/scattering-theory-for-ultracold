import type { QuartzComponent } from "./types"
// @ts-ignore - bundled as a browser script by Quartz
import script from "./scripts/sidebar-controls.inline"

export default () => {
  const SidebarControls: QuartzComponent = () => (
    <div class="sidebar-controls" data-no-popover="true">
      {(["left", "right"] as const).map((side) => (
        <button
          type="button"
          class={`sidebar-toggle sidebar-toggle-${side}`}
          data-sidebar={side}
          aria-label={`Hide ${side === "left" ? "notes" : "outline"} sidebar`}
          aria-expanded="true"
          aria-controls={`notes-sidebar-${side}`}
          title={`Hide ${side === "left" ? "notes" : "outline"} sidebar`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d={side === "left" ? "M9 4v16" : "M15 4v16"} />
          </svg>
        </button>
      ))}
    </div>
  )
  SidebarControls.afterDOMLoaded = script
  return SidebarControls
}
