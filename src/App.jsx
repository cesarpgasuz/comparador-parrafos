import { useState } from "react";

function App() {
  const [parrafo1, setParrafo1] = useState("");
  const [parrafo2, setParrafo2] = useState("");
  const [noRepetidas, setNoRepetidas] = useState([]);

  const compararParrafos = () => {
    const palabras1 = new Set(parrafo1.split(",").map(p => p.trim()));
    const palabras2 = new Set(parrafo2.split(",").map(p => p.trim()));

    const unicas1 = [...palabras1].filter(palabra => !palabras2.has(palabra));
    const unicas2 = [...palabras2].filter(palabra => !palabras1.has(palabra));

    setNoRepetidas([...unicas1, ...unicas2]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-light mb-8 text-gray-800">Comparador de Párrafos</h1>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl mb-6">
        <textarea
          className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows="8"
          placeholder="Ingrese el párrafo 1"
          value={parrafo1}
          onChange={(e) => setParrafo1(e.target.value)}
        ></textarea>

        <textarea
          className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows="8"
          placeholder="Ingrese el párrafo 2"
          value={parrafo2}
          onChange={(e) => setParrafo2(e.target.value)}
        ></textarea>
      </div>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 mb-8"
        onClick={compararParrafos}
      >
        Comparar
      </button>

      {noRepetidas.length > 0 && (
        <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-xl font-medium mb-4 text-gray-800">Palabras no repetidas:</h2>
          <p className="text-gray-700 leading-relaxed">{noRepetidas.join(", ")}</p>
        </div>
      )}
    </div>
  )
}

export default App
