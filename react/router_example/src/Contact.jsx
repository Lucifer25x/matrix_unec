const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact</h1>
            <form onSubmit={e => e.preventDefault()}>
                <div className="top">
                    <div>
                        <label htmlFor="#name">Nick name:</label>
                        <input type="text" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="#email">Email Address:</label>
                        <input type="email" id="email"/>
                    </div>
                </div>
                <label htmlFor="#message">Message:</label>
                <br />
                <textarea id="message"></textarea>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Contact;