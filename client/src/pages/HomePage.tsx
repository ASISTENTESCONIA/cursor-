import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';

const HomePage = () => {
  const { user } = useAuth();

  const assistantCategories = [
    {
      title: "Fuerzas y Cuerpos de Seguridad",
      description: "Preparación especializada para Guardia Civil, Policía Nacional, Policía Local",
      count: 15,
      color: "bg-blue-500"
    },
    {
      title: "Sanidad",
      description: "Asistentes para Enfermería, Celador, Auxiliar de Enfermería",
      count: 12,
      color: "bg-green-500"
    },
    {
      title: "Educación",
      description: "Preparación para Maestros, Profesores, Personal de Apoyo",
      count: 18,
      color: "bg-purple-500"
    },
    {
      title: "Administración",
      description: "Auxiliar Administrativo, Técnico Superior, Gestión",
      count: 25,
      color: "bg-orange-500"
    },
    {
      title: "Idiomas",
      description: "Asistentes especializados en preparación de idiomas",
      count: 8,
      color: "bg-pink-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">OposicionesIA</h1>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="outline">Dashboard</Button>
                  </Link>
                  <Badge variant="secondary">{user.username}</Badge>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="outline">Iniciar Sesión</Button>
                  </Link>
                  <Link href="/register">
                    <Button>Registrarse</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Prepara tus Oposiciones con IA
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Asistentes de inteligencia artificial especializados en cada área de oposiciones. 
            Estudia de forma personalizada y eficiente.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Comenzar Gratis
              </Button>
            </Link>
            <Link href="/family-packs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Ver Packs Familiares
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Asistentes Especializados por Área
            </h2>
            <p className="text-lg text-gray-600">
              Más de 115 asistentes de IA especializados en diferentes oposiciones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assistantCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{category.count} asistentes</Badge>
                    <Button variant="outline" size="sm">Ver Asistentes</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir OposicionesIA?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">IA Especializada</h3>
              <p className="text-gray-600">
                Cada asistente está entrenado específicamente para su área de oposición
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contenido Actualizado</h3>
              <p className="text-gray-600">
                Tests, flashcards y material de estudio siempre actualizado
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Packs Familiares</h3>
              <p className="text-gray-600">
                Descuentos especiales para familias y grupos de estudio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">OposicionesIA</h3>
              <p className="text-gray-400">
                La plataforma más avanzada para preparar tus oposiciones con inteligencia artificial.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/assistants">Asistentes IA</Link></li>
                <li><Link href="/family-packs">Packs Familiares</Link></li>
                <li><Link href="/academies">Academias</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#">Centro de Ayuda</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#">Términos de Uso</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 OposicionesIA. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;