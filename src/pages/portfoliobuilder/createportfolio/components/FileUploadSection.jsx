import { CloudUpload, FileText, Loader2, CheckCircle } from "lucide-react";

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
        <label className="block text-sm font-medium text-gray-700">Resume (PDF or DOCX)</label>
        <div
          className={`
            relative border-2 border-dashed rounded-xl p-6 transition-all
            ${file ? "border-green-400 bg-green-50/50" : "border-gray-300 hover:border-blue-400 hover:bg-blue-50/30"}
          `}
        >
          <input
            type="file"
            accept=".pdf,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="text-center">
            <CloudUpload className={`mx-auto h-8 w-8 mb-2 ${file ? "text-green-500" : "text-gray-400"}`} />
            {file ? (
              <p className="text-sm font-medium text-green-600 flex items-center justify-center gap-1">
                <CheckCircle className="h-4 w-4" />
                {file.name}
              </p>
            ) : (
              <>
                <p className="text-sm font-medium text-gray-700">Drag & drop or click</p>
                <p className="text-xs text-gray-500 mt-1">PDF, DOCX up to 10MB</p>
              </>
            )}
          </div>
        </div>
        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div className="bg-blue-600 h-1.5 rounded-full transition-all" style={{ width: `${uploadProgress}%` }} />
          </div>
        )}
      </div>

      <div className="flex flex-col justify-end gap-3">
        <button
          onClick={onUpload}
          disabled={loading || !file || isParsing}
          className={`
            flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all transform
            ${!file || loading || isParsing
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            }
          `}
        >
          {loading && uploadProgress > 0 ? <Loader2 className="h-5 w-5 animate-spin" /> : <CloudUpload className="h-5 w-5" />}
          Upload
        </button>

        <button
          onClick={onParse}
          disabled={!resumeId || loading || isParsing}
          className={`
            flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-medium transition-all
            ${!resumeId || loading || isParsing
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-purple-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            }
          `}
        >
          {isParsing ? <Loader2 className="h-5 w-5 animate-spin" /> : <FileText className="h-5 w-5" />}
          {isParsing ? "Parsing..." : "Parse Resume"}
        </button>
      </div>
    </div>
  );
}