import React from 'react';
import App from "../../App";
import Modal from 'react-modal';
import Form from "../Form/Form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

Modal.setAppElement(App);

class SimpleModal extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false
        };
        Modal.setAppElement('body');
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }


    openModal() {
        this.setState({modalIsOpen: true});
    }


    closeModal() {
        this.setState({modalIsOpen: false});
    }
    

    render() {
        return (
            <div>
                <button className="btn btn-dark pull-left" onClick={this.openModal}>Add New</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button type="button" className="close" onClick={this.closeModal}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <Form onAddBird={this.props.onAddBird}/>
                </Modal>
            </div>
        );
    }
}

export default SimpleModal;