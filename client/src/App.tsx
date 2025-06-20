import React from 'react';
import { Router, Route, Switch } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

// Pages
import HomePage from '@/pages/HomePage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import AssistantPage from '@/pages/AssistantPage';
import AdminPage from '@/pages/AdminPage';
import FamilyPacksPage from '@/pages/FamilyPacksPage';
import AcademiesPage from '@/pages/AcademiesPage';

// Components
import { AuthProvider } from '@/contexts/AuthContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <AuthProvider>
          <Router>
            <div className="min-h-screen bg-background">
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/family-packs" component={FamilyPacksPage} />
                <Route path="/academies" component={AcademiesPage} />
                
                <ProtectedRoute path="/dashboard" component={DashboardPage} />
                <ProtectedRoute path="/assistant/:id" component={AssistantPage} />
                <ProtectedRoute path="/admin" component={AdminPage} requiredRole="admin" />
                
                <Route>
                  <div className="flex items-center justify-center min-h-screen">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
                      <p className="text-gray-600">Página no encontrada</p>
                    </div>
                  </div>
                </Route>
              </Switch>
            </div>
          </Router>
          <Toaster />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;