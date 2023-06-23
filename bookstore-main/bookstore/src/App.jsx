import Navbar from "./components/Navbar"
import { Route,Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import ContactUs from "./components/ContactUs"
import BookStore from "./components/BookStore"
import DonorForm from "./components/DonorForm"
import BookSellForm from "./components/BookSellForm"
import Donor from "./components/donor2"
import About from "./components/About"

const App = () => {
  return (
    <div>
   
<Navbar/>
<Routes>
  <Route path="/" element={<Landing/>} />
  <Route path="/about" element={<About/>}/>
  <Route path="/contactus" element={<ContactUs/>}/>
  <Route path="/donor" element={<Donor/>}/>
  <Route path="/store" element={<BookStore/>}/>
  <Route path="/donate" element={<DonorForm/>}/>
  <Route path="/sell" element={<BookSellForm/>}/>

  

</Routes>
    </div>
  )
}
export default App