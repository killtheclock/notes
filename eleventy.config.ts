import { EleventyConfig } from "@11ty/eleventy";
import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig: EleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/assets/css/tailwind.css");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  // Collections
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagSet = new Set<string>();
    collectionApi.getAll().forEach((item) => {
      if (item.data.tags) {
        item.data.tags
          .filter((tag: string) => tag !== "posts")
          .forEach((tag: string) => tagSet.add(tag));
      }
    });
    return [...tagSet].sort();
  });

  // Filters
  eleventyConfig.addFilter("readableDate", (dateObj: Date) => {
    return new Intl.DateTimeFormat("el-GR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateObj));
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj: Date) => {
    return new Date(dateObj).toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("excerpt", (content: string) => {
    const stripped = content.replace(/(<([^>]+)>)/gi, "");
    return stripped.substring(0, 200) + "...";
  });

  eleventyConfig.addFilter("limit", (arr: unknown[], limit: number) => {
    return arr.slice(0, limit);
  });

  eleventyConfig.addFilter("filterByTag", (posts: any[], tag: string) => {
    return posts.filter((p) => p.data.tags && p.data.tags.includes(tag));
  });

  return {
    pathPrefix: "/notes/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
