var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var Panel = require('react-bootstrap/lib/Panel');
var Store = require('../stores/DebuggerStore');
var AllHeaders = require('./AllHeaders.jsx');
var MoreInfo = require('./MoreInfo.jsx');

var Home = React.createClass({
    getInitialState: function() {
        return Store.getData();
    },

    _onChange: function() {
        this.setState(Store.getData());
    },

    componentDidMount: function() {
        Store.addChangeListener(this._onChange);
        Store.update();
    },

    componentWillUnmount: function() {
        Store.removeChangeListener(this._onChange);
    },


    render: function() {
        
        var required = [];
        var optional = [];
        for(key in this.state.attributes) {
            var attr = this.state.attributes[key];
            if(attr.required) {
                required.push(
                    <div key={key}>{key} = {attr.present}</div>
                );
            } else {
                optional.push(
                    <div key={key}>{key} = {attr.present}</div>
                );
            }
        }

        return (
            <div className="row">
                <div className="col-lg-12">
                
                    <div className="row">
                        <div className="col-lg-4">
                            <Panel header="Compatibility">
                                REMOTE_USER={this.state.remote_user}<br />                                
                            </Panel>
                        </div>

                        <div className="col-lg-4">
                            <Panel header="Mandatory Attributes">
                                {required}
                            </Panel>
                        </div>

                        <div className="col-lg-4">
                            <Panel header="Optional Attributes">
                                {optional}
                            </Panel>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8">
                            <AllHeaders headers={this.state.headers} />
                        </div>
                        <div className="col-lg-4">
                            <MoreInfo />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

module.exports = Home;
