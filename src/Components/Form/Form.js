import React, {Component} from "react";

class Form extends Component {
    onHandleSubmit = event => {
        event.preventDefault();
        const name = this.name.value;
        const description = this.description.value;
        const type = this.type.value;
        const date = this.date.value;
        const bird = {
            name: name,
            description: description,
            type: type,
            date: date
        }
        this.props.onAddBird(bird);
        this.name.value="";
        this.description.value="";
        this.type.value="";
        this.date.value="";
    }


    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label htmlFor="nameid">Name</label>
                        <input type="text" className="form-control" id="nameid" placeholder="Enter Name" required
                               ref={input => (this.name = input)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionid">Description</label>
                        <input type="text" className="form-control" id="descriptionid" placeholder="Enter Description"
                               required ref={input => (this.description = input)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="typeid">Type</label>
                        <input type="text" className="form-control" id="typeid" placeholder="Enter Type" required
                               ref={input => (this.type = input)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateid">Date</label>
                        <input type="datetime-local" className="form-control" id="dateid"
                               placeholder="Enter Date Time 12-03-2019 12:12" required
                               ref={input => (this.date = input)}/>
                       </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onHandleSubmit}>Submit</button>
                </form>
            </>
        )
    }
}


export default Form;