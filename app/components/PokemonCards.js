import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

const PokemonCard = ({ name, id, imageUrl }) => (
  <Figure className="m-2">
    <Figure.Image width={240} src={imageUrl} thumbnail />
    <Figure.Caption>
      {name} ({id})
    </Figure.Caption>
  </Figure>
);

PokemonCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  imageUrl: PropTypes.any,
};

class PokemonCards extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { search: '', data: null };
  }

  handleChange(e) {
    this.setState({ search: e.target.value });
  }

  handleClick() {
    this.getData();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getData();
  }

  getData() {
    const { search } = this.state;

    const s = search.trim();
    this.setState({ search: s });

    if (search.length > 0) {
      this.setState({ data: null });

      axios
        .get(`/pokemon/card/${s}`)
        .then(res => {
          this.setState({ data: res.data });
        })
        .catch(ex => {
          this.setState({ err: ex.message });
        });
    }
  }

  render() {
    const { search, data, err } = this.state;

    return (
      <Card className="mt-2">
        <Card.Header>
          <h2>Pokémon Cards</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={this.handleSubmit} className="mb-3">
            <InputGroup>
              <Form.Control
                onChange={this.handleChange}
                value={search}
                spellCheck={false}
              />
              <InputGroup.Append>
                <Button onClick={this.handleClick}>Search</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>

          {data && data.length === 0 && (
            <Alert variant="danger">No Cards Found</Alert>
          )}

          {data && data.length > 0 && (
            <Alert>
              {data.map(card => (
                <PokemonCard key={card.id} {...card} />
              ))}
            </Alert>
          )}

          {err && (
            <Alert variant="info">
              <pre>{JSON.stringify(this.state, null, 2)} </pre>
            </Alert>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default PokemonCards;
