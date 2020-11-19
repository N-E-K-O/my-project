module.exports = function(content, map, meta) {
    let { isLocal } = this.getOptions()
    console.log(`${this.loaderIndex}.${this.resource}: `, isLocal)
    this.callback(null, content, map, meta)
    return undefined
}