import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './styles.module.css';



class EditButton extends React.Component{



    render(){
        return(
            <Button className={`btn-secondary ${styles.smallButton}`}><b>⋮</b></Button>
        );
    }
}

export default EditButton;