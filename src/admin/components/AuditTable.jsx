import React, { useEffect, useState } from "react";
import api from "../../api/axiosInstance";

const AuditTable = () => {
  const [audit, setAudit] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    api.get(`/admin/stats/audit?page=${page}&size=5`)
      .then(res => {
        setAudit(res.data.content);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });

  }, [page]);

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <i className="fa fa-spinner fa-spin text-2xl text-black"></i>
        <span className="ml-3 text-gray-600 font-medium">Loading audit log...</span>
      </div>
    );
  }

  if (audit.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 font-medium">
        No audit records found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              User ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Admin ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Action
            </th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Reason
            </th>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {audit.map(a => (
            <tr key={a.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm font-mono text-black">
                {a.userId}
              </td>
              <td className="px-4 py-3 text-sm font-mono text-black">
                {a.adminId}
              </td>
              <td className="px-4 py-3 text-sm">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                  a.action === 'block'
                    ? 'bg-gray-200 text-gray-700 border-gray-300'
                    : 'bg-gray-100 text-black border-gray-300'
                }`}>
                  {a.action}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700 max-w-xs truncate">
                {a.reason}
              </td>
              <td className="px-4 py-3 text-sm text-gray-500 whitespace-nowrap">
                {formatTime(a.timestamp)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
        <button
          disabled={page === 0}
          onClick={() => setPage(prev => prev - 1)}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors border ${
            page === 0
              ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
              : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-black"
          }`}
        >
          <i className="fa fa-chevron-left mr-1"></i> Prev
        </button>
        <span className="text-sm font-medium text-gray-600">
          Page {page + 1} of {totalPages}
        </span>
        <button
          disabled={page + 1 === totalPages}
          onClick={() => setPage(prev => prev + 1)}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-colors border ${
            page + 1 === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
              : "bg-white text-black border-gray-300 hover:bg-gray-100 hover:border-black"
          }`}
        >
          Next <i className="fa fa-chevron-right ml-1"></i>
        </button>
      </div>
    </div>
  );
};

export default AuditTable;