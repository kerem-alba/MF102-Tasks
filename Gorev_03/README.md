**Görev 03**

1) **Aşağıdaki ekran görüntüsünü verecek uygulamanın kodunu html ve javascript kullanarak yazın. Fiyat ve kar oranı bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**  
     
   **![][image1]**  
   **![][image2]**  
     
   **HTML kodunu buraya yazın:**  
     
   **\<\!DOCTYPE *html*\>**  
   **\<html *lang*\="en"\>**  
   **\<head\>**  
       **\<meta *charset*\="UTF-8"\>**  
       **\<meta *name*\="viewport" *content*\="width=device-width, initial-scale=1.0"\>**  
       **\<title\>Satış Fiyatı Hesaplama\</title\>**  
   **\</head\>**  
   **\<body\>**  
       **\<label\>**  
           **Fiyatını Girin:**  
           **\<input *type*\="number" *id*\="fiyat"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<label\>**  
           **Kar Oranını Girin:**  
           **\<input *type*\="number" *id*\="kar"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<button *onclick*\="satisFiyatiHesapla()"\>Hesapla\</button\>**  
     
       **\<br\>\<br\>**  
     
       **\<div\>**  
           **Satış Fiyatı:**  
           **\<input *type*\="number" *id*\="satisFiyati" *disabled*\="disabled"\>**  
       **\</div\>**  
        
       **\<script\>**  
           **function satisFiyatiHesapla() {**  
               **var fiyatInput \= document.getElementById('fiyat');**  
               **var karInput \= document.getElementById('kar');**  
               **var satisFiyatiSpan \= document.getElementById('satisFiyati');**  
     
               **var fiyat \= parseFloat(fiyatInput.value);**  
               **var kar \= parseFloat(karInput.value);**  
     
               **if (isNaN(fiyat) || isNaN(kar)) {**  
                   **alert("Bilgilerinizi kontrol ediniz.");**  
                   **return;**  
               **}**  
     
               **var satisFiyati \= fiyat \* (1 \+ (kar / 100));**  
               **satisFiyatiSpan.value \= satisFiyati.toFixed(1);**  
           **}**  
       **\</script\>**  
   **\</body\>**  
   **\</html\>**  
     
     
     
     
     
     
 


   

2) **Aşağıdaki ekran görüntüsünü verecek uygulamanın kodunu html ve javascript kullanarak yazın. Kısa ve uzun kenar bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**  
     
   **![][image3]**  
   **![][image2]**  
     
   **HTML kodunu buraya yazın:**  
     
   **\<\!DOCTYPE *html*\>**  
   **\<html *lang*\="en"\>**  
   **\<head\>**  
       **\<meta *charset*\="UTF-8"\>**  
       **\<meta *name*\="viewport" *content*\="width=device-width, initial-scale=1.0"\>**  
       **\<title\>Satış Fiyatı Hesaplama\</title\>**  
   **\</head\>**  
   **\<body\>**  
       **\<label\>**  
           **Fiyatını Girin:**  
           **\<input *type*\="number" *id*\="fiyat"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<label\>**  
           **Kar Oranını Girin:**  
           **\<input *type*\="number" *id*\="kar"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<button *onclick*\="satisFiyatiHesapla()"\>Hesapla\</button\>**  
     
       **\<br\>\<br\>**  
     
       **\<div\>**  
           **Satış Fiyatı:**  
           **\<input *type*\="number" *id*\="satisFiyati" *disabled*\="disabled"\>**  
       **\</div\>**  
        
       **\<script\>**  
           **function satisFiyatiHesapla() {**  
               **var fiyatInput \= document.getElementById('fiyat');**  
               **var karInput \= document.getElementById('kar');**  
               **var satisFiyatiSpan \= document.getElementById('satisFiyati');**  
     
               **var fiyat \= parseFloat(fiyatInput.value);**  
               **var kar \= parseFloat(karInput.value);**  
     
               **if (isNaN(fiyat) || isNaN(kar)) {**  
                   **alert("Bilgilerinizi kontrol ediniz.");**  
                   **return;**  
               **}**  
     
               **var satisFiyati \= fiyat \* (1 \+ (kar / 100));**  
               **satisFiyatiSpan.value \= satisFiyati.toFixed(1);**  
           **}**  
       **\</script\>**  
   **\</body\>**  
   **\</html\>**  
     
     
     
     
     
     
 


   

3) **Aşağıdaki ekran görüntüsünü verecek uygulamanın kodunu html ve javascript kullanarak yazın. fiyat ve adet bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**  
     
   **![][image4]![][image2]**  
     
   **HTML kodunu buraya yazın:**  
   **\<\!DOCTYPE *html*\>**  
   **\<html *lang*\="en"\>**  
   **\<head\>**  
       **\<meta *charset*\="UTF-8"\>**  
       **\<meta *name*\="viewport" *content*\="width=device-width, initial-scale=1.0"\>**  
       **\<title\>Toplam Tutar Hesaplama\</title\>**  
   **\</head\>**  
   **\<body\>**  
       **\<label\>**  
           **Birim Fiyatı:**  
           **\<input *type*\="number" *id*\="birimFiyati"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<label\>**  
           **Adet:**  
           **\<input *type*\="number" *id*\="adet"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<button *onclick*\="toplamTutarHesapla()"\>Hesapla\</button\>**  
     
       **\<br\>\<br\>**  
     
       **\<div\>**  
           **Toplam Tutar:**  
           **\<input *type*\="number" *id*\="toplamTutar" *disabled*\="disabled"\>**  
       **\</div\>**  
        
       **\<script\>**  
           **function toplamTutarHesapla() {**  
               **var birimFiyatiInput \= document.getElementById('birimFiyati');**  
               **var adetInput \= document.getElementById('adet');**  
               **var toplamTutarInput \= document.getElementById('toplamTutar');**  
     
               **var birimFiyati \= parseFloat(birimFiyatiInput.value);**  
               **var adet \= parseFloat(adetInput.value);**  
     
               **if (isNaN(birimFiyati) || isNaN(adet)) {**  
                   **alert("Bilgilerinizi kontrol ediniz.");**  
                   **return;**  
               **}**  
     
               **var toplamTutar \= birimFiyati \* adet;**  
               **toplamTutarInput.value \= toplamTutar;**  
           **}**  
       **\</script\>**  
   **\</body\>**  
   **\</html\>**  
     
     
     
     
     
     
     
     
     
 


   

4) **Girilen sayının karesini bulan uygulamanın kodunu html ve javascript kullanarak yazın. Sayı bilgisi boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**  
     
   **![][image5]**  
   **![][image2]**  
     
   **HTML kodunu buraya yazın:**  
   **\<\!DOCTYPE *html*\>**  
   **\<html *lang*\="en"\>**  
   **\<head\>**  
       **\<meta *charset*\="UTF-8"\>**  
       **\<meta *name*\="viewport" *content*\="width=device-width, initial-scale=1.0"\>**  
       **\<title\>Kare Hesaplama\</title\>**  
   **\</head\>**  
   **\<body\>**  
       **\<label\>**  
           **Sayı:**  
           **\<input *type*\="number" *id*\="sayi"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<button *onclick*\="karesiHesapla()"\>Hesapla\</button\>**  
     
       **\<br\>\<br\>**  
     
       **\<div\>**  
           **Karesi:**  
           **\<input *type*\="number" *id*\="karesi" *disabled*\="disabled"\>**  
       **\</div\>**  
        
       **\<script\>**  
           **function karesiHesapla() {**  
               **var sayiInput \= document.getElementById('sayi');**  
               **var karesiInput \= document.getElementById('karesi');**  
     
               **var sayi \= parseFloat(sayiInput.value);**  
     
               **if (isNaN(sayi)) {**  
                   **alert("Bilgilerinizi kontrol ediniz.");**  
                   **return;**  
               **}**  
     
               **var karesi \= sayi \* sayi;**  
               **karesiInput.value \= karesi;**  
           **}**  
       **\</script\>**  
   **\</body\>**  
   **\</html\>**  
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
5) **Kullanıcının girdiği x ve y değerini alarak iki kare farkını hesaplayan uygulamanın kodunu html ve javascript kullanarak yazın. X ve Y bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**  
     
   **![][image6]**  
     
     
   **![][image2]**  
     
   **HTML kodunu buraya yazın:**  
   **\<\!DOCTYPE *html*\>**  
   **\<html *lang*\="en"\>**  
   **\<head\>**  
       **\<meta *charset*\="UTF-8"\>**  
       **\<meta *name*\="viewport" *content*\="width=device-width, initial-scale=1.0"\>**  
       **\<title\>Karelerin Farkı Hesaplama\</title\>**  
   **\</head\>**  
   **\<body\>**  
       **\<label\>**  
           **X:**  
           **\<input *type*\="number" *id*\="x"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<label\>**  
           **Y:**  
           **\<input *type*\="number" *id*\="y"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<button *onclick*\="karelerinFarkiHesapla()"\>Hesapla\</button\>**  
     
       **\<br\>\<br\>**  
     
       **\<div\>**  
           **Karelerin Farkı:**  
           **\<input *type*\="number" *id*\="karelerinFarki" *disabled*\="disabled"\>**  
       **\</div\>**  
        
       **\<script\>**  
           **function karelerinFarkiHesapla() {**  
               **var xInput \= document.getElementById('x');**  
               **var yInput \= document.getElementById('y');**  
               **var karelerinFarkiInput \= document.getElementById('karelerinFarki');**  
     
               **var x \= parseFloat(xInput.value);**  
               **var y \= parseFloat(yInput.value);**  
     
               **if (isNaN(x) || isNaN(y)) {**  
                   **alert("Bilgilerinizi kontrol ediniz.");**  
                   **return;**  
               **}**  
     
               **var karelerinFarki \= (x \* x) \- (y \* y);**  
               **if (karelerinFarki \< 0) {**  
                   **karelerinFarki \= karelerinFarki \* \-1;**  
               **}**  
               **karelerinFarkiInput.value \= karelerinFarki;**  
           **}**  
       **\</script\>**  
   **\</body\>**  
   **\</html\>**  
     
     
     
     
 


6) **Girilen a,b ve c değerleri için 2b \- 4ac denkleminin sonucunu veren uygulamanın kodunu html ve javascript kullanarak yazın. a,b ve c bilgilerinden herhangi biri boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**  
     
   **![][image7]**  
   **![][image2]**  
     
   **HTML kodunu buraya yazın:**  
     
   **\<\!DOCTYPE *html*\>**  
   **\<html *lang*\="en"\>**  
   **\<head\>**  
       **\<meta *charset*\="UTF-8"\>**  
       **\<meta *name*\="viewport" *content*\="width=device-width, initial-scale=1.0"\>**  
       **\<title\>2b \- 4ac Hesaplama\</title\>**  
   **\</head\>**  
   **\<body\>**  
       **\<label\>**  
           **a:**  
           **\<input *type*\="number" *id*\="a"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<label\>**  
           **b:**  
           **\<input *type*\="number" *id*\="b"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<label\>**  
           **c:**  
           **\<input *type*\="number" *id*\="c"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<button *onclick*\="hesapla()"\>Hesapla\</button\>**  
     
       **\<br\>\<br\>**  
     
       **\<div\>**  
           **2b \- 4ac \=:**  
           **\<input *type*\="number" *id*\="sonuc" *disabled*\="disabled"\>**  
       **\</div\>**  
        
       **\<script\>**  
           **function hesapla() {**  
               **var aInput \= document.getElementById('a');**  
               **var bInput \= document.getElementById('b');**  
               **var cInput \= document.getElementById('c');**  
               **var sonucInput \= document.getElementById('sonuc');**  
     
               **var a \= parseFloat(aInput.value);**  
               **var b \= parseFloat(bInput.value);**  
               **var c \= parseFloat(cInput.value);**  
     
               **if (isNaN(a) || isNaN(b) || isNaN(c)) {**  
                   **alert("Bilgilerinizi kontrol ediniz.");**  
                   **return;**  
               **}**  
     
               **var sonuc \= (2 \* b) \- (4 \* a \* c);**  
               **sonucInput.value \= sonuc;**  
           **}**  
       **\</script\>**  
   **\</body\>**  
   **\</html\>**  
     
 


7) **Doğum yılını isteyen ve bu kişinin yaşını hesaplayıp, eğer kişi 17 yaşından büyükse ehliyet alabileceğini, değilse alamayacağını söyleyen uygulamanın kodunu html ve javascript kullanarak yazın.Doğum yılı bilgisi boş geçildiğinde sayfada aşağıdaki uyarıyı verecek düzenlemeyi yapın.**  
     
   **![][image8]**  
   **![][image2]**  
     
   **HTML kodunu buraya yazın:**  
   **\<\!DOCTYPE *html*\>**  
   **\<html *lang*\="en"\>**  
   **\<head\>**  
       **\<meta *charset*\="UTF-8"\>**  
       **\<meta *name*\="viewport" *content*\="width=device-width, initial-scale=1.0"\>**  
       **\<title\>Ehliyet Uygulaması\</title\>**  
   **\</head\>**  
   **\<body\>**  
       **\<label\>**  
           **Doğum Yılı:**  
           **\<input *type*\="number" *id*\="dogumYili"\>**  
       **\</label\>**  
     
       **\<br\>\<br\>**  
     
       **\<button *onclick*\="yasHesapla()"\>Hesapla\</button\>**  
     
       **\<br\>\<br\>**  
     
       **\<div\>**  
           **\<input *type*\="text" *id*\="sonuc" *disabled*\="disabled"\>**  
       **\</div\>**  
        
       **\<script\>**  
           **function yasHesapla() {**  
               **var dogumYiliInput \= document.getElementById('dogumYili');**  
               **var sonucInput \= document.getElementById('sonuc');**  
     
               **var dogumYili \= parseInt(dogumYiliInput.value);**  
               **var mevcutYil \= new Date().getFullYear();**  
               **var yas \= mevcutYil \- dogumYili;**  
     
               **if (isNaN(dogumYili) || dogumYili \> mevcutYil) {**  
                   **alert("Bilgilerinizi kontrol ediniz.");**  
                   **return;**  
               **}**  
     
               **if (yas \> 17) {**  
                   **sonucInput.value \="Ehliyet alabilir";**  
               **} else {**  
                   **sonucInput.value \= "Ehliyet alamaz";**  
               **}**  
           **}**  
       **\</script\>**  
   **\</body\>**  
   **\</html\>**  
     
   

[image1]: <data:image/png;base64,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>

[image2]: <data:image/png;base64,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>

[image3]: <data:image/png;base64,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>

[image4]: <data:image/png;base64,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>

[image5]: <data:image/png;base64,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>

[image6]: <data:image/png;base64,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>

[image7]: <data:image/png;base64,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>

[image8]: <data:image/png;base64,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>