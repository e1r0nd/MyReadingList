import React from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Header from "./Header";
import MainSection from "./MainSection";
import * as TodoActions from "../actions";
import { Card, CardText, CardTitle } from "react-md";

const Todos = ({ todos, actions }) => (
  <Card className="md-cell md-cell--12 md-text-container">
    <CardTitle title="Todos" />
    <CardText>
      <Header addTodo={actions.addTodo} />
      <MainSection todos={todos} actions={actions} />
    </CardText>
  </Card>
);

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
