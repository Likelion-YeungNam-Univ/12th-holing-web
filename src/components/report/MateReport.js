import {
    MissionNoCard,
    MissionNoCardBorderTop,
    MissionNoImg,
    MissionNoTitle,
    MissionNoDescription,
} from 'styles/calendar/Mission-styled';
import img_noReport from "assets/images/report_noReport.png"

function MateReport( {target} ) {
  return (
    <MissionNoCard>
        <MissionNoCardBorderTop></MissionNoCardBorderTop>
        <MissionNoImg src={img_noReport}></MissionNoImg>
        <MissionNoTitle>{target}의 증상리포트가 없습니다</MissionNoTitle>
        <MissionNoDescription>
           {target==='나' ? (
            <>
              상테스트를 완료하지 않아 제공되는 리포트가
              <br/>
              없습니다. 테스트를 시작해 보세요!
            </>
            ) : (
            <>
              짝꿍이 증상테스트를 완료하지 않아 제공되는 리포트가
              <br/>
              없습니다. 짝꿍에게 테스트를 제안해 보세요!
            </>
          )}
        </MissionNoDescription>
    </MissionNoCard>
  )
}

export default MateReport;
