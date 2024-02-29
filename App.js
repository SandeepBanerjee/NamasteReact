const heading = React.createElement("h1", {'id':'heading'}, "Hello world from react");
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const parent = React.createElement(
    "div",
    {'id':"parent"},
    [
        React.createElement(
            "div",
            {'id':"child1"},
            [   React.createElement( 'h1', {}, "I am H1 Heading" ),
                React.createElement( 'h2',{},"I am h2 Heading")
            ]
        ),
        React.createElement(
            "div",
            {'id':"child2"},
            [   React.createElement( 'h1', {}, "I am H1 Heading" ),
                React.createElement( 'h2',{},"I am h2 Heading")
            ]
        )
    ]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);