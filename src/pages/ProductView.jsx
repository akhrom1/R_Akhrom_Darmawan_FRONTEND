import { useEffect, useState } from "react";
import customApi from "../config/axios";
import { Helmet } from "react-helmet-async";

// import productDataDummy from "../dummy/product";

const ProductView = () => {
  const [product, setProduct] = useState([]);
  const [productData, setProductData] = useState([]);

  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  const getAllProduct = async () => {
    try {
      const response = await customApi.get("/produk");
      setProduct(response.data);
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const filterData = product.filter((item) =>
      item.nama.toLocaleLowerCase().includes(keyword.toLowerCase()),
    );
    setProductData(filterData);
  };

  useEffect(() => {
    const fetchproducts = async () => {
      await getAllProduct();
    };
    fetchproducts();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Katalog Produk - Marketplace</title>
      </Helmet>

      <div className="max-w-7xl mx-auto mt-20 px-4 mb-32">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 mb-12 text-white text-center shadow-lg">
          <h1 className="text-3xl font-extrabold mb-3">
            Temukan Kebutuhan Terbaikmu
          </h1>
          <p className="text-amber-100 text-sm mb-6 max-w-xl mx-auto">
            Belanja produk berkualitas tinggi dengan harga terlengkap dan proses
            transaksi yang mudah.
          </p>

          <form
            className="flex justify-center max-w-2xl mx-auto gap-2 bg-white p-2 rounded-xl shadow-md"
            onSubmit={handleFilter}
          >
            <input
              type="text"
              placeholder="Cari nama produk, kategori, dll..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full px-4 py-2 text-gray-800 focus:outline-none rounded-lg text-sm"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white px-6 py-2 rounded-lg hover:bg-amber-600 transition font-medium text-sm whitespace-nowrap"
            >
              Cari Produk
            </button>
          </form>
        </div>

        <div className="max-w-7xl mx-auto px-2" id="produk">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Terlaris & Pilihan
            </h2>
            <span className="text-sm text-gray-500">
              Menampilkan {productData.length} produk
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {loading ? (
              <div className="col-span-full flex justify-center items-center h-64">
                <span className="loading loading-dots loading-xl text-amber-500"></span>
              </div>
            ) : productData.length === 0 ? (
              <div className="col-span-full text-center py-16 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p className="text-gray-500 font-medium">
                  Produk tidak ditemukan
                </p>
              </div>
            ) : (
              productData.map((item) => (
                <div
                  key={item.id}
                  className="card bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:border-amber-300 transition duration-300 flex flex-col justify-between rounded-xl overflow-hidden group"
                >
                  <div className="relative overflow-hidden bg-gray-100 aspect-square">
                    <img
                      src={item.gambarUrl}
                      alt={item.nama}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    <div className="absolute top-2 left-2">
                      <span className="badge badge-sm badge-neutral shadow text-[10px] font-semibold">
                        {item.kategori}
                      </span>
                    </div>

                    <div className="absolute top-2 right-2">
                      <span
                        className={`badge badge-sm text-[10px] font-semibold ${
                          item.aktif
                            ? "badge-success text-white"
                            : "badge-error text-white"
                        }`}
                      >
                        {item.aktif ? "Ready" : "Habis"}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h2 className="font-bold text-gray-800 text-sm md:text-base line-clamp-2 mb-1 group-hover:text-amber-600 transition">
                        {item.nama}
                      </h2>

                      <p className="text-gray-500 text-xs line-clamp-2 mb-2 leading-relaxed">
                        {item.deskripsi}
                      </p>

                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-amber-400 text-xs">★</span>
                        <span className="text-xs font-semibold text-gray-700">
                          4.8
                        </span>
                        <span className="text-[10px] text-gray-400">
                          (12 terjual)
                        </span>
                      </div>

                      <div className="mb-2">
                        <span className="text-base md:text-lg font-extrabold text-amber-600">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            maximumFractionDigits: 0,
                          }).format(item.harga)}
                        </span>
                      </div>

                      <p className="text-[11px] text-gray-400 mb-4">
                        Sisa stok:{" "}
                        <span className="font-medium text-gray-600">
                          {item.stok} pcs
                        </span>
                      </p>
                    </div>

                    <button
                      disabled={!item.aktif || item.stok <= 0}
                      className={`w-full py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
                        item.aktif && item.stok > 0
                          ? "bg-amber-500 text-white hover:bg-amber-600 shadow"
                          : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {item.aktif && item.stok > 0
                        ? "+ Keranjang"
                        : "Stok Kosong"}
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
