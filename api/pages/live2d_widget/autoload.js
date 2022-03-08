{"title":"","uid":"1cd19fc71517798e2fa5b7457d1fb06e","text":"// 注意：live2d_path 参数应使用绝对路径 const live2d_path = \"/source/live2d_widget\"; //const live2d_path = \"/live2d-widget/\"; // 封装异步加载资源的方法 function lo...","date":"2022-03-08T16:45:29.930Z","updated":"2022-03-08T16:45:29.930Z","comments":true,"path":"api/pages/live2d_widget/autoload.js","covers":null,"excerpt":"","content":"// 注意：live2d_path 参数应使用绝对路径\nconst live2d_path = \"/source/live2d_widget\";\n//const live2d_path = \"/live2d-widget/\";\n\n// 封装异步加载资源的方法\nfunction loadExternalResource(url, type) {\n\treturn new Promise((resolve, reject) => {\n\t\tlet tag;\n\n\t\tif (type === \"css\") {\n\t\t\ttag = document.createElement(\"link\");\n\t\t\ttag.rel = \"stylesheet\";\n\t\t\ttag.href = url;\n\t\t}\n\t\telse if (type === \"js\") {\n\t\t\ttag = document.createElement(\"script\");\n\t\t\ttag.src = url;\n\t\t}\n\t\tif (tag) {\n\t\t\ttag.onload = () => resolve(url);\n\t\t\ttag.onerror = () => reject(url);\n\t\t\tdocument.head.appendChild(tag);\n\t\t}\n\t});\n}\n\n// 加载 waifu.css live2d.min.js waifu-tips.js\nif (screen.width >= 768) {\n\tPromise.all([\n\t\tloadExternalResource(live2d_path + \"waifu.css\", \"css\"),\n\t\tloadExternalResource(live2d_path + \"live2d.min.js\", \"js\"),\n\t\tloadExternalResource(live2d_path + \"waifu-tips.js\", \"js\")\n\t]).then(() => {\n\t\tinitWidget({\n\t\t\twaifuPath: live2d_path + \"waifu-tips.json\",\n\t\t\t//apiPath: \"https://live2d.fghrsh.net/api/\",\n\t\t\tcdnPath: \"https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/\"\n\t\t});\n\t});\n}\n// initWidget 第一个参数为 waifu-tips.json 的路径，第二个参数为 API 地址\n// API 后端可自行搭建，参考 https://github.com/fghrsh/live2d_api\n// 初始化看板娘会自动加载指定目录下的 waifu-tips.json\n\nconsole.log(`\n  く__,.ヘヽ.        /  ,ー､ 〉\n           ＼ ', !-─‐-i  /  /´\n           ／｀ｰ'       L/／｀ヽ､\n         /   ／,   /|   ,   ,       ',\n       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i\n        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |\n          !,/7 '0'     ´0iソ|    |\n          |.从\"    _     ,,,, / |./    |\n          ﾚ'| i＞.､,,__  _,.イ /   .i   |\n            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |\n              | |/i 〈|/   i  ,.ﾍ |  i  |\n             .|/ /  ｉ：    ﾍ!    ＼  |\n              kヽ>､ﾊ    _,.ﾍ､    /､!\n              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'\n              ﾚ'ヽL__|___i,___,ンﾚ|ノ\n                  ﾄ-,/  |___./\n                  'ｰ'    !_,.:\n`);\n","count_time":{"symbolsCount":"1.8k","symbolsTime":"2 mins."},"toc":""}