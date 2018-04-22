import React, { Component, Fragment } from "react";
import { MyContext } from "../Provider";
import "./Stats.css";

class Stats extends Component {
  getStats = ctx => {
    const res = {};

    Object.keys(ctx.state.books)
      .filter(
        key =>
          "done" === ctx.state.books[key].list ||
          "favorites" === ctx.state.books[key].list
      )
      .forEach(key => {
        const year = new Date(ctx.state.books[key].date).getFullYear();
        const month = new Date(ctx.state.books[key].date).getMonth();
        !res[year] && (res[year] = {});
        res[year][month] ? res[year][month]++ : (res[year][month] = 1);
      });

    return res;
  };

  render() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    return (
      <MyContext.Consumer>
        {ctx => (
          <Fragment>
            {!ctx.state.title && ctx.updateTitle("Statistics")}
            <div className="stats">
              {Object.entries(this.getStats(ctx))
                .sort((a, b) => b[0] - a[0])
                .map((val, i) => (
                  <ul key={val[0] + i} className="stats__content">
                    <b>{val[0]}</b> -{" "}
                    {Object.values(val[1]).reduce((a, m) => a + m)}
                    {Object.entries(val[1]).map((m, j) => (
                      <li key={m + j} className="stats__item">
                        {monthNames[m[0]]} - {m[1]}
                      </li>
                    ))}
                  </ul>
                ))}
            </div>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Stats;
