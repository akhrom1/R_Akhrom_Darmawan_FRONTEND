# R_Akhrom_Darmawan_FRONTEND

Aplikasi dibangun menggunakan **React**, **Vite**, **Tailwind CSS**, dan **DaisyUI**, serta terhubung dengan REST API backend.

### 1. Clone Repository

### 2. Run Backend Jar

Sebelum instal pastikan buat file disebelah _backend-0.0.1-SNAPSHOT.jar_ yang bernana _application.properties_ dengan isi sebagai berikut

```
spring.datasource.url=jdbc:mysql://localhost:3306/test_hsm?useSSL=false&serverTimezone=UTC
spring.datasource.username=app_user
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

Kemudian run :

```bash
java -jar backend-0.0.1-SNAPSHOT.jar
```

### 3. Install Dependencies

Jalankan perintah berikut untuk menginstal semua modul dan _dependencies_ yang dibutuhkan:

```bash
npm install
```

### 4. Run Local

```bash
npm run dev
```

### 5. Ngrok

Pastikan install ngrok sebelumnya

```bash
ngrok http 5173
```

### 5. ScreenShot

Tampilan Produk

<p align="center">
  <img width="65%" src="https://snipboard.io/0Iw7zY.jpg" alt="Tampilan 1" style="display: inline-block; margin-right: 10px;" />
  <img width="50%" src="https://snipboard.io/yFzCSM.jpg" alt="Tampilan 2" style="display: inline-block;" />
  <img width="15%" src="https://snipboard.io/F0R2cj.jpg" alt="Tampilan 3" style="display: inline-block;" />
</p>
Tampilan Trasaksi
<p align="center">
  <img width="65%" src="https://snipboard.io/24gUNK.jpg" alt="Tampilan 1" style="display: inline-block; margin-right: 10px;" />
  <img width="50%" src="https://snipboard.io/XrpkCw.jpg" alt="Tampilan 2" style="display: inline-block;" />
  <img width="15%" src="https://snipboard.io/QWGvLA.jpg" alt="Tampilan 3" style="display: inline-block;" />
</p>
