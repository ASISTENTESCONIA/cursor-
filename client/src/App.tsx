import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Oposiciones App
        </h1>
        <p className="text-gray-600 text-center mb-4">
          Plataforma de preparación para oposiciones con asistentes de IA especializados
        </p>
        <div className="space-y-4">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Iniciar Sesión
          </button>
          <button className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors">
            Registrarse
          </button>
        </div>
      </div>
    </div>
  )
}

export default App