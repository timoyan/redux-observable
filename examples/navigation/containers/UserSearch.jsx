import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import UserSearchInput from "../components/UserSearchInput";
import UserSearchResults from "../components/UserSearchResults";
import { SearchUserRequest } from "../reducers/searchUser";

class UserSearch extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserSearch = this.handleUserSearch.bind(this);
  }

  componentDidMount() {
    this.handleUserSearch(this.props.query);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.query !== nextProps.query) {
      this.handleUserSearch(nextProps.query);
    }
  }

  handleUserSearch(query) {
    this.props.SearchUserRequest({ query: query });
  }

  render() {
    const { query, results, loading } = this.props;
    return (
      <div>
        <Link
          to="/admin"
          style={{
            display: "block",
            marginBottom: 10
          }}
        >
          Admin Panel
        </Link>
        <UserSearchInput
          defaultValue={query}
          onChange={this.handleUserSearch}
        />
        <UserSearchResults results={results} loading={loading} />
      </div>
    );
  }
}

export default connect(
  ({ routing, github }) => ({
    query: routing.locationBeforeTransitions.query.q,
    results: github.results,
    loading: github.loading
  }),
  { SearchUserRequest }
)(UserSearch);
