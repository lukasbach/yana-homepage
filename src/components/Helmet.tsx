import * as React from 'react';
import ReactHelmet from 'react-helmet';

export const Helmet: React.FC<{
  title?: string
}> = props => {
  return (
    <ReactHelmet
      title={props.title ?? "Yana - Powerful note-taking app"}
      meta={[
        { name: 'description', content: 'Manage your notes in a rich text editor with tons of features, or manage code snippets in the editor that powers Visual Studio Code.' },
        { name: 'keywords', content: 'yana, notes, notebook, app, open-source, tech, editor, wysiwyg, richtext, code, ide, organize, structure, nest, search, find, windows, ubuntu, mac, osx' },
        { name: 'author', content: 'Lukas Bach' },
        { name: 'google-site-verification', content: 'R79Kx9GdjbVl9Bam1nIs8legnkBIuKw0K5tbX8XuSxQ' }
      ]}
    >

      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,500;1,700&display=swap" rel="stylesheet" type="text/css" />
    </ReactHelmet>
  );
};
