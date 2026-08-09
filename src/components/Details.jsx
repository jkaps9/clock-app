export default function Details({ timeData }) {
  return (
    <ul>
      <li>
        <p className="label">Current timezone</p>
        <p className="value">{timeData.timezone}</p>
      </li>
      <li>
        <p className="label">Day of the year</p>
        <p className="value">{timeData.day_of_year}</p>
      </li>
      <li>
        <p className="label">Day of the week</p>
        <p className="value">{timeData.day_of_week}</p>
      </li>
      <li>
        <p className="label">Week number</p>
        <p className="value">{timeData.week_number}</p>
      </li>
    </ul>
  );
}
