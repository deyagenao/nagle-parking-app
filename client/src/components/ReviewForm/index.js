import React, { Component } from 'react';
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../Grid';
import { Input, FormBtn } from '../Form';
import './reviewform.css';

class ReviewForm extends Component {
  state = {
    reviewInfo: {},
    reviews: ''
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.reviews) {
      console.log('Attempting to add new monthly customer');
      API.updateUser({
        reviews: this.state.reviews,
        hasReviews: true
      })

        .then(res => {
          console.log(res);

          this.setState({
            reviewInfo: {
              reviews: this.state.reviews
            }
          });
          if (res.status === 200) {
            console.log('Review submitted succesfully');

            return alert('Review has been submitted. Thank you');
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <div className='container review-container-control'>
          <div className='row'>
            <div className='col-md-6'>
              <h2 className='review-title'>Leave a review</h2>
              <p className='text-muted'>
                Leave a review if you satified with our service
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <textarea
                  name='reviews'
                  maxLength='300'
                  placeholder='Write Your Review'
                  value={this.state.reviews}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
              <button
                onClick={this.handleFormSubmit}
                className='btn btn-warning submit-control'
              >
                Submit
              </button>
            </div>

            <div className='col-md-6'>
              <p className='happyimage img-fluid mt-3'></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ReviewForm;
