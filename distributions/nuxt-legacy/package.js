export default {
  extend(pkg, { load }) {
    pkg.on('build:done', () => {
      const mono = load('../..')
      const core = load('../../packages/core')
      const nuxt = load('../nuxt')

      pkg.copyFilesFrom(mono, [
        'LICENSE'
      ])

      pkg.copyFilesFrom(core, [
        'bin'
      ])

      pkg.copyFieldsFrom(nuxt, [
        'name',
        'version',
        'license',
        'repository',
        'description',
        'contributors',
        'files',
        'keywords',
        'collective',
        'bin',
        'engines',
        'scripts',
        'dependencies'
      ])
    })
  }
}