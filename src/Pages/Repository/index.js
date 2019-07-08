import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { Loading, Owner, IssueList } from "./styles";
import Container from "../../components/container";

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true
  };
  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`repos/${repoName}`),
      api.get(`repos/${repoName}/issues`, {
        params: {
          state: "open",
          per_page: 5
        }
      })
    ]);

    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data
    });
  }

  render() {
    const { repository, issues, loading } = this.state;

    if (loading) {
      return <Loading>Carregando...</Loading>;
    }
    return (
      <Container>
        <Owner>
          <Link to="/">
            <FaArrowLeft color={"red"} size={24} />
            Voltar aos repositorios{" "}
          </Link>
          <div>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
          </div>
        </Owner>

        <IssueList>
          {issues.map(item => (
            <li key={String(item.id)}>
              <img src={item.user.avatar_url} alt={item.user.login} />
              <div>
                <strong>
                  <a href={item.html_url}>{item.title}</a>
                  {item.labels.map(label => (
                    <span key={String(label.name)}>{label.name}</span>
                  ))}
                </strong>
                <p>{item.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
