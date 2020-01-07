import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.css';



class AddButton extends React.Component{

    openAddModal = () => {
        this.props.onClick();
    };

    render(){
        return(
            <Button className={`btn-secondary ${styles.smallButton}`} onClick={this.openAddModal} disabled={this.props.disabled}><b>+</b></Button>
        );
    }
}

export default AddButton;