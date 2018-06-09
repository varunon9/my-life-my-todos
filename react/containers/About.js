import React from 'react';
import { Segment, Icon, Header } from 'semantic-ui-react';

const About = (props) => {

    return (
        <Segment className="primary">
            <Header size="huge">
                <img src="./icons/icon.svg" />
                My Life My Todos
            </Header>
            <Header size="tiny">
                A personal task manager app built using nw.js
            </Header>
            <p>Major dependencies-</p>
            <ul>
                <li>React.js</li>
                <li>Semantic Ui React</li>
                <li>Flux</li>
            </ul>
            <p>
                <a href="https://github.com/varunon9/my-life-my-todos" target="_blank">
                    <Icon name="github" />
                    Visit official repo
                </a>
            </p>
        </Segment>
    );
}

export default About;