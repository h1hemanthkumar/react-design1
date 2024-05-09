function Page()
{   return (
        <div>
            <header>
                <nav>
                    <img src="./reacticon.jpeg" alt="react photo" className="nav-logo"></img>
                    <h3>ReactFacts</h3>
                    <h4>React Course Project-1</h4>
                </nav>
            </header>
            <div className="mainContent">
                <h1 className="headcontent">Fun facts about React</h1>
                <ul className="list">
                    <li className="list-items">
                        Was first released in 2013 
                    </li>
                    <li className="list-items">
                        Was originally created by Jordan Walke
                    </li>
                    <li className="list-items">
                        Has well over 100K stars on GitHub
                    </li>
                    <li className="list-items">
                        Is maintained by Facebook
                    </li>
                    <li className="list-items">
                        Powers thousands of enterprise apps,including mobile apps.
                    </li>
                </ul>
            </div>
        </div>
)
}

ReactDOM.render(<Page />,document.getElementById("root"));