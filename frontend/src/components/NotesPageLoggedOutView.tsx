import { Card, Table } from "react-bootstrap";
import styles from "../styles/Note.module.css"
import styleUtils from "../styles/utils.module.css"

const NotesPageLoggedOutView = () => {
    return ( 
        <Card className={styles.noteCard}>
            <Card.Body>
                <Card.Title className={styleUtils.flexCenter}>
                    <p>Sticky Notes</p>
                </Card.Title>
                <Card.Text className={styles.cardText}>
                    <p>To use the app log in or sign up by clicking one of the buttons located on the navigation bar and enter the required details.</p>
                    <p>This app was created following Coding In Flow's MERN (MongoDB, Express, React, NodeJS) tutorial on Youtube.</p>
                    <p>Building and deploying this app taught me a great deal of backend & frontend skills, such as:</p>
                    <ul>
                        <li>Understanding database, backend & frontend communication</li>
                        <li>Creating router functions using GET, POST, PATCH & DELETE</li>
                        <li>Understanding & utilising request handling & error handling</li>
                        <li>Creating user sessions</li>
                        <li>Hashing passwords</li>
                        <li>Creating reusable web app components</li>
                    </ul>
                    <p>-Kyle Phillips<br/>September 2024</p>
                </Card.Text>
            </Card.Body>
        </Card>
     );
}
 
export default NotesPageLoggedOutView;