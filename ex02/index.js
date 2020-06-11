module.exports.compose = middlewares => {
    return () => middlewares.reduceRight( (acc, cur) => () => Promise.resolve(cur(acc)), () => {})()
}
