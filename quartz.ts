import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { PageTypeDispatcher } from "./quartz/plugins/pageTypes/dispatcher"
import SidebarControls from "./quartz/components/SidebarControls"

const config = await loadQuartzConfig()
export const layout = await loadQuartzLayout()
const controls = SidebarControls()
// Keep the native layouts and add one generic control for each sidebar.
for (const slots of [layout.defaults, ...Object.values(layout.byPageType)]) {
  if (slots.left?.length || slots.right?.length) {
    slots.beforeBody = [controls, ...(slots.beforeBody ?? [])]
  }
}
config.plugins.emitters = config.plugins.emitters.map((emitter) =>
  emitter.name === "PageTypeDispatcher" ? PageTypeDispatcher(layout) : emitter,
)
export default config
