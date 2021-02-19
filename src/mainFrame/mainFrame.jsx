import React from 'react';
import './mainFrame.sass';
import WorkApp from './../workApp/workApp.jsx';

class MainFrame extends React.Component {
  render() {
    return (
      <div className="Main_Frame">
        <WorkApp />
      </div>
    );
  }
}
export default MainFrame
