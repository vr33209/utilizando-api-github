import React, { Component } from "react";
import { toast } from "react-toastify";

import { FaGithubAlt, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import api from "../../services/api";

import { Form, SubmitButton, List } from "./styles";
import Container from "../../components/container";

class Main extends Component {
  state = {
    newRepo: "",
    repositories: [],
    loading: false,
    error: false
  };

  componentDidMount() {
    const repositories = localStorage.getItem("repositories");

    if (repositories) {
      this.setState({
        repositories: JSON.parse(repositories)
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem("repositories", JSON.stringify(repositories));
    }
  }

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { repositories } = this.state;

      const response = await api.get(`/repos/${this.state.newRepo}`);
      const data = {
        name: response.data.full_name,
        img: response.data.owner.avatar_url
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: "",
        loading: false,
        error: false
      });
    } catch (error) {
      toast.error("Repositório não encontrado!");
      this.setState({ loading: false, error: true });
    }
  };

  deleteRepository = item => {
    this.setState({
      repositories: this.state.repositories.filter(r => r !== item)
    });
  };

  render() {
    const { newRepo } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>
        <Form onSubmit={this.handleSubmit} error={this.state.error}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo}
            onChange={e => this.setState({ newRepo: e.target.value })}
          />

          <SubmitButton loading={this.state.loading}>
            {this.state.loading ? (
              <FaSpinner color="#FFF" size={24} />
            ) : (
              <FaPlus color="#FFF" size={24} />
            )}
          </SubmitButton>
        </Form>

        <List>
          {this.state.repositories.map(item => (
            <li key={item.name}>
              <div>
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>

              <Link to={`/repository/${encodeURIComponent(item.name)}`}>
                Detalhes
              </Link>
              <button onClick={() => this.deleteRepository(item)} type="button">
                <FaTrash color="#bd2130" size={24} aria-hidden="true" />
              </button>
            </li>
          ))}
        </List>
      </Container>
    );
  }
}

export default Main;
