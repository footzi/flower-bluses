import React from 'react';

let Catalog = React.createClass ({
    render () {
        return (
<div>
     <div className="catalog-title">
        <div className="catalog-name">Каталог</div>
        <p className="catalog-introduction">Здесь Вы найдете нежные и изящные украшения и необычные интерьерные композициции из цветов. Они не завянут и Вы сможете любоваться ими круглый год, и они всегда будут радовать Вас своей свежестью и красотой! По Вашему желанию, можно обсудить возможность создания Ваших любимых цветов. Цветочные украшения изготавливаются только из сертифицированных японских самозастывающих полимерных глин и ювелирной смлы Практически все цветы из полимерной глины я делаю на заказ. Уточнить наличие той или иной композиции можно, написав мне на почту.</p>
     </div>
     <div className="catalog-img">
        <img src="../images/catalog/1.jpg" />
        <img src="../images/catalog/2.jpg" />
        <img src="../images/catalog/3.jpg" />
     </div>

</div>
        )
    }
})

export default Catalog;