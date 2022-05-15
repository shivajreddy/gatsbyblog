import React from "react";
import { graphql } from 'gatsby';


const Home = ({ data }) => {
  console.log(data.site);
  return (
    <div>
      <h1>This is the home page of gatsby</h1>
    </div>
  )
}


export default Home;

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      description
      title
    }
  }
}
`;