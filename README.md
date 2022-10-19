# EmbedWebGLTemplate
unityのWebGLをGoogle Apps Scriptに埋め込むテンプレートです。unity2020以降のWebGLに対応していると思います。

# 導入方法
まずWebGLでUnityプロジェクトをビルドしてください。そのときに圧縮方法を `Disable` にするように注意してください。

WebGLビルドしたプロジェクトが準備できたら、Google Apps Scriptに本リポジトリの `index.html` , `style.css.html` , `コード.gs`を導入してください。
その後、別でどこかにアップロードした該当ファイルの直URLを取得し、`コード.gs` の `loaderUrl` , `dataUrl` , `frameworkUrl` , `codeUrl` の各定数に登録してください。それぞれ前から順に、`.loader.js` , `.data` , `.framework.js` , `.wasm` の各該当ファイルの直URLを登録する必要があります。

最後に、`productName` の項目名にUnityプロジェクト名を登録してください。
ほかの項目は、デフォルト設定から変えた記憶がある該当者のみの設定です。

すべての設定が終わったら、新しいデプロイで取得できるリンクで、実際にWebGLが埋め込まれていることを確認することができるかと思います。

# gs側からのWebGLへの干渉
`gameObject` , `method` , `param` の各変数に登録することで、Google Apps ScriptからWebGL内のプログラムに干渉することができます。
詳しくはUnity公式リファレンスを参照ください。

https://docs.unity3d.com/ja/2021.3/Manual/webgl-interactingwithbrowserscripting.html
