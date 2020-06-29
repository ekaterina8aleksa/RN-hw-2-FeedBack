import React, { Component } from "react";
import Container from "./components/Container";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends Component {
    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    };

    options = Object.keys(this.state);

    handleFeedbackCounter = ({ target: { name } }) => {
        //const target = e.target.name;

        this.setState((state) => {
            return {
                [name]: state[name] + 1,
            };
        });
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, value) => acc + value, 0);
    };

    countPositiveFeedbackPercentage = (value) => {
        const totalFeedbacks = this.countTotalFeedback();
        let percentage = Math.round((value * 100) / totalFeedbacks);

        if (percentage === 0 || isNaN(percentage)) {
            percentage = 0;
        }
        return percentage;
    };

    render() {
        const totalFeedbacks = this.countTotalFeedback();
        const { good, neutral, bad } = this.state;
        const positiveFeedback = this.countPositiveFeedbackPercentage;

        return (
            <Container>
                <Section title={"Please leave Feedback"}>
                    {Object.keys(this.state).map((item) => (
                        <FeedbackOptions
                            onLeaveFeedback={this.handleFeedbackCounter}
                            btnValue={item}
                            key={item}
                        />
                    ))}
                </Section>

                <Section title={"Statistics"}>
                    {totalFeedbacks > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={totalFeedbacks}
                            positivePercentage={positiveFeedback(good)}
                        />
                    ) : (
                        <Notification message={"There are no FeedBacks =( "} />
                    )}
                </Section>
            </Container>
        );
    }
}

export default App;
