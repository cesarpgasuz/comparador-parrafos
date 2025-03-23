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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
    <h1 className="text-2xl font-bold mb-4">Comparador de Párrafos</h1>

    <textarea
      className="w-full max-w-md p-3 border rounded mb-4"
      rows="5"
      placeholder="Ingrese el párrafo 1"
      value={parrafo1}
      onChange={(e) => setParrafo1(e.target.value)}
    ></textarea>

    <textarea
      className="w-full max-w-md p-3 border rounded mb-4"
      rows="5"
      placeholder="Ingrese el párrafo 2"
      value={parrafo2}
      onChange={(e) => setParrafo2(e.target.value)}
    ></textarea>

    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={compararParrafos}
    >
      Comparar
    </button>

    {noRepetidas.length > 0 && (
      <div className="mt-6 w-full max-w-md p-4 bg-white border rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Palabras no repetidas:</h2>
        <p className="text-gray-700">{noRepetidas.join(", ")}</p>
      </div>
    )}
  </div>
  )
}

export default App
