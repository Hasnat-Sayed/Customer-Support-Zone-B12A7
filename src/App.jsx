
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Main from './Components/Main'
import Navbar from './Components/Navbar'

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const fetchTickets = fetchData();
function App() {

  return (
    <>
      <Navbar></Navbar>

      <Banner></Banner>

      <Suspense fallback={<p className="bg-[#F5F5F5] min-h-[500px]">Loading......</p>}>
        <Main fetchTickets={fetchTickets}></Main>
      </Suspense>
      

      <Footer></Footer>

    </>
  )
}

export default App
