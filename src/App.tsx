import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Button>
        Click me <Apple />
      </Button>
    </div>
  )
}

export default App
