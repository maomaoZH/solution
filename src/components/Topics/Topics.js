import React, { Component } from 'react';
import CountUp from 'react-countup';
import styles from './Topics.css';
import getRandomTab from '../../helpers/getRandomTab'

class Topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [
        {name: 'HTML Techniques', postNum: getRandomTab(30)},
        {name: 'CSS Styling', postNum: getRandomTab(30)},
        {name: 'Flash Toturials', postNum: getRandomTab(30)},
        {name: 'Web Miscellanea', postNum: getRandomTab(30)},
        {name: 'Site News', postNum: getRandomTab(30)},
        {name: 'Web Development', postNum: getRandomTab(30)},
      ]
    };
  }

  render() {
    return (
      <div className={styles.topics}>
        {this.state.topics.map((topic, index) =>
          <div key={index} className={styles.list}>
            {topic.name}
            <span className={styles.post}>
              <CountUp className={styles.countUp} start={0} end={topic.postNum} duration={4}/>
              Posts
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Topics;
