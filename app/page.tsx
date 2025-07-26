import CalendarGrid from "./components/CalendarGrid"

export default function Home() {
  return (
    <main className=" min-h-screen">
      <h1 className="text-white text-2xl font-bold px-4 py-4">My Calendar</h1>
      <CalendarGrid />
      
    </main>
  )
}
