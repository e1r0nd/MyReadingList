import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { FontIcon, Button, Drawer, Toolbar } from "react-md";
import * as Actions from "../actions";

import NavItemLink from "../components/NavItemLink";
import Inbox from "../components/Inbox";
import Starred from "../components/Starred";
import SendMail from "../components/SendMail";
import Drafts from "../components/Drafts";
import Todos from "../components/Todos";

// const TO_PREFIX = "/discover-more/routing-examples/drawers";

const navItems = [{
  label: "Todos",
  // to: TO_PREFIX,
  to: "/",
  exact: true,
  icon: "list",
}, {
  label: "Inbox",
  // to: TO_PREFIX,
  to: "/inbox",
  exact: true,
  icon: "inbox",
}, {
  label: "Starred",
  // to: `${TO_PREFIX}/starred`,
  to: "/starred",
  icon: "star",
}, {
  label: "Send mail",
  // to: `${TO_PREFIX}/send-mail`,
  to: "/send-mail",
  icon: "send",
}, {
  label: "Drafts",
  // to: `${TO_PREFIX}/drafts`,
  to: "/drafts",
  icon: "drafts",
}];

class App extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    pageTitle: PropTypes.string,
    actions: PropTypes.object.isRequired,
  };
  state = {
    visible: false,
  };

  componentDidMount() {
    // Need to set the renderNode since the drawer uses an overlay
    this.dialog = document.getElementById("drawer-routing-example-dialog");
  }

  showDrawer = () => {
    this.setState({ visible: true });
  };

  hideDrawer = () => {
    this.setState({ visible: false });
  };

  handleVisibility = (visible) => {
    this.setState({ visible });
  };

  render() {
    const { pageTitle } = this.props;
    const { location } = this.props;
    const { visible } = this.state;
    console.log(this.props);
    return (
      <div>
        <Toolbar colored fixed title={pageTitle} nav={<Button icon onClick={this.showDrawer}>menu</Button>} />
        <CSSTransitionGroup
          component="div"
          transitionName="md-cross-fade"
          transitionEnterTimeout={300}
          transitionLeave={false}
          className="md-toolbar-relative md-grid"
        >
          <Switch key={location.pathname}>
            <Route path={navItems[0].to} exact component={Todos} />
            <Route path={navItems[1].to} component={Inbox} />
            <Route path={navItems[2].to} component={Starred} />
            <Route path={navItems[3].to} component={SendMail} />
            <Route path={navItems[4].to} component={Drafts} />
          </Switch>
        </CSSTransitionGroup>
        <Drawer
          type={Drawer.DrawerTypes.TEMPORARY}
          visible={visible}
          onVisibilityChange={this.handleVisibility}
          header={<Toolbar title={<span>
            <Button icon onClick={this.hideDrawer}><FontIcon>close</FontIcon></Button>
            <span>text</span>
          </span>} />}
          renderNode={this.dialog}
          navItems={navItems.map(props => <NavItemLink {...props} key={props.to} />)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pageTitle: state.pageTitle
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
