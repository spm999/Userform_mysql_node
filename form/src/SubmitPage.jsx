import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SubmitPage = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Thank You for Submitting!</h1>
        <p className="lead">Your form has been successfully submitted.</p>
        <p>We appreciate your input.</p>
        <hr className="my-4" />
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="/form" role="button">
            Back to Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default SubmitPage;
