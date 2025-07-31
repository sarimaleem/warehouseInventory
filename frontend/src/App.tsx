
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import InventoryPage from "./pages/Inventory.tsx";
import Navigation from "./components/Navigation.tsx";
import {ThemeProvider} from "./context/ThemeProvider.tsx";
import DashboardPage from "./pages/Dashboard.tsx";
import WarehousePage from "./pages/Warehouse.tsx";

function App() {

  return (
   <ThemeProvider>
       <BrowserRouter>
               <Routes>
                   <Route path='' element={<Navigation/>}>
                       <Route path='/dashboard' element={<DashboardPage/>}/>
                       <Route path='/inventory' element={<InventoryPage/>}/>
                       <Route path='/warehouse' element={<WarehousePage/>}/>
                       <Route path='/shipments' element={<DashboardPage/>}/>
                       <Route path='/automations' element={<DashboardPage/>}/>
                   </Route>
               </Routes>
       </BrowserRouter>
   </ThemeProvider>
  )
}

export default App
