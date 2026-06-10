import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Allotment from 'allotment';
import 'allotment/dist/style.css';
import ScratchpadEditor from './ScratchpadEditorContainer';
import ScratchpadPretest from './ScratchpadPretestContainer';
import ScratchpadRecords from './ScratchpadRecordsContainer';
import ScratchpadToolbar from './ScratchpadToolbarContainer';
import ScratchpadSettings from './ScratchpadSettings';
import { RootState } from './reducers';

const pages = {
  problem: {
    component: ScratchpadEditor,
    icon: () => <span className="icon icon-file"></span>,
  },
};

export default function Scratchpad() {
  const dispatch = useDispatch();
  const ui = useSelector((state: RootState) => state.ui);

  const handleChangeSize = (sizes: number[]) => {
    dispatch({ type: 'SCRATCHPAD_SET_PANE_SIZE', payload: sizes });
  };

  const switchToPage = (target: string) => {
    dispatch({ type: 'SCRATCHPAD_SWITCH_TO_PAGE', payload: target });
  };

  return (
    <Allotment onChange={handleChangeSize}>
      <Allotment.Pane visible={Object.keys(pages).length > 1} minSize={50} maxSize={50}>
        <div className="scratchpad__tablist">
          {Object.keys(pages).map((key) => {
            const Component = pages[key].icon;
            return (
              <div
                key={key}
                className={`scratchpad__tabicon-${key}${key === ui.activePage ? ' scratchpad__tab-active' : ''}`}
                onClick={() => switchToPage(key)}
              >
                <Component />
              </div>
            );
          })}
        </div>
      </Allotment.Pane>
      <Allotment.Pane visible={!!ui.activePage}>
        <div className="scratchpad__problem">
          {Object.keys(pages).map((key) => {
            const Component = pages[key].component;
            return (
              <div key={key} style={{ display: key === ui.activePage ? 'block' : 'none' }}>
                <Component />
              </div>
            );
          })}
          {ui.activePage === 'settings' && (
            <div style={{ display: 'block' }}>
              <ScratchpadSettings />
            </div>
          )}
        </div>
      </Allotment.Pane>
      <Allotment vertical onChange={handleChangeSize}>
        <div key="editor" className="flex-col splitpane-fill">
          <ScratchpadToolbar />
          <ScratchpadEditor />
        </div>
        <Allotment.Pane visible={ui.pretest.visible}>
          <ScratchpadPretest key="pretest" />
        </Allotment.Pane>
        <Allotment.Pane visible={ui.records.visible}>
          <ScratchpadRecords key="records" />
        </Allotment.Pane>
      </Allotment>
    </Allotment>
  );
}