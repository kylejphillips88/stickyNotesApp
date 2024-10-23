import React from 'react';
import { Container, Card, Alert } from 'react-bootstrap';

const PrivacyPage = () => {
    return (
        <Container className="py-5">
            <Card className="mx-auto" style={{ maxWidth: '700px' }}>
                <Card.Header>
                    <Card.Title>
                        Privacy Notice
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                        <p>
                            I recommend using a fake email address to sign up for Sticky Notes and not storing any sensitive information once logged in.
                        </p>
                        <p className="mb-0">
                            This intended use of this app is purely to show my skills as a junior developer and I cannot guarantee the safety of the data stored.
                        </p>
                    <div className="mt-4">
                        <p className="mb-0">
                            Kind Regards,
                            <br />
                            <strong>Kyle Phillips</strong>
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default PrivacyPage;