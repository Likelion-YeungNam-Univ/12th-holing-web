import { useEffect, useState } from "react";
import getDetail from "apis/report/getDetail";

const getDetailHook = (reportId) => {
  // 리포트 detail list 관리 hook
  const [reports, setreportList] = useState([]);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const data = await getDetail(reportId); // 리포트 list get API
        setreportList(data);
      } catch (error) {
        console.log('Error fetching survey:', error);
      }
    };
  
    fetchReport();
  }, []);

  return reports;
}

export default getDetailHook;
