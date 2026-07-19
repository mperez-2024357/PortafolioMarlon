import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { AppRoutes } from "./router/AppRoutes.jsx"
import { Toaster } from "react-hot-toast"

function RouteScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export const App = () => {
  return (
    <>
      <RouteScrollReset />
      <AppRoutes />
      <Toaster />
    </>
  )
}