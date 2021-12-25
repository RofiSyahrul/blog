/* eslint-disable @next/next/no-sync-scripts */
import type { MetaFunction } from 'remix';

import { buildMeta } from '~/utils/server/head.server';

export const meta: MetaFunction = () => {
  return {
    ...buildMeta({ title: 'Content Management', description: '', hideTitle: false }),
    robots: 'noindex'
  };
};

export default function Admin() {
  return (
    <>
      <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      <script src='https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js' />
      <script
        dangerouslySetInnerHTML={{
          __html: `
          CMS.registerPreviewStyle('/admin/styles.css')
          var PostPreview = createClass({
            render: function () {
              var entry = this.props.entry
              var date = entry.getIn(['data', 'date'])
              return h(
                'div',
                { className: 'content' },
                h('h1', {}, entry.getIn(['data', 'title'])),
                h('time', {}, entry.getIn(['data', 'date'])),
                h('div', {}, this.props.widgetFor('body'))
              )
            },
          })
          CMS.registerPreviewTemplate('posts', PostPreview)
        `
        }}
      />
    </>
  );
}
