var React = require('react');

var PageWrapper = React.createClass({
    getInitialState() {
        return {};
    },

    componentDidMount() {
    },

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="container container-fill">
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
});

var Footer = React.createClass({
    getInitialState() {
        return {};
    },

    componentDidMount() {
    },

    render() {
        return (
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-sm-push-3 col-xs-12">
                            <div className="text-center">
                                <span className="footer-fineprint">
                                    Service provided by <a href="https://www.clarin.eu">CLARIN</a>
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-3 col-sm-pull-6 col-xs-12">
                            <div className="hidden-xs">
                                <a href="./about">About</a>
                            </div>
                            <div className="version-info text-center-xs">
                                v1.0.0-beta1
                            </div>
                        </div>
                        <div className="col-sm-3 hidden-xs text-right">
                            <a href="mailto:spf@clarin.eu">Contact</a>
                        </div>
                        <div className="visible-xs-block text-center">
                            <a href="./about">About</a>
                            &nbsp;<a href="mailto:spf@clarin.eu">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
});

var Header = React.createClass({
    getInitialState() {
        return {};
    },

    componentDidMount() {
    },

    render() {
        return (
            <header id="header" role="banner" className="beta header">
                <div className="clarin-top visible-xs">
                    <a className="logo center-block" href="http://www.clarin.eu"></a>
                </div>
                <span className="qualifier snapshot">TESTING</span>
                <span className="qualifier beta">BETA</span>
                <div className="navbar-static-top  navbar-default navbar" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#id1">
                            <span className="sr-only">Toggle Navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="./" id="ida">
                            <span><i className="fa fa-globe" aria-hidden="true"></i> Attribute Debugger</span>
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" role="navigation" id="id1">
                        <ul className="nav navbar-nav" id="idb">
                            <li>
                                <a href="./help">Help</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right" id="idc">
                            <li>
                                <a href="http://www.clarin.eu/" className="clarin-logo hidden-xs">
                                    <span>CLARIN</span><
                                /a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </header>
        );
    }
});

module.exports = PageWrapper;