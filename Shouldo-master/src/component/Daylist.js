import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
export default function Daylist() {
  const days = useFetch("http://localhost:3003/days");
  // const [days, setdays] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3003/days")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setdays(data);
  //     });
  // }, []);

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day{day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
