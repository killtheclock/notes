import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
export default function (eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(syntaxHighlight);
    // Pass through static assets
    eleventyConfig.addPassthroughCopy("src/assets/css/tailwind.css");
    eleventyConfig.addPassthroughCopy("src/assets/js");
    eleventyConfig.addPassthroughCopy("src/assets/fonts");
    // Collections
    eleventyConfig.addCollection("posts", (collectionApi) => {
        return collectionApi
            .getFilteredByGlob("src/posts/*.md")
            .sort((a, b) => b.date - a.date);
    });
    eleventyConfig.addCollection("tagList", (collectionApi) => {
        const tagSet = new Set();
        collectionApi.getAll().forEach((item) => {
            if (item.data.tags) {
                item.data.tags
                    .filter((tag) => tag !== "posts")
                    .forEach((tag) => tagSet.add(tag));
            }
        });
        return [...tagSet].sort();
    });
    // Filters
    eleventyConfig.addFilter("readableDate", (dateObj) => {
        return new Intl.DateTimeFormat("el-GR", {
            year: "numeric",
            month: "long",
            day: "numeric",
        }).format(new Date(dateObj));
    });
    eleventyConfig.addFilter("htmlDateString", (dateObj) => {
        return new Date(dateObj).toISOString().split("T")[0];
    });
    eleventyConfig.addFilter("excerpt", (content) => {
        const stripped = content.replace(/(<([^>]+)>)/gi, "");
        return stripped.substring(0, 200) + "...";
    });
    eleventyConfig.addFilter("limit", (arr, limit) => {
        return arr.slice(0, limit);
    });
    eleventyConfig.addFilter("filterByTag", (posts, tag) => {
        return posts.filter((p) => p.data.tags && p.data.tags.includes(tag));
    });
    return {
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
