**Görev 4**  
Aşağıdaki soruları farklı sayfalarda hazırlayarak yanıtlayın.  
Hazırladığınız sayfaları Github Pages’de deploy edin.  
Eklediğiniz sayfaların bağlantılarını aşağıdaki satırlara ekleyin.

Yanıt bağlantıları:  
Soru 1: https://kerem-alba.github.io/Gorev4-1/  
Soru 2: https://kerem-alba.github.io/Gorev4-2/

**Soru 1:**  
\-1’den 99’a kadar olan sayıları for döngüsü ile ekrana yazdırmak üzere aşağıdaki çıktı hazırlanmalı. Sayfa çalıştığında **Sırala** butonu aktif, **Rastgele Sayı Seç** butonu pasif olmalı.  
![][image1]  
**\-Sırala** butonuna basıldığında sayılar her satırda 10 sayı olacak şekilde sıralanmalı ve **Sırala** butonu pasif, **Rastgele Sayı Seç** butonu aktif olmalı.  
Burada her bir sayı for döngüsü ile bir **span etiketi** içerisinde ekrana yazılmalı.  
![][image2]  
**\-Rastgele Sayı Seç** butonuna her basıldığında rastgele bir sayı üretilmeli ve üretilen sayıya ait span içerisindeki sayı, kırmızı renkli ve bold olacak şekilde değişmelidir.  
![][image3]

\-Her **Rastgele Sayı Seç** butonuna basıldığında yeni bir sayı kırmızı renkli ve bold olacak şekilde devam etmelidir.  
![][image4]

**Soru 2:**

Aşağıdaki sayı tahmin oyununun, olabilecek tüm hataları engelleyerek çalışacak şekilde düzenleyin.  
![][image5]  
\-Tahminler girildikten sonra **Tahmin Gir** butonuna basıldığında; **Tahmin Gir** butonu pasif, **Kurayı Çek** butonu aktif olmalı.  
![][image6]

Kurallar:  
\-Girilen sayının 1 ile 49 arasında olup olmadığı kontrol edilsin. Bu sayıların dışında bir sayı girilmesine izin verilmesin. 49’dan büyük sayı girilirse **Tahmin Gir** butonuna basıldığında mesaj kutusu çıksın “1-49 sayıları arasında bir sayı girmelisiniz” mesajı verisin.  
![][image7]  
![][image8]

\-Kullanıcı tahminlerinde birbirinin aynısı sayıların olup olmadığı kontrol edilsin.Kullanıcı bir kutuya tahmin girdikten sonra başka bir kutuya tıkladığında, eğer daha önceki kutulara girilmiş sayılardan birini girmişse hemen o anda mesaj kutusu çıksın. Mesaj kutusu metni: “Aynı tahmin bir kez girilebilir.”  
![][image9]  
![][image10]  
![][image11]

\-Tahminler girilirken aynı tahminlerin girilmesi durumunda **“Aynı tahmin bir kez girilebilir.”** mesajı verildikten sonra, girilen sayılardan aynı olanlardan soldaki kutu içerisinde kalmaya devam etmeli, sağdaki ise silinmelidir.

![][image10]  
![][image11]  
![][image12]

\-Tüm tahminler girildikten sonra bütün sayılar benzersiz olacaktır. Bu sayılar küçükten büyüğe sıralanarak tahmin kutularına tekrar yerleştirilsin.  
![][image13]  
![][image14]  
\-Oluşturulan loto sayılarında birbirinin aynısı sayılar olmamalı ve oluşturulan loto sayıları küçükten büyüğe sıralanarak sonuç kutularına eklenmeli.  
![][image15]

\-Girilen tahminlerde ve loto sayılarında gerekli düzenlemeler yapıldıktan sonra, loto sayılarının altında bilinen sayılar yan yana bir label içerisine yazılmalı. Bilinen sayıların altında da kac adet sayı bilindiği farklı bir label içerisine yazılmalı.
