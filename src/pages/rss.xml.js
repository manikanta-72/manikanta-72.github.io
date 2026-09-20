import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { profile } from '../data/site';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: profile.name,
    description: 'Notes on inference, post-training and evaluation.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/blog/${post.id}/`,
      })),
  });
}
