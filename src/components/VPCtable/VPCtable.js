import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import AddButton from './../AddButton/AddButton.js';
import VPCtableCard from './../VPCtableCard/VPCtableCard.js'
import styles from './styles.module.css';



const SortableItem = SortableElement(({value, sortIndex, active}) => <VPCtableCard 
                                                    text={value}
                                                    active={active}
                                                    index={sortIndex}
                                                   />);

const SortableList = SortableContainer(({items, selected, half}) => {
  return (
    <ListGroup className={styles.itemList}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} sortIndex={index} value={value} active={!half && index === selected ? true : false}/>
      ))}
    </ListGroup>
  );
});


class VPCtable extends React.Component{
    state = {
        selectedIndex: -1,
    }

    openAddModal = () => {
        this.props.onClickAddButton(this.props.title);
    }

    selectCard = (clickedCard) => {
        console.log(clickedCard)
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.props.updateFunction(this.props.title, oldIndex, newIndex);
        this.setState({selectedIndex: newIndex});
      };

    render(){
        return(
            <Card className={this.props.half ? styles.halfListContainer : styles.fullListContainer}>
                <Card.Header className={styles.smallHeader}>
                    <div className='d-flex justify-content-between'>
                        <p className={styles.noLineBreak}>{this.props.title}</p>
                        <AddButton onClick={this.openAddModal} disabled={this.props.addButtonDisabled}/>
                    </div>
                </Card.Header>
                <Card.Body>
                    <SortableList 
                        items={this.props.items}
                        onSortEnd={this.onSortEnd}
                        selected={this.state.selectedIndex}
                        half={this.props.half}/>
                </Card.Body>
            </Card>
        );
    }
}

export default VPCtable;