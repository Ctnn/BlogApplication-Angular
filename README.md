# BlogApplication-Angular

Merhabalar hocam sizlere bu dokuman dosyasında deneyimlerim doğrultusunda gelişen proje yönetimimi ve proje aşamalarımı size aktaracağım.
İlk olarak kullanımı anlatıp sonrasında projeyi geliştirirken aldığım yolu sizlerle paylaşacağım.
Asıl çalıştığım alan Görüntü İşleme ve Yapay Zekâ olduğu için ilerde de kendimin kullanabileceği bir blog sitesi hazırlamak istedim.


*BAŞLANGIÇ*

npm install -g @angular/cli
npm install 

ng serve --port 4300 - WEBBLOG-ANAPROJE

ng serve --port 4200 - dashboardd-DASHBOARD

!NOT!
Eğer ng hatası gelirse Ortam Değişkenleri Path kısmına %AppData%\npm eklenmeli
!!!!!

-Folders-
webBlog => Blog postlarının okuyucuya sunulduğu kısımdır.
ang-blog-dashboardd => Blog Uygulamasının Editör tarafıdır. Bu kısımdan yetkili kişiler kendi bloglarını tasarlayabilir, düzenleyebilir.

		=>WebBlog<=
	
		http://localhost:4300/  URL'si ile ana sayfamıza ulaşabilmekteyiz burası 2'ye ayrılmaktadır. Üst kısımda editörün kendi belirlediği öne çıkanlarını sunduğu bloktur.
		Alt kısım ise son atılan post'ların bulunduğu kısımdır.
		Yukarıda yer alan Konu Başlıklarından istenilen kategoriye ulaşılabilmekte ve okunabilmektedir.
		İstenilen kategoriye gidildikten sonra o kategoriye ait postlar yer alındığı görülecektir. Buradan istenilen gönderi seçilip postun ayrıntılarını görüntüleyebilmektedir.
		Tekli-Post ekranına gittikten sonra burada bizi bazı bölümler karşılamaktadır.
		Sağ tarafta yer alan küçük kartlarda size önerilen diğer post'ları görüntüleyebilir, okumak isterseniz üstüne tıklayıp o sayfaya gidebilirsiniz.
		Sayfanın gövdesinde kategori kısmında tıkladığımız gönderinin detayları yer almaktadır.
		Alt tarafa gelecek olursak burada yorum bırakabilir ve istersek diğer bırakılan yorumları görüntüleyebilmekteyiz.
		Ayrıca Post her okunduğu okuma sayısı artarak toplam görüntülenme sayısını görüntülebilmekteyiz.
		Header'daki kendi tasarımım olan AI-BLOG iconuna tıklayarak Ana-Sayfaya Geri dönebilirsiniz.
		Footer-Bar'da yer alan Hakkımda kısmından kendim hakkımda yazdığım bilgilere ulaşabilirsiniz.
		İletişim kısmından ise okurlardan bilgilerini paylaşmak ve sorularını direkt olarak iletmek isteyenler için bir seçenek için oluşturulmuştur.
		Bilgilerin doğru formatta yazılma zorunluluğu tanınmaktadır her inputta.

		=>ang-blog-dasboardd<=
		
		http://localhost:4200/giris URL'si ile uygulamanın kilidini açıyoruz.
		Kullanıcı_Adı:admin@gmail.com
		Parola: 123456

		Giriş ekranı bir animasyonla ekrana gelerek kullabilirlik arttırıldı.
		Giriş yapıldıktan sonra bizi aşağıdaki başlıklar karşılamaktadır.
		->Kategori
			Buradan Yeni Kategoriler Ekleyebilir Veya Silebilririz. Site Dinamik yapıda olduğu için yapılan değişikler anlık olarak kullanıcıda da yansıyacaktır.
			Alt tarafta verilen tabloda var olan kategorileri görüntülebilmekteyiz.
		->Postlar	
			Bu kısıma girdiğimizde ise bizi altta yer alan tablo karşılamaktadır. Burada güncelded yer alan Post'ların Resim,Başlık,Ön-Bilgilendirme,İçerik,Kategori ve 				Oluşturulma tarihlerini içeren bir alan bulunmakadır.
			Üst kısımda yer alan "Yeni Post Ekle" butonuna bastığımızda ise Post Ekleme Ekranı bizi karşılıyor.
			Burada Post'ların Resim,Başlık,Ön-Bilgilendirme,Kategori ve İçerik bilgileri bizlerden istenmektedir.
			Kalıcı Bağlantı Uzantısı düzenlenmez olup Başlığa göre kendisi bir URL şekli almaktadır.
			İçerik kısmında istediğimiz gibi yazımızı şekillendirebileceğimiz bir kütüphane bulunmaktadır. Bu kısımdan içeriklerimizi rahatça yazabilmekteyiz.
			Buradaki bilgiler dahil olmak üzere Resim, Text ve kullanıcı bilgileri Firebase'de saklanmaktadır.
			Bilgilerin tamamı doğru şekilde girilmeden post eklenememektedir!
			Postu Ekle diyerek işlemimizi bitirebilir ve otomatik olarak editör-anasayfamıza dönebilmekteyiz.
		->Aboneler
			Bu kısımdan aboneleri görüntüleyebilmekte ve istersek aboneliklerini sonlandırabilmekteyiz.
			
		Uygulamayı geliştirmeye açık bırakarak Proje teslim sonrasında da geliştirmelerimi yapıp kendi blog sayfam olarak kullanmaya devam edeceğim.
			
		
Aşağıda yer alan kısımda projenin oluşturulma adımlarını ele alarak yazdığım bölümlerin açıklamasını gerçekleştirdimç


-Proje Tasarımı-

Aklımda olan tasarımı koda dökmeden önce front end'de göstermek istedim bu yüzden 'Figma' sitesinde tasarımımı beyaz sayfaya döktüm.
Burada olması gereken temel bileşenleri ve sayfa alan yönetimini planladım. Düzenli bir proje işleyişi için ön-tasarımın önemli olduğunu düşünüyorum.
Bu aşamada yaptığım işlemleri aşağıda yer alan link'ten ulaşabilirsiniz.
*Figma Ön Tasarım Şablonu <https://prnt.sc/4OqZaw2-dJSM>
**Bu kısım kullanıcı tasarımını ele almaktadır.
Kullanıcı ve admin tarafındaki bütün sayfaların tasarımını html ve css kodlarını düzenleyerek gerçekleştireceğim.
		
	-Proje İç Detayı-

	Proje içerisinde yer alan kod bloklarında açıklama satırlarına yer verilerek detayların kullanım amaçları aktarılmıştır.

-Kod Detayı-

NOT: Uygulamada JQuery'nin fonksiyonlarına sahip Reactive Forms, Reactive Programming, Reactive Extensions, Observables ve Reactive Services Angular kütüphaneleri kullanılmıştır. Entegre olarak çalışmaktadır.

Projemi oluşturduktan sonra temel sayfalarımı ve sayfa bölümlendirmelerimi oluşturmayı amaçladım.

└── app
├── abone-ol
├── sayfalar
│ ├── ana-ekran
│ ├── hakkimda
│ ├── iletisime-gec
│ ├── tekli-gonderi
│ ├── tekli-kategori
│ └── tekli-sayfa
└── yorumlar
├── yorum-formu
└── yorum-listesi

Genel klasör yapım yukarıda yer alan şemadaki gibi oldu.

Sonrasında temel yönlendirmelerimi app-routing.module.ts tarafında gerçekleştirdim.

Bootstrap paketimi yükleyip import ederek .css dosyalarını düzenledim.

Sonrasında styles.css tarafında önceden tasarımını yaptığım sayfamın renk ve font ayarlarını gerçekleştirdim.

*********************
Not: Header'da yer alan logo tasarımımı Canva üzerinden tasarladım. Logoya basıldığı taktirde  Ana Ekrana yönlendirecek şekilde ayarlandı.
*********************

Navigation Bar'ımda ve Footer'ımda  yer alacak ifadelerin düzenlenmesi ve sayfa düzleminde konumlandırılması sağlandı. Yönlendirmeleri için class'lar tanımlandı.

Sonrasında ana-ekran düzenimin sağlanması için öne çıkan gönderileri ve en son atılan gönderilerin gösterilmesi için bir alan oluşturup kartları ekledim.
*Ana Ekran düzenim belli olduktan sonra sırasıyla aşağıdaki sayfaları tasarladım:
-Tekli-Kategori sayfası altında kategoriye ait olan gönderileri tuttum.
-Tekli-Kategori sayfasından seçilecek olan gönderiye ait detayları ekrana getirecek Gönderi sayfasını tasarladım.
   => Bu kısımda gönderinin detayları, gönderi yorumları ve gönderiye yorum bırakabileceğimiz bir yapı oluşturdum.
   => Sağ tarafta ise farklı blog yazılarını okuyabileceğimiz kartlar konumlandırdım bu şekilde aktif bir ekran tasarımana ulaşmış oldum.
   => Hakkımda sayfası hazırlayacak okuyuculara yazar hakkında bilgi edinebilecekleri bir alan oluşturdum. 
Böylelikle bütün ayarlamaları bitirmiş oluyorum ve sonrasında admin panelini düzenlemeye geçtim.

Iconlarımı fontawesome stylesheet'lerini kullanarak gerçekleştirdim.

Veritabanı tercihimi firebase tarafında kullanmaya karar verdim.
Google teknojilerinin bir parçası olan Angular ve Firebase'in arasındaki uyum ve hız faktörü seçimimde etkili oldu.

  ├── Authentication
  ├── Realtime Database
  ├── Storage

Firebase yapılarını projemde kullanacağım.
Gerekli konfirgasyon ayarlarını yapmak için firebase tarafıdan api-key'i kullanarak projeme entegre ediyorum.
Verilerin saklanması için Cloud Firestore'da Database oluşturuyorum.(test modunda projenin çalışabilirliğini göstermek için seçiyorum.)
Sonrasında firestore'u kodlarıma implement ediyorum.
Burada browser üzerinde yaptığım input işlemlerini (kayıt) görebilmekteyim ve datayı kolaylıkça manipüle edebilmekteyim.
Burada katmanlı bir şekilde kategorilerin altında yer alan alt katagorileri tutuyorum.
Anlık olan çektiğim verileri burada işliyorum ve gerekli api'leri alıyorum [https://prnt.sc/WzACEMNRFacw]
Çeşitli inputtext'telere zorunluluk getirerek veri çakışmasını( Yanlış veri iletilmesini) engelliyorum.
Buradaki butonlarda text'e duyarlı olarak ayarlandı, null veride disable ederek girişi tekrardan engelliyor, veri girildiğinde aktif hale geliyor.

Sonrasında gerekli servisleri çağırmak için ayrı bir kategoride bunları ele alarak servisleri yazıyorum.
Servisi bitirdikten sonra  TypeScript'in temel özelliklerinden biri olan ve genellikle veri yapılarını tanımlamak, veri tipi güvenliği sağlamak için ve ayrıca kodun okunabilirliğini ve yeniden kullanılabilirliğini arttırmak için Interface kullandım.
Kullanıcı etkikileşimini arttırmak, kullanıcılara bildirimleri göstermek gibi aksiyonlara sahip ngx-toastr bildirim kütüphanesini projemde kullanmayı tercih ettim.
Ve servislerime bunu entegre ederek kullanıma aldım canlı uygulamada.
Observable nesnesi ile bu değişikliklerin gerçek zamanlı olarak aktarımını sağlıyorum buradan id ve data dönütünü alabilmekteyim.
Oluşturulan kategorilerin editörler tarafından düzenlenmesi için bir listeme ve düzenleme aracı gerçekleştirerek bunu html ile aktarıyorum.

  ├── Ekleme
  ├── Düzenleme
  ├── Silme
  ├── Okuma

Kısaca CRUD Fonksiyonlarımı eklemekteyim kategoriler için.

Sonrasında yeni gönderiler oluşturmak ve içerisine girilecek (resim,text,tarih vs.) gibi bilgilerin oluşturulma aşamasına geçmekteyim.

Postların tasarımlarına geçerek post sayfalarının yetkili tarafından en iyi şekilde değiştirilmesi için ayarlamaları yapıyorum.

Gönderi oluşturma için belirtilen alanları aşağıdaki gibi oluşturdum:

  ├── Başlık
  ├── Kalıcı Bağlantı Tipi (PermaLink)
  ├── Alıntı
  ├── İçerik
  ├── Post Kategorisi
  ├── Post Resmi

Bu kısımda değişikliklerin anında yakalanması için keyup eventini kullanmayı ihmal etmiyorum. Bu sayede UniqueUrl yapımı oluşturmuş oluyorum.
Sonrasında resmin localden seçilip upload'lanması için gerekli altyapıyı hazırlamaktayım. Kod satırlarına açıklama satırı ekleyerek kodun
okunabilirliğinin artmasını amaçladım.
FireBase'den çektiğim verileri ekrana getirerek kullanım aşamasına hazır hale getirmeye başladım backend'de.

Bir WYSIWYG("What You See Is What You Get"), editörü olan Angular-editor'u projemde kullanıyor olacağım. Blogger içerik kısmını rahatça düzenleyebilir
hale gelecektir bu şekilde. İstediği düzenlemeyi buradan aktarabilecektir.
Post için gereken bilgileri zorunlu kılarak eksik olarak postun çıkılmasına engel oluşturabilecek ve programın hata fırlatmasının önüne geçmek için zorunluluklar
koyarak hata engelini yapılandırdım.

Sonrasında interface aracılığı ile postun detaylarını yapılaştırdım.

  ├── Başlık
  ├── Kalıcı Bağlantı Tipi (PermaLink)
  ├── Alıntı
  ├── İçerik
  ├── Özelliği
  ├── Görüntülenme
  ├── Özelliği
  ├── Görüntülenme Sayısı
  ├── Durumu Hakkında
  ├── Oluşturulma Tarihi

Ayarlamalarımı yaptıktan sonra backendle firebase'i buluşturuyorum kategoriId'lerine göre listelemeyi gerçekleştiriyorum.

Bilgilerimi ve resim dosyalarımı saklamak için Firebase'in storage build kategorisini kullanmaktayım.
NOT= 1 aylık ücretsiz test sürümü ile başlattım. Uygulamayı Web Projesi için yazdığımdan dolayı sornasında kullanımda olmayacaktır bu özellik.

Firebase - Angular arasında iletişim kurması için uygulama servislerini yazdım.
Post oluşturma ve içerik düzenleme kısmını geçtikten sonra, bütün postların görüntülenmesini ve direkt olarak postlara erişimin yapılmasını sağlayacak ekranı tasarladım.
Oluşturduğum bu ekrandan postlara erişim için id'lerini kullanarak parametrelerini diğer ekrana ilettim; düzenleme işlemleri sağlanmış oldu.
Aynı zamanda bu kısımdan silme işlemlerini de düzenleyici yetkili gerçekleştirebilecek.
Yetkili frontend ve backend kısımlarını bitirdikten sonra giriş aşamalarına geçiyorum.

Login işlemleri için Firebase tarafında Authentication build'ini kullanarak düzenli bir backend kurmayı amaçladım.
=> Sadece e-mail password gereksinimine sahip auth biçimi seçtim; google,facebook vs. giriş yöntemleri için izinler gerektiğinden proje kapsamı için kullanmadım.
Animasyon kullanarak tasarımı zenginleştirdim.
Bu kısımda tekrardan bir service kullanarak backendle bağlamaktayım, BehaviorSubject ile giriş yapmış kullanıcıların yönetilmesini sağladım.
Giriş ve çıkış fonksiyonlarını bitirdikten sonra farklı kişiler tarafından sisteme erişememesi için guard önlemi koyarak izinsiz girişleri engelliyorum.

Uygulamamın son aşaması olarak backend'in dinamik haline getirilmesi kalıyor bu aşamada:

  ├── Post'ların dinamik hale getirilmesi
  ├── Post ekranlarının dinamik hale getirilmesi
  ├── Firestore ile Filtreleme işlemlerinin entegre edilmesi(WHERE,LIMIT,ORDERBY)

işlemlerini gerçekleştireceğim.
Böylelikle yönetim panelinde yaptığımız değişiklikleri anlık olarak görebilmekteyz.

WEBBLOG oluşturduğum ana blog sayfasında verilerimi çekmek için düzenlemeleri yaparak servislerimi tekrardan bu aşamada da oluşturuyorum.

Öne çıkarılanları 4 olarak sınırladım ve ana sayfada sergilenebileceği bir yapı oluşturuldu, tek tuşla öne çıkarılabiliyor.
Görüntülenme sayısıda postu inceleme miktarına göre artmaktadır.

Blog sayfasını takibe almak ve yeni çıkan postlardan haberdar olmak isteyenler için sayfaların alt kısımında yer alan Abone-Ol kısmından kendilerini haberdar edebilirler. Bu işlem için de ayrı bir interface kullanarak birleştiriyorum.
=> Abone tekrarını engellemek için bloke koyuyorum.
=> Ve gerekli kullanıcıdan gerekli bilgileri çekiyorum.

Dashboard'ımda bir panel açarak bilgilerimi orada görüntülemek ve düzenlemek için bir alan oluşturuyorum. Tekrardan silme işlemlerini buradan uygulayabilmekteyim.

Projemi bu aşamada bitirmiş oluyorum ve build etmeye başlıyorum.
ng build --prod

Böylelikle projemin sonuna gelmiş oluyorum.
Son olarak projeme örnek konu postları oluştururarak okunabilirliği ve sunumu arttırdım.




!!!!! UYGULAMA BOYUTLARI !!!!!!!!

Boyutlar yüksek olduğu için projemi github'da oluşturdum. Eğer bir sıkıntı olursa hemen dönüş sağlayabilirim.

GMAIL=> yigitcetinkaya88@mail.com

