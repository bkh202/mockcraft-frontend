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

  }, [page]);   // 🔥 important


  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (loading) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-600">Loading audit log...</p>
      </div>
    );
  }

  if (audit.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No audit records found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Admin ID
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reason
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {audit.map(a => (
            <tr key={a.id} className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-900 font-mono">
                {a.userId}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 font-mono">
                {a.adminId}
              </td>
              <td className="px-4 py-3 text-sm">
                <span className={`px-2 py-1 text-xs rounded-full ${a.action === 'block' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                  {a.action}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-900">
                {a.reason}
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {formatTime(a.timestamp)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          disabled={page === 0}
          onClick={() => setPage(prev => prev - 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-sm text-gray-600">
          Page {page + 1} of {totalPages}
        </span>

        <button
          disabled={page + 1 === totalPages}
          onClick={() => setPage(prev => prev + 1)}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

    </div>
  );
};

export default AuditTable;