import { useEffect, useState } from "react";
import customApi from "../config/axios";
import { Helmet } from "react-helmet-async";
// import trasactionDataDummy from "../dummy/trasaction";

const TransactionView = () => {
  const [trasaction, setTrasaction] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllTransactions = async () => {
    try {
      const response = await customApi.get("/transaksi");
      setTrasaction(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(angka);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "SELESAI":
        return "badge-success text-white";
      case "MENUNGGU_PEMBAYARAN":
        return "badge-warning text-black";
      case "DIPROSES":
        return "badge-info text-white";
      case "DIKIRIM":
        return "badge-info text-white";
      case "GAGAL":
      case "DIBATALKAN":
        return "badge-error text-white";
      default:
        return "badge-ghost";
    }
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      await getAllTransactions();
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Riwayat Transaksi - Marketplace</title>
      </Helmet>

      <div className="max-w-4xl mx-auto mt-20 px-4 mb-32">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 mb-10 text-white shadow-lg flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold mb-1">
              Daftar Transaksi Saya
            </h1>
            <p className="text-amber-100 text-xs md:text-sm">
              Lacak status pesanan dan riwayat belanjaan Anda di sini.
            </p>
          </div>
          <div className="hidden md:block bg-white/20 p-3 rounded-xl backdrop-blur-sm text-sm font-semibold">
            Total: {trasaction.length} Pesanan
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-dots loading-xl text-amber-500"></span>
          </div>
        ) : trasaction.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-500 font-medium">
              Belum ada transaksi saat ini.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {trasaction.map((trx) => (
              <div
                key={trx.id}
                className="card bg-white shadow-sm border border-gray-100 hover:shadow-md transition duration-300 rounded-xl overflow-hidden"
              >
                <div className="bg-gray-50/80 px-6 py-4 border-b border-gray-100 flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-gray-800 text-sm md:text-base">
                      #TRX-{trx.id}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs md:text-sm text-gray-500">
                      {formatDate(trx.tanggal)}
                    </span>
                  </div>
                  <div>
                    <span
                      className={`badge font-bold px-3 py-2 text-xs shadow-sm ${getStatusBadge(trx.status)}`}
                    >
                      {trx.status}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-4 divide-y divide-gray-100">
                    {trx.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 pt-4 first:pt-0"
                      >
                        <img
                          src={item.produk.gambarUrl}
                          alt={item.produk.nama}
                          className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl border border-gray-100 shadow-sm"
                        />
                        <div className="flex-growd">
                          <h4 className="font-bold text-gray-800 text-sm md:text-base line-clamp-1">
                            {item.produk.nama}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            {item.jumlah} barang x {formatRupiah(item.harga)}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-gray-400 block mb-0.5">
                            Total Harga
                          </span>
                          <span className="text-sm md:text-base font-extrabold text-gray-800">
                            {formatRupiah(item.harga * item.jumlah)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-6 border-t border-gray-100 text-sm bg-gray-50/50 p-4 rounded-xl">
                    <div>
                      <p className="text-gray-400 text-xs mb-1 font-semibold uppercase tracking-wider">
                        Alamat Pengiriman
                      </p>
                      <p className="font-medium text-gray-700 text-xs md:text-sm leading-relaxed">
                        {trx.alamatPengiriman}
                      </p>
                      {trx.catatanPembeli && (
                        <p className="text-xs text-amber-600 mt-1.5 font-medium italic">
                          Catatan: "{trx.catatanPembeli}"
                        </p>
                      )}
                    </div>
                    <div className="md:text-right">
                      <p className="text-gray-400 text-xs mb-1 font-semibold uppercase tracking-wider">
                        Metode Pembayaran
                      </p>
                      <p className="font-bold text-gray-700 text-sm">
                        {trx.metodePembayaran}
                      </p>

                      {trx.nomorResi && (
                        <div className="mt-2.5">
                          <p className="text-gray-400 text-[11px] mb-0.5">
                            Nomor Resi Pengiriman
                          </p>
                          <span className="badge badge-neutral font-mono text-xs font-bold tracking-wide">
                            {trx.nomorResi}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-xs md:text-sm font-semibold text-gray-600">
                    Total Belanja Pesanan
                  </span>
                  <span className="text-lg md:text-xl font-extrabold text-amber-600">
                    {formatRupiah(trx.total)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionView;
