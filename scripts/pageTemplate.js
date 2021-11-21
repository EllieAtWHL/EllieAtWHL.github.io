function pageTemplate(){

    class MenuItem extends React.Component{
        render() {
            return (
                React.createElement("a", {href:this.props.href, target:this.props.target},this.props.title)
            )
        }
    }

    class Copyright extends React.Component{
        render(){
            return (
                React.createElement("div", {className:"copyright"},
                    React.createElement("i",{},"Copyright © Ellie Matthewman. All Rights Reserved.")
                )
            )
        }
    }

    class Header extends React.Component{
        render() {
            return (
                React.createElement("div", {},
                    React.createElement("img", {src:"../images/logo.png", alt:"EllieAtWHL", className:"banner"}, ),
                    React.createElement("nav", {className: "menu", id: "myMenu"}, 
                        React.createElement(MenuItem, {
                            href: "../index.html",
                            title: "Home"
                        }),
                        React.createElement(MenuItem, {
                            href: "../pages/aboutMe.html",
                            title: "About Me"
                        }),
                        React.createElement(MenuItem, {
                            href: "../pages/projects.html",
                            title: "Projects"
                        }),
                        React.createElement(MenuItem, {
                            href: "../pages/contactMe.html",
                            title: "Contact Me"
                        })
                    )
                )
            )
        }
    }

    class Footer extends React.Component{
        render() {
            return (
                React.createElement("div", {},
                    React.createElement("h4", {},"Quick Links"),
                    React.createElement("ul", {}, 
                        React.createElement("li", {}, 
                            React.createElement(MenuItem, {
                                href: "https://www.linkedin.com/in/elliematthewman/",
                                title: "LinkedIn",
                                target: "_blank"
                            })
                        ),
                        React.createElement("li", {}, 
                            React.createElement(MenuItem, {
                                href: "https://medium.com/@eleanormatthewman",
                                title: "Medium",
                                target: "_blank"
                            })
                        ),
                        React.createElement("li", {}, 
                            React.createElement(MenuItem, {
                                href: "https://twitter.com/EllieAtWHL",
                                title: "Twitter",
                                target: "_blank"
                            })
                        ),
                        React.createElement("li", {}, 
                            React.createElement(MenuItem, {
                                href: "https://trailblazer.me/id/elliematthewman",
                                title: "Trailhead",
                                target: "_blank"
                            })
                        ),
                        React.createElement("li", {}, 
                            React.createElement(MenuItem, {
                                href: "https://ellie-at-whl-developer-edition.um4.force.com/portfolio/s/",
                                title: "Salesforce Portfolio",
                                target: "_blank"
                            })
                        ),
                    ),
                    React.createElement(Copyright,{})
                )
            )
        }
    }
    const headerElement = React.createElement(Header, {});

    const footerElement = React.createElement(Footer, {});

    ReactDOM.render(headerElement, document.getElementById("header"));
    ReactDOM.render(footerElement, document.getElementById("footer"));
    
}