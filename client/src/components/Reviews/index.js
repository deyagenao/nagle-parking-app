import React, { Component } from 'react';
import API from '../../utils/API';

class Reviews extends Component {
  state = {
    reviews: []
  };

  componentDidMount() {
    API.getReviews()
      .then(res => {
        console.log(res.data);

        this.setState({
          reviews: res.data
        });
      })
      .catch(err => console.log(err));
  }

  handleReview = reviews => {
    const shufftledReview = this.shuffleArray(reviews);
    this.setState({ reviews: this.shuffleArray });
  };

  shuffleArray = reviewArray => {
    for (let i = reviewArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [reviewArray[i], reviewArray[j]] = [reviewArray[j], reviewArray[i]];
    }
    return reviewArray;
  };

  render() {
    return (
      <div>
        <div className='section-three'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center '>
                <h1 className='title-section-three'>
                  What Our Customers Are Saying
                </h1>
              </div>
            </div>
            <div className='row reviews'>
              <div className='col-md-4 reviewstyle'>
                <p>{this.state.reviews[0]}</p>
              </div>
              <div className='col-md-4 reviewstyle'>
                <p>{this.state.reviews[1]}</p>
              </div>
              <div className='col-md-4 reviewstyle'>
                <p>{this.state.reviews[2]}</p>
              </div>
            </div>

            <div className='row reviews-two'>
              <div className='col-md-4 reviewstyle'>
                <p>{this.state.reviews[3]}</p>
              </div>
              <div className='col-md-4 reviewstyle'>
                <p>{this.state.reviews[4]}</p>
              </div>
              <div className='col-md-4 reviewstyle'>
                <p>{this.state.reviews[5]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Reviews;
