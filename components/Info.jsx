export default function Info() {
    return (
        <header>
            <img src="../src/assets/images/dummy-avatar.jpg" className="profile-img" />
            <div className="profile-info">
                <h2>Sanjay</h2>
                <h3>FullStack Developer</h3>
                <p>sanjayp.com</p>
            </div>

            <div className="profile-btn">
                <a href="#" className="email-icon">
                    <img src='../src/assets/icons/email.png' alt="Email icon" />
                    Email
                </a>
                <a href="#" className="linkedin-icon">
                    <img src='../src/assets/icons/linkedIn.png' alt="LinkedIn icon" />
                    LinkedIn
                </a>
            </div>
        </header>
    )
}