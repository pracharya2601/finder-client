import React from 'react';
import Helmet from 'react-helmet';

const Title = (props) => {
  // const {
  //   title,
  //   item,
  //   user,
  //   // user: {
  //   //   // credentials: { fullName },
  //   // },
  //   // console.log
  // } = props;
  // console.log(user);
  // var defaultTitle = 'EasyPezy';

  // const titleFunction = (title) => {
  //   if (title === 'singleitem' || title === 'edit') return item;
  //   if (title === 'user') return defaultTitle;
  //   if (title === 'saved') return `Saved Items ${defaultTitle}`;
  //   return title;
  // };

  return (
    <Helmet>
      <title>{props.title}</title>
      <meta
        name="description"
        content="Online stuff posting at free of cost."
      />

      {/* <!-- Google / Search Engine Tags --> */}
      <meta itemprop="name" content="EasyPezy" />
      <meta
        itemprop="description"
        content="Online stuff posting at free of cost."
      />
      <meta
        itemprop="image"
        content="https://easypezy.com/static/media/iconn.a203f6bd.png"
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://easypezy.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="EasyPezy" />
      <meta
        property="og:description"
        content="Online stuff posting at free of cost."
      />
      <meta
        property="og:image"
        content="https://easypezy.com/static/media/iconn.a203f6bd.png"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="EasyPezy" />
      <meta
        name="twitter:description"
        content="Online stuff posting at free of cost."
      />
      <meta
        name="twitter:image"
        content="https://easypezy.com/static/media/iconn.a203f6bd.png"
      />
    </Helmet>
  );
};

export default Title;
