import { PortfolioLanding } from './components/portfolio-landing'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <PortfolioLanding />
    </>
  )
}

export default App
