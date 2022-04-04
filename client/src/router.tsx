import { Routes, Route } from "react-router-dom";
import { App } from "./views";

export default function Router() {
  return (
    <Routes>
      <Route index element={<App/>}/>
    </Routes>
  )
}
