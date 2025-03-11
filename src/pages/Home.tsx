import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const {isAuthenticated} = useAuth()
  return (
    <div className=" bg-gray-100 dark:bg-gray-900">
      {/* Hero Section */}
      <header className="bg-blue-600 dark:bg-red-800 text-white text-center py-16 px-6">
        <h1 className="text-5xl font-extrabold">Bienvenido a la liga de aventureros</h1>
        <p className="mt-4 text-lg">
        El portal definitivo para gestionar y personalizar tus personajes de rol., con una interfaz intuitiva y un diseño pensado para jugadores de todas las experiencias. ¡Únete y da vida a tus historias épicas!        </p>
        {!isAuthenticated &&
        <Link
          to="/register"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition"
        >
          Solo para alumnos de Cebem
        </Link>
}
      </header>

      {/* Beneficios de la plataforma */}
      <section className="max-w-6xl mx-auto py-4 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          ¿Listo para las aventuras?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Descubre las ventajas de registrarte en nuestra plataforma.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Beneficio 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">🧝‍♂️ Gestiona tus personajes</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
            Crea, edita y organiza a tus héroes en un solo lugar
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">⬆️ Progresión constante</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
             Mejora a tu personaje en incontables aventuras. Ser el más fuerte no es el final, sigue viviendo aventuras.
            </p>
          </div>

          {/* Beneficio 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">🚀 Inspírate</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Contamos con una comunidad activa con buenas ideas, inspírate en tus compañeros para crear al mejor aventurero.
            </p>
          </div>
        </div>

{!isAuthenticated &&
        <Link
          to="/register"
          className="mt-10 inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          ¡Regístrate Ahora!
        </Link>
} 
      </section>
    </div>
  );
}

export default Home;
