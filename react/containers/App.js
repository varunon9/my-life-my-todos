import React from 'react';
import { Container } from 'semantic-ui-react';

import Header from '../components/Header';
import AppRoutes from './AppRoutes';

const App = () => (
	<div>
    	<Header />
        <Container>
            <AppRoutes />
        </Container>
	</div>
)

export default App;