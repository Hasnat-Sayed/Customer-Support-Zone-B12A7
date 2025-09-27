
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Main from './Components/Main'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner';

const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const fetchTickets = fetchData();

function App() {
  const [resolves, setResolve] = useState([])
  const [tasks, setTasks] = useState([])

  return (
    
    <>
    
      <Navbar></Navbar>

      <Banner resolves={resolves} tasks={tasks}></Banner>

      <Suspense fallback={<p className="bg-[#F5F5F5]  min-h-[500px] flex items-center justify-center"><span className="loading loading-spinner loading-xl"></span></p>}>
        <Main tasks={tasks} setTasks={setTasks} resolves={resolves} setResolve={setResolve} fetchTickets={fetchTickets}></Main>
      </Suspense>


      <Footer></Footer>

    </>
  )
}

export default App
