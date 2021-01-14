import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

import App from './components/App';

// Import TinyMCE
import tinymce from 'tinymce/tinymce';

// Default icons are required for TinyMCE 5.3 or above
import 'tinymce/icons/default';

// A theme is also required
import 'tinymce/themes/silver';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/print';
import 'tinymce/plugins/save';

// Initialize the app
tinymce.init({
  selector: '#tiny',
  plugins: ['paste', 'link', 'print', 'save'],
  toolbar: ['paste', 'link', 'print'],
  menubar: true,
});

ReactDOM.render(<App />, document.getElementById('root'));
