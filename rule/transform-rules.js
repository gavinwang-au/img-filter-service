const jsont = require('json-transforms');
const transformRules = [
    jsont.pathRule(
        '.payload{.drm === true && .episodeCount > 0}', function(d) {
            return { response: d.runner()}
        }
    ),
    jsont.pathRule(
        '.{.drm}', function(d) {
            return {
                image: d.match.image.showImage,
                slug: d.match.slug,
                title: d.match.title
            }
        }
    ),
    jsont.identity
];

module.exports = transformRules;