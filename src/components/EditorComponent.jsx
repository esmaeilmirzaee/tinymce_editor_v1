import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

class EditorComponent extends React.Component {
  handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  };

  render() {
    return (
      <Editor
        initialValue='<p>This is the initial content of the editor</p>'
        init={{
          height: 500,
          menubar: true,
          selector: 'textarea', // change this value according to your HTML
          plugins: [],
          toolbar:
            'undo redo | print | template | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
          templates: [
            {
              title: 'Date modified example',
              description:
                'Adds a timestamp indicating the last time the document modified.',
              content:
                '<p>Last Modified: <time class="mdate">This will be replaced with the date modied.</time></p>',
            },
            {
              title: 'Replace values example',
              description:
                'These values will be replaced when the template is inserted into the editor content.',
              content: '<p>Name: {$username}, StaffID: {$staffid}</p>',
            },
            {
              title: 'Replace values preview example',
              description:
                'These values are replaced in the preview, but not when inserted into the editor content.',
              content:
                '<p>Name: {$preview_username}, StaffID: {$preview_staffid}</p>',
            },
            {
              title: 'Replace values preview and content example',
              description:
                'These values are replaced in the preview, and in the content.',
              content:
                '<p>Name: {$inboth_username}, StaffID: {$inboth_staffid}</p>',
            },
          ],
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default EditorComponent;
