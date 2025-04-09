import dynamic from "next/dynamic"

// Importar el componente de cliente que manejará la renderización
const PortfolioContent = dynamic(() => import("@/components/portfolio-content"), { ssr: true })

export default function Home() {
  return <PortfolioContent />
}

