import React, { useState } from "react";
import Papa from "papaparse";
const MentorData = () => {
  const [data, setData] = useState({});
  Papa.parse(
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQEN31YU4jB_-hIetzeK6n3uMyneLuoClvaEZfzhRK9SqWxFe9YGpflCk9LgR3f-Kjg9tlYT_8TJUGD/pub?output=csv",
    {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    }
  );
  const mentors = Array.from(data);
  return (
    <ul>
      {mentors.map((data) => (
        <li key={data.Mentors}>
          {data.Mentors} ({data.Mentees}) - Domain {data.Domain}
        </li>
      ))}
    </ul>
  );
};
export default MentorData;
