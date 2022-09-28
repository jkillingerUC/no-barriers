import React from 'react';
import { Link } from 'gatsby';

const Page = () => {
  return (
    <main>
      <h1>Index Page</h1>
      <p>
        This is an example template for helping you to learn how to build a site
        powered by Gatsby. No way this changes live. Nevermind.
      </p>
      <Link to="/about">About</Link>
    </main>
  );
};

export default Page;
