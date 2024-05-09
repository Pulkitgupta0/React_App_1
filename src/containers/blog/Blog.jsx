import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
        A lot is happening, <br /> We are blogging about it.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
      <a
          href="https://www.globalvillagespace.com/how-chatgpt-is-bridging-the-gap-between-human-and-machine-communication/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Article
            imgUrl={blog01}
            date="Feb 20, 2023"
            text="ChatGPT-3: Bridging the Gap Between Human and Machine Communication"
          />
        </a>
      </div>
      <div className="gpt3__blog-container_groupB">
        <a
          href="https://medium.com/@imhimanshu/exploring-the-power-of-chatgpt-a-comprehensive-guide-to-ai-conversation-models-cb46749e141d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Article
            imgUrl={blog02}
            date="Sep 22, 2023"
            text="The Power of ChatGPT-3: Exploring the Future of AI Conversations"
          />
        </a>
        <a
          href="https://medium.com/@margauxvanderplaetsen/the-journey-and-architecture-of-chatgpt-a-look-behind-the-scenes-ef35bed11072"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Article
            imgUrl={blog03}
            date="Mar 8, 2023"
            text="Understanding the Architecture and Capabilities of ChatGPT-3"
          />
        </a>

        <a
          href="https://deepvalueproducts.com/guides/unlocking-the-full-potential-of-chatgpt-a-comprehensive-guide/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Article
            imgUrl={blog04}
            date="February 3, 2023"
            text="Unlocking the Potential of ChatGPT-3: A Comprehensive Guide"
          />
        </a>

        <a
          href="https://medium.com/@tudip/the-power-of-chatgpt-revolutionizing-conversational-ai-d5e8aa3731f"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Article
            imgUrl={blog05}
            date="Jun 20, 2023"
            text="ChatGPT-3: Revolutionizing Conversational AI"
          />
        </a>

        
      </div>
    </div>
  </div>
);

export default Blog;
