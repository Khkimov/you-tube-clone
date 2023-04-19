module.exports = {
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        customExportConditions: ['node', 'node-addons'],
    },
    moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.vue$': '@vue/vue3-jest'
    }
}