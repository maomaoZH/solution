import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './App.css';
import Archives  from '../Archives/Archives';
import Pages  from '../Pages/Pages';
import Topics  from '../Topics/Topics';
import getRandomTab from '../../helpers/getRandomTab'
const cx = classnames.bind(styles);

class App extends Component { 
  constructor(props) {
    super(props);
    this.renderActiveTab = this.renderActiveTab.bind(this);
    this.state = {
      tabs: ['Topics', 'Archives', 'pages'],
      activeTab: getRandomTab(3),
    };
  }

  setActiveTab(index) {
    this.setState({
      activeTab: index
    })
  }

  renderActiveTab() {
    switch (this.state.activeTab) {
      case 0:
        return (<Topics />);
      case 1:
        return (<Archives />);
      case 2:
        return (<Pages setActiveTab={this.setActiveTab}/>);
      default:
        return ''
    }
  }
  render() {
    const {
      tabs,
      activeTab,
    } = this.state;
    return (
      <div className={styles.app}>
        <div className={styles.header}>Browse Site
          <span className={styles.subHeader}>Select a tab</span>
        </div>
        <div className={styles.container}>
          <div className={styles.tabLists}>
            {tabs.map((tab, index) =>
              <div
                className={cx({tab: true, active: activeTab === index})}
                key={index}
                onClick={this.setActiveTab.bind(this, index)}>
                {tab}
              </div>
            )}
          </div>
          <div className={styles.main}>
            {this.renderActiveTab()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
