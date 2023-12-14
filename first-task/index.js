 
    // React component with dynamically editable cells
    function App() {
      const initialData = [
        { id: 1, month: 'jan', randomData: 25 },
        { id: 2, month: 'march', randomData: 30 },
        { id: 3, month: 'june', randomData: 22 },
      ];

      const [data, setData] = React.useState(initialData);
      const [editMode, setEditMode] = React.useState(null);
      const [editedmonth, setEditedmonth] = React.useState('');
      const [editedAge, setEditedAge] = React.useState('');

      const handleEdit = (id, month, randomData) => {
        setEditMode(id);
        setEditedmonth(month);
        setEditedAge(randomData);
      };

      const handleSave = (id) => {
        const updatedData = data.map((item) =>
          item.id === id ? { ...item, month: editedmonth, randomData: editedAge } : item
        );
        setData(updatedData);
        setEditMode(null);
        // Here you can perform actions like posting data to a server
        console.log("Data ready for submission:", updatedData);
      };

      return React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement('th', null, 'month'),
            React.createElement('th', null, 'Number'),
            React.createElement('th', null, 'Action')
          )
        ),
        React.createElement(
          'tbody',
          null,
          data.map((item) =>
            React.createElement(
              'tr',
              { key: item.id },
              React.createElement(
                'td',
                {
                  onClick: () => setEditMode(item.id),
                  style: { cursor: 'pointer' },
                },
                editMode === item.id
                  ? React.createElement('input', {
                      type: 'text',
                      value: editedmonth,
                      onChange: (e) => setEditedmonth(e.target.value),
                    })
                  : item.month
              ),
              React.createElement(
                'td',
                {
                  onClick: () => setEditMode(item.id),
                  style: { cursor: 'pointer'  },
                },
                editMode === item.id
                  ? React.createElement('input', {
                      type: 'text',
                      value: editedAge,
                      onChange: (e) => setEditedAge(e.target.value),
                    })
                  : item.randomData
              ),
              React.createElement(
                'td',
                null,
                editMode === item.id
                  ? React.createElement('button', { onClick: () => handleSave(item.id) }, 'Save')
                  : React.createElement('button', { onClick: () => handleEdit(item.id, item.month, item.randomData) }, 'Edit')
              )
            )
          )
        )
      );
    }

    // Render the App component to the root element
    ReactDOM.render(React.createElement(App), document.getElementById('root'));
  