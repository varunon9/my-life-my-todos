import React from 'react';
import autoBind from 'react-autobind';
import { Input, Menu, Dropdown, Icon, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import AppActions from '../actions/AppActions';
import HeaderStore from '../stores/HeaderStore';

class Header extends React.Component {
	constructor(props) {
		super(props);
		autoBind(this);

		this.state = HeaderStore.getCurrentState();
	}

	handleMenuItemClick(e, itemProps) {
		AppActions.changeMenuItem(itemProps.name);
	}

	handleThemeChange(e, itemProps) {
		AppActions.changeTheme(itemProps.name);
	}

	handleViewChange(e, itemProps) {
		AppActions.changeView(itemProps.name);
	}

	onMenuItemChange() {
        this.setState(HeaderStore.getCurrentState());
    }
 
    componentWillMount() {
        HeaderStore.addChangeListener(this.onMenuItemChange);
    }
 
    componentWillUnmount() {
        HeaderStore.removeChangeListener(this.onMenuItemChange);
    }

    render() {
    	return (
    		<Menu primary="true" className="primary">
			    <Menu.Item>
                    <img src='icons/icon.svg' />
                </Menu.Item>
				<Menu.Item 
				    as={ Link }
					name="tasks" 
					to="/"
	                active={this.state.activeItem === 'tasks'}
	                onClick={this.handleMenuItemClick} 
		        />
				<Menu.Item
				    as={ Link }
					name="analytics"
					to="analytics"
					active={this.state.activeItem === 'analytics'}
					onClick={this.handleMenuItemClick} />
		        
		        <Menu.Menu position="right">
	                <Menu.Item>
	                    <Input icon="search" placeholder="Search..." />
	                </Menu.Item>
					<Dropdown item 
					        text="Settings">
                        <Dropdown.Menu>
							<Dropdown.Item>
								<Dropdown text="Theme">
									<Dropdown.Menu>
										<Dropdown.Item 
										    label={{ 
												color: 'purple', 
												empty: true, 
												circular: true 
											}}
											name="purple-theme"
											text="Purple"  
											onClick={this.handleThemeChange} />
										<Dropdown.Item
										    label={{ 
												color: 'blue', 
												empty: true, 
												circular: true 
											}}
											name="blue-theme"  
											text="Blue"
											onClick={this.handleThemeChange} />
										<Dropdown.Item
										    label={{ 
												color: 'teal', 
												empty: true, 
												circular: true 
											}}
											name="teal-theme"
											text="Teal" 
											onClick={this.handleThemeChange} />
										<Dropdown.Item
										    label={{ 
												color: 'grey', 
												empty: true, 
												circular: true 
											}}
											name="default-theme"
											text="Default" 
											onClick={this.handleThemeChange} />
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
							<Dropdown.Item>
							    <Dropdown text="View">
									<Dropdown.Menu>
									    <Dropdown.Item 
											name="listView" 
											onClick={this.handleViewChange}
											text="List View"
											icon="list"
										/>
										<Dropdown.Item 
											name="gridView" 
											onClick={this.handleViewChange}
											text="Grid View"
											icon="th"
										/>
									</Dropdown.Menu>
								</Dropdown>
							</Dropdown.Item>
                        </Dropdown.Menu>
	                </Dropdown>
	                <Menu.Item
					    as={ Link }
						name="about"
						to="about"
	                    active={this.state.activeItem === 'about'}
	                    onClick={this.handleMenuItemClick}
	                />
		        </Menu.Menu>
		    </Menu>
    	);
    }
}

export default Header;