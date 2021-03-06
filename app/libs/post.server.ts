import fs from 'fs/promises';
import path from 'path';

import parseFrontMatter from 'front-matter';
import { marked } from 'marked';
import invariant from 'tiny-invariant';

export type Post = {
  slug: string;
  title: string;
};

export type PostMarkdownAttributes = {
  title: string;
};

export type PostWithContent = Post & {
  html: string;
};

// relative to the server output not the source!
const postsPath = path.join(__dirname, '..', 'posts');

function isValidPostAttributes(attributes: any): attributes is PostMarkdownAttributes {
  return attributes?.title;
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath);
  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename));
      const { attributes } = parseFrontMatter(file.toString());
      invariant(isValidPostAttributes(attributes), `${filename} has bad meta data!`);
      return {
        slug: filename.replace(/\.md$/, ''),
        title: attributes.title
      };
    })
  );
}

export async function getPost(slug: string): Promise<PostWithContent> {
  const filepath = path.join(postsPath, slug + '.md');
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());
  invariant(isValidPostAttributes(attributes), `Post ${filepath} is missing attributes`);
  const html = marked(body);
  return { slug, html, title: attributes.title };
}
