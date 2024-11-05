import './css/navbar.css';

/*
https://create-react-app.dev/docs/adding-a-stylesheet/
https://medium.com/@viswaretaskotra/how-to-build-a-simple-and-elegant-react-website-in-30-minutes-132b92cc0dd5

 */
export default function Navbar({ children }) {
    return (
        <header>
            <h1 className="pageTitle">Alex Pettipas</h1>
            <div className="dropdown">
                <button className="dropbtn" >Menu</button>
                <div className="dropdown-content">
                    <a href="https://github.com/">Project Portfolio</a>
                    <a href="https://www.google.com/">Work History</a>
                    <a href="https://www.google.com/">Publications</a>
                    <a href="https://www.google.com/">Contact</a>
                </div>
            </div>
        </header>
    )
}


