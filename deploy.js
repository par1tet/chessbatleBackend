import ghpages from "gh-pages"

ghpages.publish('dist', {
    branch: 'deploy',
    repo: 'https://github.com/par1tet/chessbatleBackend'
});