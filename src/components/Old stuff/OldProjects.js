import React from "react";
import moment from "moment";

export default function OldProjects(props) {
  return (<section id="projects" className="anchor">
    <div id="book-cloud">
      <Book />
    </div>
  </section>);
}

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      codeCounter: {
        years: 0,
        months: 0,
        days: 0
      },
      writeCounter: {
        years: 0,
        months: 0,
        days: 0
      }
    };

    this.countUp = this.countUp.bind(this);
  }

  countUp() {
    const codeStart = moment('2020-05-11 00:00:00');
    const now = moment();

    const diff = moment.duration(now.diff(codeStart))._data;

    this.setState({ codeCounter: {years: diff.years, months: diff.months, days: diff.days} });

    const writeStart = moment('2015-07-25 00:00:00');

    const wDiff = moment.duration(now.diff(writeStart))._data;

    this.setState({ writeCounter: {years: wDiff.years, months: wDiff.months, days: wDiff.days} });
  }

  componentDidMount() {
    this.countUp();
  }

  componentWillUnmount() {
    this.countUp();
  }

  render() {
    return (<div id="pro-book">
      <div id="back-cover">
        <Counter label={"code"} obj={this.state.codeCounter} />
        <Counter label={"write"} obj={this.state.writeCounter} />
      </div>
    </div>);
  };
}

const Counter = (props) => {
  return (
    <div className="count-body" style={{ width: '20rem' }}>
      <h2>Days since I started to {props.label}</h2>
      <div className="counts">
        <div className="container-years">
          <h3 className="year">{props.obj.years}</h3>
          <h3 className="count-label">{props.obj.years === 1 ? 'Year' : 'Years'}</h3>
        </div>
        <div className="container-months">
          <h3 className="month">{props.obj.months}</h3>
          <h3 className="count-label">{props.months === 1 ? 'Month' : 'Months'}</h3>
        </div>
        <div className="container-days">
          <h3 className="day">{props.obj.days}</h3>
          <h3 className="count-label">{props.obj.days === 1 ? 'Day' : 'Days'}</h3>
        </div>
      </div>
    </div>
  );
}