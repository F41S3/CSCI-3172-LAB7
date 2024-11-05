import './css/footer.css';


export default function Footer({ children }) {
    return (
        <footer id="footer" className="footer">
            <div className="container">
                <div className="col">
                    <h3 className="footer-heading">About Me</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab, perspiciatis beatae autem
                        deleniti voluptate nulla a dolores, exercitationem eveniet libero laudantium recusandae officiis
                        qui aliquid blanditiis omnis quae. Explicabo?</p>
                </div>
                <div className="col">
                    <h3 className="footer-heading">Navigation</h3>
                    <ul className="footer-links">
                        <li><a href="#">Project Portfolio</a></li>
                        <li><a href="#">Work History</a></li>
                        <li><a href="#">Publications</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col">
                    <h3 className="footer-heading">Highlights</h3>
                    <ul className="footer-links">
                        <li><a href="#">All Projects</a></li>
                        <li><a href="#">Project 1</a></li>
                        <li><a href="#">Project 2</a></li>
                        <li><a href="#">Project 3</a></li>
                    </ul>
                </div>
                <div className="footer-legal">
                    <div className="container">
                        <div className="col2">
                            <div className="copyright">
                                <p>&copy; Copyright Dalhousie University | Authored by Alex Pettipas |
                                    2024</p>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="footer-links">
                                <li><a href="#">Social 1</a></li>
                                <li><a href="#">Social 2</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


