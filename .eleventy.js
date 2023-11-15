const yaml = require( "js-yaml" );
const { DateTime } = require( "luxon" );
const syntaxHighlight = require( "@11ty/eleventy-plugin-syntaxhighlight" );
const { minify } = require( "html-minifier-terser" )

module.exports = function ( eleventyConfig ) {
  // Disable automatic use of your .gitignore
  eleventyConfig.setUseGitIgnore( false );

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge( true );

  // human readable date
  eleventyConfig.addFilter( "readableDate", ( dateObj ) => {
    return DateTime.fromJSDate( dateObj, { zone: "utc" } ).toFormat(
      "dd LLL yyyy"
    );
  } );

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin( syntaxHighlight );

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension( "yaml", ( contents ) => yaml.load( contents ) );

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy( {
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    "./node_modules/prismjs/themes/prism-tomorrow.css":
      "./static/css/prism-tomorrow.css",
    "./src/well-known": "./.well-known",
  } );

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy( "./src/static/img" );
  eleventyConfig.addPassthroughCopy( "./src/assets" );

  // Copy favicon to route of /_site
  eleventyConfig.addPassthroughCopy( "./src/favicon.ico" );

  // Minify HTML
  eleventyConfig.addTransform( "minifyHtml", function ( content ) {
    // Eleventy 1.0+: use this.inputPath and this.outputPath instead
    if ( this.outputPath && this.outputPath.endsWith( ".html" ) ) {
      const minified = minify( content, {
        removeComments: true,
        collapseWhitespace: true
      } );
      return minified;
    }

    return content;
  } );

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
  };
};
