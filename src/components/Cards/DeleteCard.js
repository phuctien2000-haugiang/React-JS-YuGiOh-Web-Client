import React, { Component } from 'react';
import {
    deleteCard
} from "../../actions/cardActions";
import {connect} from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";

class DeleteCard extends Component {

    state = {
        modal: false,
        name: "", 
    }

    async componentDidMount() {
        const {name} = this.props.cardItem;
        this.setState({
            name
        })
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        })
    }

    onDelete = (e) => {
        e.preventDefault();
        this.props.deleteCard(this.props.cardItem._id)
        this.setState({
            modal: false,
        })
    }

    render() {
        const {toggle, onDelete} = this;
        const {name, modal} = this.state;

        return (
            <div>
                <Button color="danger" onClick={toggle}  className="up">
                    <i className="fas fa-trash-alt"></i>
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Delete Card</ModalHeader>
                    <ModalBody>
                    
                        <div className="row details-row">
                            <div className='col-lg-4 col-md-6 col-sm-12 details-col-title'>
                                <h4>Name:</h4>
                            </div>
                            <div className='col-lg-8 col-md-6 col-sm-12 details-col-data'>
                                <p>{name}</p>
                            </div>
                        </div>

                        <div className="row details-row">
                            <div className='col-lg-4 col-md-6 col-sm-12 details-col-title'>
                                <h4>Are you sure?</h4>
                            </div>
                            <div className='col-lg-8 col-md-6 col-sm-12 details-col-data'>
                                <p>Do you want to delete this card? <br/>Once deleted the card cannot be recovered</p>
                            </div>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={onDelete}>Yes</Button>
                        <Button color="secondary" onClick={toggle}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCard: (cardID) => {
            dispatch(deleteCard(cardID))
        }
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.cardReducer.cards
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCard);
