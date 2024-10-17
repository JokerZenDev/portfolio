import { PortfolioLanding } from './components/portfolio-landing'
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Analytics />
      <PortfolioLanding />
    </>
  )
}

export default App
