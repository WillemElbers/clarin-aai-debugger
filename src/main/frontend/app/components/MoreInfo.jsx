var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var Panel = require('react-bootstrap/lib/Panel');
var ListGroup = require('react-bootstrap/lib/ListGroup');
var ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

var MoreInfo = React.createClass({

    render: function() {
        return (
            <div className="row">
                <div className="col-lg-12"> 
                    <Panel header="More Information">
                         <ListGroup fill>
                            <ListGroupItem>
                                <a href="https://www.clarin.eu/content/attributes-service-provider-federation">Attributes in the Service Provider Federation</a>
                            </ListGroupItem>
                            <ListGroupItem>
                                <a href="https://www.clarin.eu/content/testing-which-attributes-identity-provider-releases">Testing which attributes an Identity Provider releases</a>
                            </ListGroupItem>
                        </ListGroup>
                    </Panel>                    
                </div>
            </div>
        );
    }

});

module.exports = MoreInfo;


