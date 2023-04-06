import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "hassen kaffel",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        Imagsrc: "https://st3.depositphotos.com/27847728/33245/v/450/depositphotos_332451796-stock-illustration-letter-logo-design-vector-template.jpg",
        profession: "Software Engineer",
      },
      shows: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const mountedTime = new Date(this.props.mountedAt).getTime();
      const diffSeconds = Math.round((currentTime - mountedTime) / 1000);
      this.setState({ timeInterval: diffSeconds });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShows = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, timeInterval } = this.state;
    return (
      <div>
        <button onClick={this.toggleShows}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>
        {shows && (
          <div>
             <div className="card-container">
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://st3.depositphotos.com/27847728/33245/v/450/depositphotos_332451796-stock-illustration-letter-logo-design-vector-template.jpg" />
      <Card.Body>
        <Card.Title>{this.state.person.fullName}</Card.Title>
        <Card.Text>
          {this.state.person.profession} <br></br>
        {this.state.person.bio}
       
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>num:55666777</ListGroup.Item>
        <ListGroup.Item>mail:hassenkaffel99@gmail.com</ListGroup.Item>
        <ListGroup.Item>adresse:tunis</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
          </div>
        )}
        <p>
          Component mounted {timeInterval} second{timeInterval !== 1 && "s"} ago
        </p>
      </div>
    );
  }
}

export default App;
