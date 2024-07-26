import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 494px;
  margin: 0 auto;

  // dayGridMonth일 때
  ${(props) =>
    props.view === 'dayGridMonth' &&
    `
    .fc .fc-scroller-harness.fc-scroller-harness-liquid {
      height: 414px;
      margin-top: 0px;
    }
    .fc .fc-scroller.fc-scroller-liquid-absolute {
      overflow-x: hidden;
      overflow-y: hidden !important;
    }
    .fc-daygrid-body-unbalanced {
      height: 414px;
    }
    .fc-scrollgrid-sync-table {
      height: 414px;
    }
    .fc-dayGridMonth-view {
      height: 414px;
    }
    .fc-scrollgrid-section-body {
      height: 414px;
    }

  `}

  // dayGridWeek일 때
  ${(props) =>
    props.view === 'dayGridWeek' &&
    `
    .fc .fc-scroller-harness.fc-scroller-harness-liquid {
      height: 60px; //week view에서 점 안보이는 거 해결
      margin-top: 0px;
      margin-bottom: 20px;
    }
    .fc .fc-scroller.fc-scroller-liquid-absolute {
      overflow-x: hidden;
      overflow-y: hidden !important;
    }
    .fc-daygrid-body-unbalanced {
      height: 52px;
    }
    .fc-scrollgrid-sync-table {
      height: 52px;
    }
    .fc-dayGridWeek-view {
      height: 122px;
    }
    .fc-scrollgrid.fc-scrollgrid-liquid {
      //border: none;
      height: 122px;
    }
  `}

  //today
  .fc .fc-daygrid-day.fc-day-today {
    background-color: white;
  }
  //today

  //toolbar
  .fc .fc-toolbar.fc-header-toolbar {
    height: 96px; //toolbar 높이 확정
    margin-bottom: 0;
    border: none;
  }
  .fc .fc-toolbar-chunk {
    height: 38px;
    display: flex;
    flex-direction: row;
    padding: 0;
  }
  .fc .fc-toolbar-title {
    font-weight: 700;
    width: fit-content;
    margin: 0;

    text-align: center;
    font-size: 32px;
    font-weight: 700;
  }
  .fc-myCustomButton-button {
    background-color: white;
    border: none;
    margin-right: 5px;
  }
  .fc-button-primary span {
    color: #8a8a8a;
    padding: 0;
  }
  .fc .fc-prev-button {
    background-color: white;
    border: none;
    padding: 0 13px 0 0;
  }
  .fc .fc-next-button {
    background-color: white;
    border: none;
    padding: 0 0 0 13px;
    margin-left: 0;
  }
  //toolbar

  //frame
  .fc-scrollgrid-section {
  }
  .fc-view-harness {
    margin-top: 0;
  }
  .fc-scroller-harness {
    height: 24px;
    margin-top: 18px;
    margin-bottom: 9px;
  }
  .fc-scroller {
    overflow: hidden;
  }
  //frame

  //Calendar Day Unit//
  .fc .fc-col-header-cell {
    width: 50%;
    height: 24px;
    border: none;
  }
  .fc-scroll-grid-sync-inner {
    width: 50px;
  }
  .fc-col-header-cell-cushion {
    color: #5643d1;
    text-align: center;
    font-size: 15px;
    font-weight: 500;
  }
  //Calendar Day Unit

  //Calendar Date Unit
  .fc-daygrid-day {
    border: none;
  }
  .fc-daygrid-day-frame {
    height: 69px;
    width: 74px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
  .fc-daygrid-day-top {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 50px;
    height: 52px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
  .fc-daygrid-day-number {
    width: 35px;
    height: 32px;
  }
  //Calendar Date Unit
`;

export const CalendarToggleButton = styled.img`
  margin-left: 281px;
  cursor: pointer;
`;
