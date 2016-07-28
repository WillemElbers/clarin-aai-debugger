var React = require('react');
var Button = require('react-bootstrap/lib/Button');
var Panel = require('react-bootstrap/lib/Panel');
var Table = require('react-bootstrap/lib/Table');

var AllHeaders = React.createClass({

    getInitialState: function() {
        return {open: false};
    },

    render: function() {
        var headers = this.props.headers;

        var rows = [];        
        headers.forEach(function(header) {
            var values = "";
            header.values.forEach(function(value) {
                values += value + ",";
            });

            rows.push(
                <tr key={header.name}>
                    <td>{header.name}</td>
                    <td>{values.substring(0, values.length-1)}</td>
                </tr>
            );
        });

        return (
            <div className="row">
                <div className="col-lg-12"> 
                    <Panel collapsible header="Headers">
                        <Table striped condensed hover fill>
                            <thead>
                                <tr>
                                    <th>Header</th>
                                    <th>Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows}
                            </tbody>
                        </Table>
                    </Panel>                    
                </div>
            </div>
        );
    }
});

module.exports = AllHeaders;

