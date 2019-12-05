import React, {Component} from 'react';

export default class BirdItem extends Component {
    constructor(props) {
        super(props);
        this.state = {isEdit: false}
        this.editBird = this.editBird.bind(this);
        this.editBirdSubmit = this.editBirdSubmit.bind(this);
        this.deleteBird = this.deleteBird.bind(this);
    }

    deleteBird() {
        const {id} = this.props.bird;
        this.props.deleteBird(id);
    }

    editBird() {
        this.setState((prevState, props) => ({
            isEdit: !prevState.isEdit
        }))
    }

    editBirdSubmit() {
        const {id, name, description, type} = this.props.bird;
        const updatedName = this.nameInput.value;
        const updatesDescription = this.descriptionInput.value;
        const updatedType = this.typeInput.value;
        const updatedDate = this.dateInput.value;
        this.setState((prevState, props) => ({
            isEdit: !prevState.isEdit
        }));
        if (name === updatedName && description === updatesDescription && type === updatedType) {
            if(updatedDate === ""){
                 return ;
            }
            this.props.addDate(id, updatedDate)
        } else {
            this.props.editBirdSubmit(
                id,
                updatedName,
                updatesDescription,
                updatedType,
                updatedDate
            );
        }
    }


    render() {
        const {name, description, type, date} = this.props.bird;
        return (
            this.state.isEdit === true ? (
                <tr className="bg-warning" key={this.props.index}>
                    <td>
                        <input ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
                    </td>
                    <td>
                        <input defaultValue={description}
                               ref={descriptionInput => this.descriptionInput = descriptionInput}/>
                    </td>
                    <td>
                        <input ref={typeInput => this.typeInput = typeInput} defaultValue={type}/>
                    </td>
                    <td>
                        <input type="datetime-local"
                               ref= {dateInput => this.dateInput = dateInput}
                               defaultValue={""}/>
                    </td>
                    <td>
                        <i  className="fa fa-save" aria-hidden="true" onClick={this.editBirdSubmit}/>
                    </td>
                    <td>
                        <i className="fa fa-trash-o" aria-hidden="true"/>
                    </td>
                </tr>
            ) : (
                <tr key={this.props.index}>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{type}</td>
                    <td>{date.map((date,index) => (
                          <React.Fragment key={index}>{date}<br></br></React.Fragment>
                     ))}</td> 
                    <td><i className="fa fa-pencil" aria-hidden="true" onClick={this.editBird}/></td>
                    <td><i className="fa fa-trash-o" aria-hidden="true"onClick={this.deleteBird}/></td>
                </tr>
            )
        );
    }
}
