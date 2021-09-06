import { useState, useEffect, useCallback } from "react";
import { BiCalendar } from "react-icons/bi"; //from icon reactor reacticon
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment";
import AppointmentInfo from "./components/AppointmentInfo";

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSOrtBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");
  const filtersList = appointmentList
    .filter((item) => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      let order = orderBy === "asc" ? 1 : -1;
      return a[sortBy].toLowerCase() < b[sortBy].toLowerCase()
        ? -1 * order
        : 1 * order;
    });
  const fetchData = useCallback(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setAppointmentList(data);
      });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 laign-top" />
        Your Appointment
      </h1>
      <AddAppointment
        onSendAppointment={(myApp) =>
          setAppointmentList([...appointmentList, myApp])
        }
        lastId={appointmentList.reduce(
          (max, item) => (Number(item.id) > max ? Number(item.id) : max),
          0
        )}
      />
      <Search
        query={query}
        onQueryChange={(myQ) => setQuery(myQ)}
        orderBy={orderBy}
        onOrderByChange={(myorder) => setOrderBy(myorder)}
        sortBy={sortBy}
        onSortByChange={(mySort) => setSOrtBy(mySort)}
      />

      <ul className="divide-y divide-gray-200">
        {filtersList.map((appointments) => (
          <AppointmentInfo
            key={appointments.id}
            appointment={appointments}
            onDeleteAppointment={(appoinmentId) =>
              setAppointmentList(
                appointmentList.filter((app) => app.id !== appoinmentId)
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}
export default App;
