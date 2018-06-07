import React from "react";
import autoBind from 'react-autobind';
import { Input, Menu } from "semantic-ui-react";

import HeaderActions from '../actions/HeaderActions';
import HeaderStore from '../stores/HeaderStore';

class Header extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = HeaderStore.getCurrentState();
	}

	handleItemClick(e, itemProps) {
		HeaderActions.changeMenuItem(itemProps.name);
	}

	onChange() {
        this.setState(HeaderStore.getCurrentState());
    }
 
    componentWillMount() {
        HeaderStore.addChangeListener(this.onChange);
    }
 
    componentWillUnmount() {
        HeaderStore.removeChangeListener(this.onChange);
    }

    render() {
    	return (
    		<Menu secondary>
		        <Menu.Item 
	                name="tasks" 
	                active={this.state.activeItem === "tasks"} 
	                onClick={this.handleItemClick} 
		        />
		        <Menu.Item
	                name="analytics"
	                active={this.state.activeItem === "analytics"}
	                onClick={this.handleItemClick}
		        />
		        
		        <Menu.Menu position="right">
	                <Menu.Item>
	                    <Input icon="search" placeholder="Search..." />
	                </Menu.Item>
	                <Menu.Item
	                    name="about"
	                    active={this.state.activeItem === "about"}
	                    onClick={this.handleItemClick}
	                />
		        </Menu.Menu>
		    </Menu>
    	);
    }
}

export default Header;