import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";

class Saved extends Component {
    state = {
      book: {}
    };

    componentDidMount() {
        API.getBook(this.props.match.params.id)
          .then(res => this.setState({ book: res.data }))
          .catch(err => console.log(err));
      }

      render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
              <Jumbotron>
                  <h1>(React) Google Books Search</h1>
                  <h2>Search for and Save Books of Interest</h2>
                </Jumbotron>
              </Col>
            </Row>
            <Row>
              <Col size="md-10 md-offset-1">
              {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => (
                      <ListItem key={book._id}>
                        <Link to={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
            <Row>
              <Col size="md-2">
                <Link to="/">← Back to Search</Link>
              </Col>
            </Row>
          </Container>
        );
      }
    }
    
    export default Saved;