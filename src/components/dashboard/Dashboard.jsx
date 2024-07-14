// src/Dashboard.js

import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Form, Button } from 'react-bootstrap';
import '../../styles/dashboard.css';

const Dashboard = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [announcement, setAnnouncement] = useState('');
  const [event, setEvent] = useState({ name: '', date: '', description: '' });

  const handleChatSubmit = (e) => {
    e.preventDefault();
    console.log('Chat message:', chatMessage);
    setChatMessage('');
  };

  const handleAnnouncementSubmit = (e) => {
    e.preventDefault();
    console.log('Announcement:', announcement);
    setAnnouncement('');
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    console.log('Event:', event);
    setEvent({ name: '', date: '', description: '' });
  };

  return (
    <Container className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <Tab.Container id="dashboard-tabs" defaultActiveKey="chat">
        <Row>
          <Col sm={3} className="sidebar">
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="chat">Chat</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="announcement">Announcement</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="events">Events</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9} className="content">
            <Tab.Content>
              <Tab.Pane eventKey="chat">
                <h3>Chat</h3>
                <Form onSubmit={handleChatSubmit}>
                  <Form.Group controlId="chatMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your message"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="submit-button">
                    Send
                  </Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="announcement">
                <h3>Announcement</h3>
                <Form onSubmit={handleAnnouncementSubmit}>
                  <Form.Group controlId="announcement">
                    <Form.Label>Announcement</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your announcement"
                      value={announcement}
                      onChange={(e) => setAnnouncement(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="submit-button">
                    Submit
                  </Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="events">
                <h3>Events</h3>
                <Form onSubmit={handleEventSubmit}>
                  <Form.Group controlId="eventName">
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter event name"
                      value={event.name}
                      onChange={(e) => setEvent({ ...event, name: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group controlId="eventDate">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={event.date}
                      onChange={(e) => setEvent({ ...event, date: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group controlId="eventDescription">
                    <Form.Label>Event Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter event description"
                      value={event.description}
                      onChange={(e) => setEvent({ ...event, description: e.target.value })}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="submit-button">
                    Create Event
                  </Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Dashboard;
