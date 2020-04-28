import React from "react";
import unsplash from "../apiCalls/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component{

    state = {
        images:[]
    }

     onSearchSubmit = async (term)=>{
        //updated whenever we update this function in side chile component
        //must have the same service
        const response = await unsplash.get('/search/photos',{
            params:{
                query:term,
            }

        });
        this.setState({images: response.data.results});
    }

    render() {
        //we can write any js code here or jsx code
        return ( // this return our jsx
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar passPropsToParent={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        );
    }

}
export default App;