// foo não existe, não foi definido e jamais foi inicializado:

foo
"ReferenceError: foo is not defined"

// foo é conhecido e existe, mas não aponta para nenhum tipo ou valor:

var foo = null; foo
"null"

// escreve no console "foo string"
(function() { 
    var undefined = 'foo'; console.log(undefined, typeof undefined); })();

// escreve no console "foo string"
(function(undefined){ console.log(undefined, typeof undefined); })('foo');