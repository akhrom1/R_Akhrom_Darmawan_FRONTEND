const trasaction = [
  {
    id: 1,
    alamatPengiriman: "Jl. Sudirman No. 12, Karet Tengsin, Jakarta Pusat 10250",
    items: [
      {
        harga: 1250000,
        id: 1,
        jumlah: 1,
        produk: {
          id: 1,
          gambarUrl: "https://placehold.co/400x400?text=Sepatu+Nike",
          nama: "Sepatu Lari Nike Air Max",
        },
      },
      {
        harga: 85000,
        id: 2,
        jumlah: 2,
        produk: {
          id: 2,
          gambarUrl: "https://placehold.co/400x400?text=Kaos+Polos",
          nama: "Kaos Polos Cotton Combed 30s",
        },
      },
    ],
    catatanPembeli: "Tolong dibungkus bubble wrap",
    total: 1420000,
    tanggal: "2026-08-20T10:30:00",
    updatedAt: "2026-08-23T15:00:00",
    createdAt: "2026-08-20T10:30:00",
    nomorResi: "JNE2026082012345",
    status: "SELESAI",
    metodePembayaran: "GOPAY",
  },
  {
    id: 2,
    alamatPengiriman:
      "Jl. Gatot Subroto Kav. 51-53, Kuningan, Jakarta Selatan 12950",
    items: [
      {
        harga: 320000,
        id: 3,
        jumlah: 1,
        produk: {
          id: 3,
          gambarUrl: "https://placehold.co/400x400?text=Tas+Ransel",
          nama: "Tas Ransel Laptop 15 Inch",
        },
      },
    ],
    catatanPembeli: "",
    total: 320000,
    tanggal: "2026-08-22T14:00:00",
    updatedAt: "2026-08-23T09:00:00",
    createdAt: "2026-08-22T14:00:00",
    nomorResi: "SICEPAT2026082267890",
    status: "DIKIRIM",
    metodePembayaran: "TRANSFER_BANK",
  },
  {
    id: 3,
    alamatPengiriman: "Jl. Raya Bogor Km 30, Cibinong, Bogor 16914",
    items: [
      {
        harga: 75000,
        id: 4,
        jumlah: 2,
        produk: {
          id: 5,
          gambarUrl: "https://placehold.co/400x400?text=Kopi+Gayo",
          nama: "Kopi Arabika Gayo 250gr",
        },
      },
      {
        harga: 320000,
        id: 5,
        jumlah: 1,
        produk: {
          id: 3,
          gambarUrl: "https://placehold.co/400x400?text=Tas+Ransel",
          nama: "Tas Ransel Laptop 15 Inch",
        },
      },
      {
        harga: 85000,
        id: 6,
        jumlah: 1,
        produk: {
          id: 2,
          gambarUrl: "https://placehold.co/400x400?text=Kaos+Polos",
          nama: "Kaos Polos Cotton Combed 30s",
        },
      },
    ],
    catatanPembeli: "Pilih warna hitam jika ada",
    total: 574000,
    tanggal: "2026-08-24T08:15:00",
    updatedAt: "2026-08-24T08:15:00",
    createdAt: "2026-08-24T08:15:00",
    nomorResi: "",
    status: "MENUNGGU_PEMBAYARAN",
    metodePembayaran: "QRIS",
  },
];
export default trasaction;
