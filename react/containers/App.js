import React from 'react';
import autoBind from 'react-autobind';
import { Container } from 'semantic-ui-react';

import Header from '../components/Header';
import AppRoutes from './AppRoutes';
import HeaderActions from '../actions/HeaderActions';
import AppStore from '../stores/AppStore';
import '../scss/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        autoBind(this);

        this.state = AppStore.getCurrentState();
    }

    onThemeChange() {
        this.setState(AppStore.getCurrentState());
    }
 
    componentWillMount() {
        AppStore.addChangeListener(this.onThemeChange);
    }
 
    componentWillUnmount() {
        AppStore.removeChangeListener(this.onThemeChange);
    }

    render() {
        return (
            <div className={this.state.theme}>
                <Header />
                <Container>
                    <AppRoutes />
                </Container>
            </div>
        );
    }
}

export default App;