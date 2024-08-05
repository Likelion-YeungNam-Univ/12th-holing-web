import { useState, useEffect } from "react";
import getGraph from "apis/report/getGraph";

const getGraphHook = (user) => {
  const [graphList, setGraphList] = useState([]);
  const [errorCode, setErrorCode] = useState(null); // 에러 코드 상태 추가

  useEffect(() => {
    const fetchGraph = async () => {
      try {
        const data = await getGraph(user); // 그래프 list get API
        setGraphList(data);
      } catch (error) {
        setErrorCode(error.response ? error.response.status : null);
        console.log('Error fetching survey:', error);
      }
    };

    fetchGraph();
  }, []);

  return { graphList,errorCode };
}

export default getGraphHook;
