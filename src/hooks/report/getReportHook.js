import { useState, useEffect } from "react";
import getReportDetail from 'apis/report/getReportDetail';

const getReportHook = () => {
    // 리포트 list 관리 hook
    const [reports, setreportList] = useState([]);
  
    useEffect(() => {
      const fetchReport = async () => {
        try {
          const data = await getReportDetail(); // 리포트 list get API
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
