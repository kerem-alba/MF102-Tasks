**Görev 5**

 

**1\)**    **Aşağıdaki ekran görüntüsünü verecek uygulamanın kodunu react kullanarak yazın. Fiyat ve kar oranı bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**

 

 

**React kodunu buraya yazın:**

import { useState } *from* 'react'

import './App.css'

 

function App() {

  const \[price, setPrice\] \= useState\<string\>('')

  const \[profitRatio, setProfitRatio\] \=  useState\<string\>('');

  const \[sellingPrice, setSellingPrice\] \= useState\<number| null\>(null);

 

  const calculateSalePrice \= (e: React.FormEvent\<HTMLFormElement\>) \=\> {

    e.preventDefault();

    if(\!price || \!profitRatio) {

      alert('Bilgilerinizi kontrol ediniz.');

      return;

    }

    const salePrice \= parseFloat(price) \* (100 \+ parseFloat(profitRatio)) / 100;

    setSellingPrice(salePrice);

  };

 

  return (

    \<div *className*\="container"\>

    \<form *onSubmit*\={calculateSalePrice}\>

      \<div *className*\="form-group"\>

        \<label\>

          Fiyatını Girin:

          \<input

            *type*\="number"

            *value*\={price}

            *placeholder*\="0"

            *onChange*\={(e) \=\> setPrice(e.target.value)}

          /\>

        \</label\>

      \</div\>

      \<br /\>

      \<div *className*\="form-group"\>

        \<label\>

          Kar Oranını Girin:

          \<input

            *type*\="number"

            *value*\={profitRatio}

            *placeholder*\="0"

            *onChange*\={(e) \=\> setProfitRatio(e.target.value)}

          /\>

        \</label\>

      \</div\>

      \<br /\>

      \<button *type*\="submit"\>Hesapla\</button\>

      \<br /\>\<br /\>

      \<div *className*\="form-group"\>

        \<label\>

          Satış Fiyatı:

          \<input

            *type*\="number"

            *value*\={sellingPrice \!== null ? sellingPrice : ''}

            *readOnly*

          /\>

        \</label\>

      \</div\>

    \</form\>

  \</div\>

  )

}

 

export default App

 

 

 

 

 

 

**2\)**    **Aşağıdaki ekran görüntüsünü verecek uygulamanın React kullanarak yazın. Kısa ve uzun kenar bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**

 

 

**React kodunu buraya yazın:**

 

import { useState } *from* 'react'

import './App.css'

 

function App() {

  const \[shortEdge, setShortEdge\] \= useState\<string\>('')

  const \[longEdge, setLongEdge\] \=  useState\<string\>('');

  const \[area, setArea\] \= useState\<number| null\>(null);

  const \[perimeter, setPerimeter\] \= useState\<number| null\>(null);

 

  const calculateAreaAndPerimeter \= (e: React.FormEvent\<HTMLFormElement\>) \=\> {

    e.preventDefault();

    if(\!shortEdge || \!longEdge) {

      alert('Bilgilerinizi kontrol ediniz.');

      return;

    }

    const calculatedArea \= parseFloat(shortEdge) \* parseFloat(longEdge)

    setArea(calculatedArea);

    const calculatedPerimeter \= 2\* (parseFloat(shortEdge) \+ parseFloat(longEdge))

    setPerimeter(calculatedPerimeter);

  };

 

  return (

    \<div *className*\="container"\>

    \<form *onSubmit*\={calculateAreaAndPerimeter}\>

      \<div *className*\="form-group"\>

        \<p\>Alanı ve çevresi hesaplanacak olan dikdörtgen için: \</p\>

        \<label\>

          Kısa Kenar :

          \<input

            *type*\="number"

            *value*\={shortEdge}

            *placeholder*\="0"

            *onChange*\={(e) \=\> setShortEdge(e.target.value)}

          /\>

        \</label\>

      \</div\>

      \<br /\>

      \<div *className*\="form-group"\>

        \<label\>

          Uzun Kenar :

          \<input

            *type*\="number"

            *value*\={longEdge}

            *placeholder*\="0"

            *onChange*\={(e) \=\> setLongEdge(e.target.value)}

          /\>

        \</label\>

      \</div\>

      \<br /\>

      \<button *type*\="submit"\>Hesapla\</button\>

      \<br /\>\<br /\>

      \<div *className*\="form-group"\>

        \<label\>

          Alan :

          \<input

            *type*\="number"

            *value*\={area \!== null ? area : ''}

            *readOnly*

          /\>

        \</label\>

      \</div\>

      \<br /\>

      \<div *className*\="form-group"\>

        \<label\>

          Çevre :

          \<input

            *type*\="number"

            *value*\={perimeter \!== null ? perimeter : ''}

            *readOnly*

          /\>

        \</label\>

      \</div\>

    \</form\>

  \</div\>

  )

}

 

export default App

 

 

 

 

**3\)**    **Aşağıdaki ekran görüntüsünü verecek uygulamanın kodunu react  kullanarak yazın. fiyat ve adet bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**

 

 

**React kodunu buraya yazın:**

 

import React, { useState } *from* 'react'

import './App.css'

 

function App() {

  const \[unitPrice, setUnitPrice\] \= useState\<string\>('');

  const \[quantity, setQuantity\] \= useState\<string\>('');

  const \[totalPrice, setTotalPrice\] \= useState\<number | null\>(null);

 

  const calculateTotalPrice  \= (e: React.FormEvent\<HTMLFormElement\>) \=\> {

    e.preventDefault();

    if(\!unitPrice || \!quantity) {

      alert('Bilgilerinizi kontrol ediniz.');

      return;

    }

    setTotalPrice(parseFloat(quantity) \* parseFloat(unitPrice));

  };

 

  return (

    \<div *className*\="container"\>

    \<form *onSubmit*\={calculateTotalPrice}\>

      \<div *className*\="form-group"\>

        \<label\>

          Birim Fiyatı :

          \<input

            *type*\="number"

            *value*\={unitPrice}

            *placeholder*\="0"

            *onChange*\={(e) \=\> setUnitPrice(e.target.value)}

          /\>

        \</label\>

      \</div\>

      \<br /\>

      \<div *className*\="form-group"\>

        \<label\>

          Adet :

          \<input

            *type*\="number"

            *value*\={quantity}

            *placeholder*\="0"

            *onChange*\={(e) \=\> setQuantity(e.target.value)}

          /\>

        \</label\>

      \</div\>

      \<br /\>

      \<button *type*\="submit"\>Hesapla\</button\>

      \<br /\>\<br /\>

      \<div *className*\="form-group"\>

        \<label\>

          Toplam Tutar :

          \<input

            *type*\="number"

            *value*\={totalPrice \!== null ? totalPrice : ''}

            *readOnly*

          /\>

        \</label\>

      \</div\>

    \</form\>

  \</div\>

  )

}

 

export default App

 

 

 

**4\)**    **Girilen sayının karesini bulan uygulamanın kodunu react  kullanarak yazın. Sayı bilgisi boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**

 

 

**React kodunu buraya yazın:**

 

import React, { useState } *from* 'react';

import './App.css';

 

function App() {

  const \[number, setNumber\] \= useState\<string\>('');

  const \[square, setSquare\] \= useState\<number | null\>(null);

 

  const calculateSquare \= (e: React.FormEvent\<HTMLFormElement\>) \=\> {

    e.preventDefault();

    const num \= parseFloat(number);

 

    if (isNaN(num)) {

      alert("Bilgilerinizi kontrol ediniz.");

      return;

    }

    setSquare(num \* num);

  };

 

  return (

    \<div *className*\="container"\>

      \<form *onSubmit*\={calculateSquare}\>

        \<div *className*\="form-group"\>

          \<label\>

            Sayı:

            \<input

              *type*\="number"

              *value*\={number}

              *placeholder*\="0"

              *onChange*\={(e) \=\> setNumber(e.target.value)}

            /\>

          \</label\>

        \</div\>

        \<br /\>

        \<button *type*\="submit"\>Hesapla\</button\>

        \<br /\>\<br /\>

          \<div *className*\="form-group"\>

            \<label\>

              Karesi:

              \<input *type*\="number" *value*\={square\!==null ? square : ""} *readOnly* /\>

            \</label\>

          \</div\>

      \</form\>

    \</div\>

  );

}

 

export default App;

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

 

**5\)**    **Kullanıcının girdiği x ve y değerini alarak iki kare farkını hesaplayan uygulamanın kodunu react kullanarak yazın. X ve Y bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**

 

 

 

 

**React kodunu buraya yazın:**

import React, { useState } *from* 'react';

import './App.css';

 

function App (){

  const \[x, setX\] \= useState\<string\>('');

  const \[y, setY\] \= useState\<string\>('');

  const \[differenceOfSquares, setDifferenceOfSquares\] \= useState\<number | null\>(null);

 

  const calculateDifferenceOfSquares \= (e: React.FormEvent\<HTMLFormElement\>) \=\> {

    e.preventDefault();

    const numX \= parseFloat(x);

    const numY \= parseFloat(y);

 

    if (isNaN(numX) || isNaN(numY)) {

      alert("Bilgilerinizi kontrol ediniz.");

      return;

    }

 

    const diffOfSquares \= Math.abs((numX \* numX) \- (numY \* numY));

    setDifferenceOfSquares(diffOfSquares);

  };

 

  return (

    \<div *className*\="container"\>

      \<form *onSubmit*\={calculateDifferenceOfSquares}\>

        \<div *className*\="form-group"\>

          \<label\>

            X:

            \<input

              *type*\="number"

              *value*\={x}

              *placeholder*\="0"

              *onChange*\={(e) \=\> setX(e.target.value)}

            /\>

          \</label\>

        \</div\>

        \<div *className*\="form-group"\>

          \<label\>

            Y:

            \<input

              *type*\="number"

              *value*\={y}

              *placeholder*\="0"

              *onChange*\={(e) \=\> setY(e.target.value)}

            /\>

          \</label\>

        \</div\>

        \<button *type*\="submit"\>Hesapla\</button\>

          \<div *className*\="form-group"\>

            \<label\>

              Karelerin Farkı:

              \<input *type*\="number" *value*\={differenceOfSquares \!== null ? differenceOfSquares : " "} *readOnly* /\>

            \</label\>

          \</div\>

      \</form\>

    \</div\>

  );

}

 

export default App;

 

 

 

 

 

 

 

 

 

**6\)**    **Girilen a,b ve c değerleri için 2b \- 4ac denkleminin sonucunu veren uygulamanın kodunu react  kullanarak yazın. a,b ve c bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**

 

 

**React kodunu buraya yazın:**

import React, { useState } *from* 'react';

import './App.css';

 

function App() {

  const \[a, setA\] \= useState\<string\>('');

  const \[b, setB\] \= useState\<string\>('');

  const \[c, setC\] \= useState\<string\>('');

  const \[result, setResult\] \= useState\<number | null\>(null);

 

  const calculate \= (e: React.FormEvent\<HTMLFormElement\>) \=\> {

    e.preventDefault();

    const numA \= parseFloat(a);

    const numB \= parseFloat(b);

    const numC \= parseFloat(c);

 

    if (isNaN(numA) || isNaN(numB) || isNaN(numC)) {

      alert("Bilgilerinizi kontrol ediniz.");

      return;

    }

 

    const result \= (2 \* numB) \- (4 \* numA \* numC);

    setResult(result);

  };

 

  return (

    \<div *className*\="container"\>

      \<form *onSubmit*\={calculate}\>

        \<div *className*\="form-group"\>

          \<label\>

            a:

            \<input

              *type*\="number"

              *value*\={a}

              *placeholder*\="0"

              *onChange*\={(e) \=\> setA(e.target.value)}

            /\>

          \</label\>

        \</div\>

        \<div *className*\="form-group"\>

          \<label\>

            b:

            \<input

              *type*\="number"

              *value*\={b}

              *placeholder*\="0"

              *onChange*\={(e) \=\> setB(e.target.value)}

            /\>

          \</label\>

        \</div\>

        \<div *className*\="form-group"\>

          \<label\>

            c:

            \<input

              *type*\="number"

              *value*\={c}

              *placeholder*\="0"

              *onChange*\={(e) \=\> setC(e.target.value)}

            /\>

          \</label\>

        \</div\>

        \<button *type*\="submit"\>Hesapla\</button\>

          \<div *className*\="form-group"\>

            \<label\>

              2b \- 4ac \=

              \<input *type*\="number" *value*\={result \!==null ? result : ""} *readOnly* /\>

            \</label\>

          \</div\>

      \</form\>

    \</div\>

  );

}

 

export default App;

 

 

 

**7\)**    **Doğum yılını isteyen ve bu kişinin yaşını hesaplayıp, eğer kişi 17 yaşından büyükse ehliyet alabileceğini, değilse alamayacağını söyleyen uygulamanın kodunu react  kullanarak yazın.Doğum yılı bilgisi boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**

 

 

**React kodunu buraya yazın:**

 

import React, { useState } *from* 'react';

import './App.css';

 

function App() {

  const \[birthYear, setBirthYear\] \= useState('');

  const \[result, setResult\] \= useState('');

 

  const calculateAge \= (e) \=\> {

    e.preventDefault();

    const yearOfBirth \= parseInt(birthYear);

    const currentYear \= new Date().getFullYear();

    const age \= currentYear \- yearOfBirth;

 

    if (isNaN(yearOfBirth) || yearOfBirth \> currentYear) {

      alert("Bilgilerinizi kontrol ediniz.");

      return;

    }

 

    if (age \>= 18) {

      setResult("Ehliyet alabilir");

    } else {

      setResult("Ehliyet alamaz");

    }

  };

 

  return (

    \<div *className*\="container"\>

      \<form *onSubmit*\={calculateAge}\>

        \<div *className*\="form-group"\>

          \<label\>

            Doğum Yılı:

            \<input

              *type*\="number"

              *value*\={birthYear}

              *placeholder*\="1990"

              *onChange*\={(e) \=\> setBirthYear(e.target.value)}

            /\>

          \</label\>

        \</div\>

        \<button *type*\="submit"\>Hesapla\</button\>

        \<div *className*\="form-group"\>

          \<input *type*\="text" *value*\={result\!==null ? result : ""} *readOnly* /\>

        \</div\>

      \</form\>

    \</div\>

  );

}

 

export default App;

 

 

