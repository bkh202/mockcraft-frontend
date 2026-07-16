export default function FileUploadSection({
  file,
  setFile,
  loading,
  isParsing,
  uploadProgress,
  resumeId,
  onUpload,
  onParse,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="space-y-2">
        <label className="block text-base font-bold text-black">Resume (PDF or DOCX)</label>
        <div
          className={`
            relative border-2 border-dashed rounded-xl p-6 transition-all
            ${file ? "border-black bg-gray-50" : "border-gray-300 hover:border-black hover:bg-gray-50"}
          `}
        >
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="text-center">
            <i className={`fa fa-cloud-upload-alt text-3xl mb-2 ${file ? "text-black" : "text-gray-400"}`}></i>
            {file ? (
              <p className="text-base font-medium text-black flex items-center justify-center gap-2">
                <i className="fa fa-check-circle text-black"></i>
                {file.name}
              </p>
            ) : (
              <>
                <p className="text-base font-medium text-gray-700">Drag & drop or click</p>
                <p className="text-sm text-gray-500 mt-1">PDF, DOCX up to 10MB</p>
              </>
            )}
          </div>
        </div>
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-black h-1.5 rounded-full transition-all" style={{ width: `${uploadProgress}%` }} />
          </div>
        )}
      </div>

      <div className="flex flex-col justify-end gap-3">
        <button
          onClick={onUpload}
          disabled={loading || !file || isParsing}
          className={`
            flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-base transition-all
            ${!file || loading || isParsing
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 shadow-sm"
            }
          `}
        >
          {loading && uploadProgress > 0 ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-cloud-upload-alt"></i>}
          Upload
        </button>

        <button
          onClick={onParse}
          disabled={!resumeId || loading || isParsing}
          className={`
            flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-base transition-all
            ${!resumeId || loading || isParsing
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-800 shadow-sm"
            }
          `}
        >
          {isParsing ? <i className="fa fa-spinner fa-spin"></i> : <i className="fa fa-file-alt"></i>}
          {isParsing ? "Parsing..." : "Parse Resume"}
        </button>
      </div>
    </div>
  );
}