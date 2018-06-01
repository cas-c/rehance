import React from 'react';
import { userResponseToOptions } from'../util';
import ProfilePageContainer from './ProfilePageContainer';

import { Async } from 'react-select';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: null
        };
    }
    onSelect = search => {
        this.setState({ search });
        this.props.selectUser(search.value, this.props.results);
        this.props.setResults([]);
    }
    getOptions = async (input, cb) => {
        if (input.length < 4) return;
        this.setState({ searchTerm: input });
        const results = await this.props.searchForUser(input);
        this.props.setResults(results);
        return userResponseToOptions(results);
    }
    render() {
        return (
            <div style={{ padding: '2em' }} >
                <Async loadOptions={this.getOptions} value={this.state.search} filterOptions={options => options} onChange={this.onSelect}/>
                <hr />
                <ProfilePageContainer />
            </div>
        )
    }
}

export default Home;
