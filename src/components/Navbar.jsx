import {Link} from 'react-router';

function Navbar() {
    
    return (
        <>
            <h1>Welcome to students database</h1>

            <ul style={{listStyleType: "none"}}>
            <li><Link to='/students'>View All Students</Link></li>
            <li><Link to='/students/21'>View One Student</Link></li>
            <li><Link to='/homepage'>Go back to Homepage</Link></li>
            </ul>
        </>
    )
}

export default Navbar;