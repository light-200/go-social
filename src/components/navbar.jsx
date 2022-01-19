import '../style/navbar.css'

const Navbar = () => {
    return (<div className='navigationContainer'>
        <nav className='navigation'>
            <div className='logo'>go-social</div>
            <div className='navBtns'>
                <div className="btn navBtn">feed</div>
                <div className="btn navBtn search">search</div>
                <div className="btn navBtn">logout</div>
            </div>
        </nav>
    </div>);
}

export default Navbar;