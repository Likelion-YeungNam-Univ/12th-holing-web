import { useState, useEffect } from "react";
import getReportSummary from 'apis/report/getReportSummary';

const getReportHook = (user) => {
    // 리포트 list 관리 hook
    const [reports, setreportList] = useState([]);
  
    useEffect(() => {
      const fetchReport = async () => {
        try {
          const data = await getReportSummary(user); // 리포트 list get API
          setreportList(data);
        } catch (error) {
          console.log('Error fetching survey:', error);
        }
      };
    
      fetchReport();
    }, []);
  
    return reports;
}
  
export default getReportHook;
