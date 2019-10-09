import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import axios from 'axios'

class EditContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            photo: "",
            name: "",
            phone: ""
        };


    }


  

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (<div>
            <Button color="success"
                onClick={
                    () => {
                        this.toggle()

                    }
            }>Add new contact</Button>
            <Modal isOpen={
                    this.state.modal
                }
                toggle={
                    this.toggle
                }
                className={
                    this.props.className
            }>
                <ModalHeader toggle={
                    this.toggle
                }>Add Contact</ModalHeader>
                <ModalBody>

                    <FormGroup>
                        <Label for="examplephoto">photo</Label>
                        <Input id="examplephoto" name="photo"
                            value={
                                this.state.photo
                            }
                            onChange={
                                (e) => this.setState({photo: e.target.value})
                            }
                            placeholder="Contact photo"
                            type="text"/>
                        <Label for="exampleName">name</Label>
                        <Input id="exampleName" name="Name"
                            value={
                                this.state.name
                            }
                            onChange={
                                (e) => this.setState({name: e.target.value})
                            }
                            placeholder="Contact name"
                            type="text"/>
                        <Label for="examplephone">phone</Label>
                        <Input id="examplephone" name="phone"
                            value={
                                this.state.phone
                            }
                            onChange={
                                (e) => this.setState({phone: e.target.value})
                            }
                            placeholder="Contact phone"
                            type="text"/>
                    </FormGroup>


                </ModalBody>
                <ModalFooter>

                   
                    <Button color="primary"
                        onClick={
                            () => {
                                axios.post(`/contacts`, {
                                    photo: this.state.photo,
                                    name: this.state.name,
                                    phone: this.state.phone
                                }).then(this.props.getContact)
                                
                                this.toggle()
                            }
                    }>Add</Button>

                    <Button color="secondary"
                        onClick={
                            this.toggle
                    }>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>);
    }
}

export default EditContact;
