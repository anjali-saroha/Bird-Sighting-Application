import React, {Component} from 'react';
import './App.css';
import BirdList from "./Components/BirdList";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addBird, deleteBird, updateBird, addDate} from "./store/action";
import SimpleModal from "./Components/Modal.js/SimpleModal";


class App extends Component {
    constructor(props) {
        super(props);
        this.addNewBird = this.addNewBird.bind(this);
        this.deleteBird = this.deleteBird.bind(this);
        this.editBirdSubmit = this.editBirdSubmit.bind(this);
        this.addDate = this.addDate.bind(this);
    }

    addNewBird(data) {
        if(this.props.birdList.length === 0){
            console.log("new");
            this.props.addBird({id:1,name:data.name,description:data.description,type:data.type,date:[data.date]});

        }
        else{
            console.log("odd");
            this.props.addBird({id:Math.max(...this.props.birdList.map(function(o){return o.id})) + 1,name:data.name,description:data.description,type:data.type,date:[data.date]});
        }
    }

    deleteBird(id) {
        let r = window.confirm("Do you want to delete this item");
        if (r === true) {
            this.props.deleteBird(id);

        }
    }

    editBirdSubmit(id, name, description, type, date) {
        this.props.updateBird({id: id, name: name, description: description, type: type, date: [date]});
    }

    addDate(id, date) {
        this.props.addDate({id: id, date: date})
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                Bird Lists
                            </div>
                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Type</th>
                                        <th>Date/Time</th>
                                        <th>Update</th>
                                        <th>Delete</th>
                                    </tr>
                                    </thead>
                                    <BirdList deleteBird={this.deleteBird} birdList={this.props.birdList}
                                              editBirdSubmit={this.editBirdSubmit} onAddBird={this.addNewBird}
                                              addDate={this.addDate}/>
                                </table>
                                <div><SimpleModal onAddBird={this.addNewBird}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        birdList: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addBird: addBird,
        deleteBird: deleteBird,
        updateBird: updateBird,
        addDate: addDate
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(App);