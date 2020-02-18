module.exports = (eleventyConfig) => {
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.setQuietMode(true);

  const {Liquid} = require("liquidjs");
  const options = {
    extname: ".liquid",
    dynamicPartials: false,
    strict_filters: true,
    root: ["_includes"]
  };
  eleventyConfig.setLibrary("liquid", new Liquid(options));




  // eleventyConfig.addPairedLiquidShortcode("example", (content="") => {
  //   return `<dl>${ content.trim() }</dl>`;
  // });

  // eleventyConfig.addPairedLiquidShortcode("exampleinput", (content="", lang="liquid", label="INPUT") => {
  //   return `<dt>${ label }</dt><dd><pre><code>${ content.trim() }</code></pre></dd>`;
  // });
  // eleventyConfig.addPairedLiquidShortcode("exampleoutput", (content="", label="OUTPUT") => {
  //   return `<dt>${ label }</dt><dd>${ content.trim() }</dd>`;
  // });

  

  return {
    dir: {
      input: "src",
      output: "www"
    }
  };
};
