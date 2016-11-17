const React = require('react');

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
        <h1>Hi</h1>
        <div className="tweet__body">
            <p>We're writing this tweet in JSX. Holy moly!</p>
        </div>
      </div>
    );
  }
}




module.exports = Tweet;
