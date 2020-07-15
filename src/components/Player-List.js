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

    useEffect(() => {
        if (addPressed) addPlayer();
    }, [addPressed])

    const hideModal = () => {
        setIsOpen(false);
        setAddPressed(false);
    };

    const renderList = (items) => items.map(item => renderItem(item))

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

    const renderHeader = () => (
        <Card border="secondary" bg="secondary" style={{ width: '100%', marginTop: '0.5rem' }}>
            <Card.Body>
                <Row>
                    <Col sm={1}>
                        <Card.Title align="left">#</Card.Title>
                    </Col>
                    <Col sm={5}>
                        <Card.Title align="left">Player Name</Card.Title>
                    </Col>
                    <Col sm={3}>
                        <Card.Title align="left">Position</Card.Title>
                    </Col>
                    <Col sm={3}>
                        <Card.Title align="left">Action</Card.Title>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
    const renderItem = (item) => (
        <Card border="secondary" style={{ width: '100%', marginTop: '0.5rem' }} key={item._id}>
            <Card.Body>
                <Row>
                    <Col sm={1}>
                        <Card.Title align="left">{item.playerNo}</Card.Title>
                    </Col>
                    <Col sm={5}>
                        <Card.Title align="left">{item.playerName}</Card.Title>
                    </Col>
                    <Col sm={3}>
                        <Card.Text align="left">{item.playerPosition}</Card.Text>
                    </Col>
                    <Col sm={3} align="left">
                        <Button variant="outline-primary" size="sm" style={{ marginRight: '0.5rem' }} onClick={editPlayer.bind(null, item)}>Edit</Button>
                        <Button variant="outline-danger" size="sm" onClick={deletePlayer.bind(null, item._id, item.playerName)}>Delete</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );

    return (
        <>
            <Container>
                {renderHeader()}
                {
                    list.length > 0
                        ? renderList(list)
                        : <div style={{ paddingTop: '1rem' }}>No Cricketers data available. Click on the "Add Cricketer" link on the top bar to add new cricker data.</div>
                }
            </Container>
            <Modal show={isOpen} onHide={hideModal} size="lg">
                <Modal.Header>Add Player</Modal.Header>
                <Modal.Body><PlayerForm submitCallback={formSubmit} player={currentPlayer} /></Modal.Body>
            </Modal>
        </>
    )
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