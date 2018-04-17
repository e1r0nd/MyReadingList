import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Menu from "./Menu";
import BookForm from "./BookForm";

class SideNav extends Component {
  static propTypes = {
    position: PropTypes.string,
    className: PropTypes.string,
    componentName: PropTypes.string.isRequired,
    sideNavEl: PropTypes.object.isRequired,
    context: PropTypes.object,
    titleRef: PropTypes.object
  };

  static defaultProps = {
    position: "left"
  };

  componentDidMount() {
    this.props.context &&
      this.props.context.setSideNav(this.props.componentName, false);
  }

  components = {
    Menu,
    BookForm
  };

  hideSideNav = () => {
    this.props.sideNavEl.value.classList.add("side-nav--animatable");
    this.props.sideNavEl.value.classList.remove("side-nav--visible");
    this.props.sideNavEl.value.addEventListener(
      "transitionend",
      this.onTransitionEnd
    );
    "BookForm" === this.props.componentName &&
      this.props.context.setCurrentBook();
  };

  onTransitionEnd = e => {
    if ("transform" === e.propertyName) {
      this.props.sideNavEl.value.classList.remove("side-nav--animatable");
      this.props.sideNavEl.value.removeEventListener(
        "transitionend",
        this.onTransitionEnd
      );
    }
  };

  showButtonEl = React.createRef();
  hideButtonEl = React.createRef();
  sideNavContainerEl = React.createRef();

  blockClicks = evt => {
    evt.stopPropagation();
  };

  onTouchStart = evt => {
    if (!this.props.sideNavEl.value.classList.contains("side-nav--visible")) {
      return;
    }

    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;
    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  };

  onTouchMove = evt => {
    if (!this.touchingSideNav) {
      return;
    }

    this.currentX = evt.touches[0].pageX;
  };

  onTouchEnd = () => {
    if (!this.touchingSideNav) {
      return;
    }

    this.touchingSideNav = false;

    const isLeft = "left" === this.props.position;
    const translateX = isLeft
      ? Math.min(0, this.currentX - this.startX)
      : Math.min(0, this.startX - this.currentX);
    this.sideNavContainerEl.value.style.transform = "";

    if (translateX < 0) {
      this.hideSideNav();
    }
  };

  update = () => {
    if (!this.touchingSideNav) {
      return;
    }

    requestAnimationFrame(this.update.bind(this));
    const translateX =
      "left" === this.props.position
        ? Math.min(0, this.currentX - this.startX)
        : Math.max(0, this.currentX - this.startX);
    this.sideNavContainerEl.value.style.transform = `translateX(${translateX}px)`;
  };

  render() {
    const thisClass = `side-nav${
      "right" === this.props.position ? " side-nav--right" : ""
    }`;
    const containerClass = `side-nav__container${
      "right" === this.props.position ? " side-nav__container--right" : ""
    }`;
    const hideClass = `side-nav__hide u--pointer${
      "right" === this.props.position ? " side-nav__hide--right" : ""
    }`;

    const SpecificComponent = this.components[this.props.componentName];

    return (
      <Fragment>
        <aside
          className={thisClass}
          ref={this.props.sideNavEl}
          onClick={this.hideSideNav}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
        >
          <nav
            className={containerClass}
            ref={this.sideNavContainerEl}
            onClick={this.blockClicks}
          >
            <button
              onClick={this.hideSideNav}
              aria-label="hide menu"
              role="presentation"
              className={hideClass}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59
              12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                />
              </svg>
            </button>
            <SpecificComponent
              hideSideNav={this.hideSideNav}
              context={this.props.context}
              titleRef={this.props.titleRef}
            />
          </nav>
        </aside>
      </Fragment>
    );
  }
}

export default SideNav;
