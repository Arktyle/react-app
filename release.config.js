// configuration page https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration
module.exports = {
    branches: [
        'master'
    ],
    repositoryUrl: 'https://github.com/Arktyle/react-app',
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/github']
}