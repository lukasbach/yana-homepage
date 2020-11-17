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
      ]}
    />
  );
};
