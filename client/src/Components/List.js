import React, {Component} from 'react'
import Cards from './Card'
import axios from 'axios'
import Add from './Add'

export default class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactList: []
        }
    }
    componentDidMount = () => {
        this.getContacts()
    }
    getContacts = () => {
        axios.get('/contacts').then(res => {
            this.setState({contactList: res.data})
        })
    }

    handleDelete = (id) => {
        axios.delete(`/contacts/${id}`).then(this.getContacts)
        
    }

    render() {
        console.log(this.state.contactList)

        return (<div style={{display:'flex',flexWrap:"wrap"}}> {
            this.state.contactList.map(e =>< Cards contact = {
                e
            }
            edit = {
                this.handleEdit
            }
            delete = {
               ()=> this.handleDelete(e._id)
            } />) 
            
        }   <Add getContact={ this.getContacts}/></div>)
    }
}
