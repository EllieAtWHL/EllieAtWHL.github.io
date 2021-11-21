function header(){

    class MenuItem extends React.Component{
        render() {
            return (
                React.createElement("a", {href:this.props.href},this.props.title)
            )
        }
    }

    const rootElement = 
        React.createElement("div", {},
            React.createElement("h1", {}, "EllieAtWHL"),
            React.createElement("nav", {className: "menu", id: "myMenu"}, 
                React.createElement(MenuItem, {
                    href : "../index.html",
                    title : "Home"
                }),
                React.createElement(MenuItem, {
                    href : "../pages/aboutMe.html",
                    title : "About Me"
                })
            )
        );

    ReactDOM.render(rootElement, document.getElementById("header"));
}

/*
<!-- TODO: Change logo at top of page to just name-->
<!-- TODO: Work out where I can incorporate full logo-->
<img src="./images/logo.png" alt="EllieAtWHL" class="banner">

<nav class="menu" id="myMenu">
    <span class="active">Home</span>
    <a href="./pages/aboutMe.html">About Me</a>
    <a href="./pages/aboutMe.html">Projects</a>
    <a href="./pages/aboutMe.html">Contact Me</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
      <i class="fa fa-bars"></i>
    </a>
</nav>
</img>
*/