import { useState, useEffect } from "react";
import getGraph from "apis/report/getGraph";

const getGraphHook = () => {
  const [graphList, setGraphList] = useState([]);

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        const data = await getGraph(); // 그래프 list get API
        setGraphList(data);
      } catch (error) {
        console.log('Error fetching survey:', error);
      }
    };

    fetchGraph();
  }, []);

  return graphList;
}

export default getGraphHook;
