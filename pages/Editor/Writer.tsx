// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';
// import axios from 'axios';

import Nav from '../Components/Nav';
import WriterStyles from './Writer.module.css';
// import '@toast-ui/editor/dist/toastui-editor.css';
// import { Editor } from '@toast-ui/react-editor';

export default function Writer() {
  return (
    <>
      <Nav />
      <section>
        <h1 id={WriterStyles.postPageTitle}>ADD POST</h1>
        <form>
          <h2>Title</h2>
          <input />
          <h2>Thumbnail</h2>
          <input />
          <span>or</span>
          <input />
          {/* <Editor /> */}
        </form>
      </section>
    </>
  );
}
