import styles from "./nav.module.css"

const Nav = () => {
return(
    <nav className={`${styles.nav} container`}>
        <div className="logo">
         <img src="/images/Frame 2 1.png" alt="nav image" />
         </div>

        <ul>
            
    <li href="#">Home</li>
    <li href="#">About</li>
    <li href="#">Contact</li>
</ul>

    </nav>

);
};

export default Nav;


