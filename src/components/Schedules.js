import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Schedules = () => {
    const matchTypes = {
        t20: 'T20I',
        oneday: 'ODI',
        test: 'Test',
        getType: (type) => matchTypes.hasOwnProperty(type) ? matchTypes[type] : '--'
    };
    const logos = [
        {
            team: 'Australia',
            flag: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Cricket_Australia_Logo.png'
        },
        {
            team: 'South Africa',
            flag: 'https://upload.wikimedia.org/wikipedia/en/5/59/Southafrica_cricket_logo.svg'
        },
        {
            team: 'Bangladesh',
            flag: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Bangladesh_Cricket_Board_Logo.svg'
        },
        {
            team: 'England',
            flag: 'https://upload.wikimedia.org/wikipedia/en/c/ce/England_cricket_team_logo.svg'
        },
    ]
    const scheduleData = [
        {
            date: '24th Aug',
            venue: 'Ahmedabad',
            description: '1st test match of 2',
            team: 'Australia',
            type: 'test'
        },
        {
            date: '05th Sept',
            venue: 'Delhi',
            description: '2st test match of 2',
            team: 'Australia',
            type: 'test'
        },
        {
            date: '25th Sept',
            venue: 'Mumbai',
            description: '1st T20 match of 1',
            team: 'South Africa',
            type: 't20'
        },
        {
            date: '29th Sept',
            venue: 'Kolkata',
            description: '1st One Day of 3',
            team: 'Bangladesh',
            type: 'oneday'
        },
        {
            date: '02th Oct',
            venue: 'Cuttack',
            description: '2nd One Day of 3',
            team: 'Bangladesh',
            type: 'oneday'
        },
        {
            date: '02th Oct',
            venue: 'Kanpur',
            description: '3rd One Day of 3',
            team: 'Bangladesh',
            type: 'oneday'
        }
    ];

    const renderList = (items) => items.map(item => renderItem(item));

    const getLogo = (teamName) => {
        const logo = logos.find((item) => item.team === teamName);
        return logo ? <img height={30} width={30} src={logo.flag} alt="logo" /> : null;
    }

    const renderHeader = () => (
        <Card border="secondary" bg="secondary" style={{ width: '100%', marginTop: '0.5rem' }}>
            <Card.Body>
                <Row>
                    <Col sm={1}>
                        <Card.Title align="left">Type</Card.Title>
                    </Col>
                    <Col sm={2}>
                        <Card.Title align="left">Date</Card.Title>
                    </Col>
                    <Col sm={4}>
                        <Card.Title align="left">Description</Card.Title>
                    </Col>
                    <Col sm={3}>
                        <Card.Title align="left">Opponent</Card.Title>
                    </Col>
                    <Col sm={2}>
                        <Card.Title align="left">Venue</Card.Title>
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
                        <Card.Text align="left">{matchTypes.getType(item.type)}</Card.Text>
                    </Col>
                    <Col sm={2}>
                        <Card.Text align="left">{item.date}</Card.Text>
                    </Col>
                    <Col sm={4}>
                        <Card.Text align="left">{item.description}</Card.Text>
                    </Col>
                    <Col sm={3}>
                        <Card.Title align="left">{getLogo(item.team)}{item.team}</Card.Title>
                    </Col>
                    <Col sm={2}>
                        <Card.Text align="left">{item.venue}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );

    return (
        <Container>
            {renderHeader()}
            {scheduleData.length > 0 ? renderList(scheduleData) : <div>not available</div>}
        </Container>
    )
}

export default Schedules;