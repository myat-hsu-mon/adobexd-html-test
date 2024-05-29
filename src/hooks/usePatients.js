import { useState, useEffect } from "react";
import axios from "axios";

export default function usePatients() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPatients() {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev/",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0",
            },
          },
        );
        setPatients(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPatients();
  }, []);

  return { loading, patients };
}
