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
        if(name === "" || description === "" || type === "" || date === ""){
            alert("Please enter proper information");
            return;
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
                  <h1 style={{textAlign: 'center'}}>Add Bird</h1>
                    <div className="form-group">
                        <label htmlFor="nameId">Name</label>
                        <input type="text" className="form-control" id="nameId" placeholder="Enter Name" required
                               ref={input => (this.name = input)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descriptionId">Description</label>
                        <input type="text" className="form-control" id="descriptionId" placeholder="Enter Description"
                               required ref={input => (this.description = input)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="typeId">Type</label>
                        <input type="text" className="form-control" id="typeId" placeholder="Enter Type" required
                               ref={input => (this.type = input)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dateId">Date</label>
                        <input type="datetime-local" className="form-control" id="dateId"
                               placeholder="Enter Date Time 12-03-2019 12:12" required
                               ref={input => (this.date = input)}/>
                       </div>
                    <button type="submit" className="btn btn-primary" onClick={this.onHandleSubmit}>Add</button>
                </form>
            </>
        )
    }
}


export default Form;