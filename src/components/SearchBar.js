import React from "react";



class SearchBar extends React.Component {

    state = {
        term:''
    }

    onSubmit=(event)=>{
        //prevent auto refresh/submit of form
        event.preventDefault();
        this.props.passPropsToParent(this.state.term);

    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search: </label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(event)=>this.setState({term:event.target.value})}
                        />
                    </div>

                </form>
            </div>

        );
    }

}
export default SearchBar;