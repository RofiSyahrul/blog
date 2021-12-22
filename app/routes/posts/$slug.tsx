import { useLoaderData } from 'remix';
import type { LoaderFunction } from 'remix';
import invariant from 'tiny-invariant';

import { getPost, PostWithContent } from '~/libs/post.server';

export const loader: LoaderFunction = async ({
  params
}) => {
  invariant(params.slug, 'expected params.slug');
  return getPost(params.slug);
};

export default function PostSlug() {
  const post = useLoaderData<PostWithContent>();

  return (
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  );
}
