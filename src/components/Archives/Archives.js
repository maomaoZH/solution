import React, { Component } from 'react';
import styles from './Archives.css';

class Archives extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      images: null,
    };
  }

  componentWillMount() {
    /*
      fetch some copyright free images from http://www.splashbase.co/api
      get latest 10 images
    */
    const uri = 'http://www.splashbase.co/api/v1/images/latest'
    fetch(uri, {method: 'GET'})
      .then(res => res.json())
      .then(res => {
        this.setState({
          images: res.images
        })
      });
  }

  render() {
    return (
      <div className={styles.archives}>
        {this.state.images ? this.state.images.map((image, index) =>
          <div className={styles.container} key={index}>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={image.url} />
            </div>
            <div className={styles.text}>{this.state.text}</div>
          </div>
        ) : 
          <div className={styles.text}>I am working hard to load...Bear with me 😘</div>
        }
      </div>
    );
  }
}

export default Archives;