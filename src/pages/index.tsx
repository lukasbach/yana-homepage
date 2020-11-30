import * as React from 'react'
import { BrandHeader } from '../components/BrandHeader';
import { Navbar } from '../components/Navbar';
import { IntroductionHighlight } from '../components/highlights/IntroductionHighlight';
import { DownloadHighlight } from '../components/highlights/DownloadHighlight';
import { HighlightContainer } from '../components/highlight/HighlightContainer';
import { YoutubeEmbed } from '../components/YoutubeEmbed';
import { Footer } from '../components/Footer';
import { Helmet } from '../components/Helmet';

import '../style.css';

export default class extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <Helmet />
        <BrandHeader>
          <Navbar />
          <IntroductionHighlight />
        </BrandHeader>
        <DownloadHighlight />
        <HighlightContainer
          media={<YoutubeEmbed width={500} borderRadius={24} videoId="C4LzKL-i2ck" />}
          title="Powerful notes editor"
          text="Manage your notes in a rich text editor with tons of features, or manage code snippets in the editor that powers Visual Studio Code."
          form={1}
        />
        <HighlightContainer
          media={<YoutubeEmbed width={500} borderRadius={24} videoId="e1Cxk_Fzmn8" />}
          title="Organize your thoughts"
          text="Structure your notes with nesting, tags and a powerful search."
          invert={true}
          form={2}
        />
        <HighlightContainer
          media={<YoutubeEmbed width={500} borderRadius={24} videoId="dgt9wkyx5_M" />}
          title="A notebook that scales"
          text="Manage ten thousands of notes with ease, so your notebook will never become the bottleneck."
          form={3}
        />
        <DownloadHighlight />
        <a
          href="https://www.producthunt.com/posts/yana-3?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-yana-3"
          target="_blank"
          style={{ border: 'none', textDecoration: 'none !important', textAlign: 'center', display: 'block' }}
        >
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=276473&theme=dark"
            alt="Yana - Powerful & organizable note-taking app with lots of features | Product Hunt"
            width="250"
            height="54"
          />
        </a>
        <Footer />
      </div>
    )
  }
}
