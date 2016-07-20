fis.match('*.{js,jsx}', {
  optimizer: fis.plugin('uglify-js')
});
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});
fis.config.set('settings.spriter.csssprites', {
    //图之间的边距
    margin: 10,
    //使用矩阵排列方式，默认为线性`linear`
    layout: 'matrix'
});
fis.match('*.less', {
  // fis-parser-less 插件进行解析
  parser: fis.plugin('less'),
  // .less 文件后缀构建后被改成 .css 文件
  useSprite:true,
  rExt: '.css'
});
fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});
fis.match('*.png', {
  optimizer: fis.plugin('png-compressor')
});
fis.match('*.{png,jpeg}',{
  useHash:true
});
/*
  模块式开发  &&  react
*/

fis.match('/components/**.js', {
    isMod: true
});

fis.hook('commonjs');

fis.match('::package', {
    postpackager: fis.plugin('loader')
});

// 编译所有后缀为 jsx 的文件为 js
fis.match('{*.jsx,*:jsx}', {
    parser: fis.plugin('babel-5.x', {
        sourceMaps: true
    }),
    rExt: '.js'
});
