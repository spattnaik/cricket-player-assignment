import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const PlayerForm = ({ player, submitCallback }) => {
    const [playerName, setPlayerName] = useState('');
    const [playerPosition, setPlayerPosition] = useState('');
    const [playerNo, setPlayerNo] = useState('');

    useEffect(() => {
        if (player) {
            console.log(player)
            setPlayerName(player.playerName);
            setPlayerPosition(player.playerPosition);
            setPlayerNo(player.playerNo);
        }
    }, [player])

    return (
        <Form onSubmit={submitCallback.bind(null, { playerName, playerNo, playerPosition })}>
            <Form.Group controlId="formPlayerNo">
                <Form.Label>Player No</Form.Label>
                <Form.Control
                    required
                    value={playerNo}
                    placeholder="Enter Player Number"
                    name="playerNo"
                    onChange={(event) => setPlayerNo(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formPlayerName">
                <Form.Label>Player Name</Form.Label>
                <Form.Control
                    required
                    value={playerName}
                    placeholder="Enter Player Name"
                    name="playerName"
                    onChange={(event) => setPlayerName(event.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formPlayerPosition">
                <Form.Label>Player Position</Form.Label>
                <Form.Control
                    required
                    value={playerPosition}
                    placeholder="Enter Player Posiiton"
                    name="playerPosition"
                    onChange={(event) => setPlayerPosition(event.target.value)}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Save
            </Button>
        </Form>
    )
}

export default PlayerForm;