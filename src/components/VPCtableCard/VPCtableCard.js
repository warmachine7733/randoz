import React from 'react';
import { ListGroup } from 'react-bootstrap';
import EditButton from './../EditButton/EditButton.js';
import styles from './styles.module.css';



class VPCtableCard extends React.Component{

    render(){
        return(
            <ListGroup.Item className={styles.tableCard}
                    active={this.props.active}>
                <div className='d-flex justify-content-between'>
                    <span className={styles.cardText}>{this.props.text}</span>
                    
                    <EditButton/>
                </div>
            </ListGroup.Item>
        );
    }
}

export default VPCtableCard;