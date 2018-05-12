/***
 * Working with React and custom tags.
 * 
***/

/**
 * Creates a new DOM tree under the designated parent node.
 */
ReactDOM.render(
  React.createElement('main', { "id": 'main-app-area' },
    React.createElement('aside', {},
      React.createElement('h2', {}, 'Requirements'),
      React.createElement('section', { "id": 'unscheduled' },
        React.createElement('div', {}, '44-542'),
        React.createElement('div', {}, '44-563'),
        React.createElement('div', {}, '44-560'),
        React.createElement('div', {}, '44-xxx'),
        React.createElement('div', {}, '44-xxx'),
        React.createElement('div', {}, '44-xxx'),
        React.createElement('div', {}, '44-xxx'),
        React.createElement('div', {}, '44-xxx'),
        React.createElement('div', {}, '44-xxx'),
        React.createElement('div', {}, '44-691'),
        React.createElement('div', {}, '44-692')
      ),
    ),
    React.createElement('article', { "id": 'scheduled' },
      React.createElement('section', {},
        React.createElement('h2', {}, '1 Fall 18'),
        React.createElement('p', {}, 'schedule classes here.')
      ),
      React.createElement('section', {},
        React.createElement('h2', {}, '2 Spring 19'),
        React.createElement('p', {}, 'schedule classes here.')
      ),
      React.createElement('section', {},
        React.createElement('h2', {}, '3 Summer 19'),
        React.createElement('p', {}, 'schedule classes here.')
      ),
      React.createElement('section', {},
        React.createElement('h2', {}, '4 Fall 19'),
        React.createElement('p', {}, 'schedule classes here.')
      )
    )
  ),
  document.getElementById('plannerApp')
)

