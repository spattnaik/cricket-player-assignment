import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getItems, addItem, deleteItem, updateItem } from '../actions/player-actions';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

import PlayerForm from './Player-Form';

const PlayerList = ({ addPressed, setAddPressed, list, getItems, addItem, deleteItem, updateItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPlayer, setCurrentPlayer] = useState(undefined);

    const showModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        getItems();
    }, [getItems])

    useEffect(()=> {
        if(addPressed) addPlayer();
    },[addPressed])

    const hideModal = () => {
        setIsOpen(false);
        setAddPressed(false);
    };

    const renderList = (items) => (
        <Container>
            {items.map(item => renderItem(item))}
        </Container>
    )

    const formSubmit = (data, event) => {
        event.preventDefault();
        currentPlayer ? updateItem(currentPlayer._id, data) : addItem(data);
        hideModal();
    }

    const addPlayer = () => {
        setCurrentPlayer(undefined);
        showModal();
    }

    const editPlayer = (player, event) => {
        event.preventDefault();
        setCurrentPlayer(player);
        showModal();
    }

    const deletePlayer = (playerId, playerName, event) => {
        event.preventDefault();
        const response = window.confirm(`Are you sure, you want to delete player: ${playerName}`)
        if (response) {
            deleteItem(playerId);
        }
    }

    const renderItem = (item) => (
        <Card border="secondary" style={{ width: '30rem', marginTop: '0.5rem' }} key={item._id}>
            <Card.Body>
                <Card.Title align="left">{item.playerNo} - {item.playerName}</Card.Title>

                <Row>
                    <Col sm={8}>
                        <Card.Text align="left">Position: {item.playerPosition}</Card.Text></Col>
                    <Col sm={4}>
                        <Button variant="outline-primary" size="sm" style={{ marginRight: '0.5rem' }} onClick={editPlayer.bind(null, item)}>Edit</Button>
                        <Button variant="outline-danger" size="sm" onClick={deletePlayer.bind(null, item._id, item.playerName)}>Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
    return <div>{
        list.length > 0 ? renderList(list) : <div>not available</div>
    }
        <Modal show={isOpen} onHide={hideModal} size="lg">
            <Modal.Header>Add Player</Modal.Header>
            <Modal.Body><PlayerForm submitCallback={formSubmit} player={currentPlayer} /></Modal.Body>
        </Modal>
    </div>
}

const mapStateToProps = state => {
    return {
        list: state.players.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getItems: () => dispatch(getItems()),
        addItem: item => dispatch(addItem(item)),
        deleteItem: itemId => dispatch(deleteItem(itemId)),
        updateItem: (itemId, item) => dispatch(updateItem(itemId, item)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);;