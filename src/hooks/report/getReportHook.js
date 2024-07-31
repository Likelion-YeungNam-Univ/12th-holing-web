import { useState, useEffect } from "react";
import getReportDetail from 'apis/report/getReportDetail';

const getReportHook = () => {
    // 리포트 list 관리 hook
    const [reports, setreportList] = useState([]);
  
    useEffect(() => {
      getReportDetail() // 리포트 list get API
        .then(report =>{
          setreportList(report);
        })
        .catch(error => {
          console.log('Error fetching survey:', error);
        });
    }, []);
  
    return reports;
}
  
  export default getReportHook;