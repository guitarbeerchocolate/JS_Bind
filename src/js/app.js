import '../css/main.scss';
const binder = require('./binder');
binder.setSource('#myinput','keyup');
binder.setBinded(['h1','h2','.myClass']);
binder.Bind();
