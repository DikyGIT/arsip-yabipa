import { useState, useEffect } from "react";
import { arsipYabipa } from "../arsip";

const getSemuaItems = (query, items) => {
  if (!query) {
    return arsipYabipa;
  }
  return items.filter((data) => data.path.includes(query));
};

const ArsipComponent = () => {
  const [query, setQuery] = useState("");

  const items = arsipYabipa;
  const semuaItems = getSemuaItems(query, items);

  useEffect(() => {
    console.log(items);
  });

  return (
    <div className="flex flex-col items-center justify-center sm:px-0 px-2">
      <div className="mb-4">
        <input type="text" className="border-slate-600 border-2 rounded md:w-96 w-72 h-10 ps-2" placeholder="Search Items..." onChange={(e) => setQuery(e.target.value)} />
        <p className="text-sm text-slate-400">*huruf kecil semua</p>
      </div>
      {semuaItems.length === 0 ? (
        <p className="font-bold">Dokumen Tidak Ditemukan!.</p>
      ) : (
        <>
          <table>
            <tbody>
              <tr>
                <th className="md:text-base text-sm pt-4 pb-2 md:px-4 px-2 border-b-2 border-black">No</th>
                <th className="md:text-base text-sm pt-4 pb-2 md:px-4 px-2 border-b-2 border-black">Format</th>
                <th className="md:text-base text-sm pt-4 pb-2 md:px-4 px-2 border-b-2 border-black">Dokumen</th>
                <th className="hidden"></th>
                <th className="md:text-base text-sm pt-4 pb-2 border-b-2 border-black">Fungsi</th>
              </tr>
              {semuaItems.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <td className="md:px-4 px-2 pt-6">
                      <p className="font-bold text-center">{index + 1}</p>
                    </td>
                    <td className="flex justify-center md:px-4 px-2 pt-6">
                      <img src={data.image} alt="logo" className="md:w-10 w-9" />
                    </td>
                    <td className="md:px-4 px-2 pt-6">
                      <p className="font-bold md:text-base text-sm">{data.nama}</p>
                    </td>
                    <td className="hidden">
                      <p>{data.path}</p>
                    </td>
                    <td className="md:px-4 px-2 pt-6">
                      <a href={data.link} target="_blank" className="bg-sky-600 text-white py-2 px-5 rounded" rel="noreferrer">
                        Buka
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* {semuaItems.map((data, index) => {
            return (
              <div className="flex items-center gap-10 mb-6" key={data.id}>
                <p className="font-bold">{index + 1}.</p>
                <img src={data.image} alt="Logo" className="w-10" />
                <p className="font-bold">{data.nama}</p>
                <p className="hidden">{data.path}</p>
                <a href={data.link} target="_blank" className="bg-sky-600 text-white py-2 px-5 rounded" rel="noreferrer">
                  Buka
                </a>
              </div>
            );
          })} */}
        </>
      )}
    </div>
  );
};

export default ArsipComponent;
