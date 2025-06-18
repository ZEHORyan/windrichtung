import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const Home: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Individuelle Betreuung',
      description: 'Maßgeschneiderte Unterstützung für jedes Kind basierend auf seinen einzigartigen Bedürfnissen.'
    },
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Qualifizierte Fachkräfte mit langjähriger Erfahrung in der Behindertenbetreuung.'
    },
    {
      icon: BookOpen,
      title: 'Bildungsförderung',
      description: 'Unterstützung bei der schulischen und persönlichen Entwicklung in inklusiven Umgebungen.'
    },
    {
      icon: Shield,
      title: 'Rechtssicherheit',
      description: 'Professionelle Beratung zu Rechten und Ansprüchen nach aktueller Gesetzeslage.'
    }
  ];

  const trustIndicators = [
    'Über 10 Jahre Erfahrung',
    'Mehr als 500 betreute Kinder',
    'Zertifizierte Fachkräfte',
    'Vollständige Kostenübernahme möglich'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Windrichtung
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Professionelle Unterstützung für Menschen mit Behinderungen in Kindergarten und Schule
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              Wir setzen uns für Inklusion ein und bieten individuelle Förderung, 
              damit jedes Kind sein volles Potenzial entfalten kann.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 group shadow-lg hover:shadow-xl"
              >
                Unsere Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-700 dark:text-primary-300 bg-white dark:bg-gray-800 border-2 border-primary-300 dark:border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Warum Windrichtung?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Wir bieten umfassende Unterstützung für Menschen mit Behinderungen und ihre Familien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group hover:bg-primary-50 dark:hover:bg-primary-900/20 p-6 rounded-lg transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-200">
                  <benefit.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Vertrauen durch Erfahrung
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Unsere Erfolgsgeschichte spricht für sich.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex items-center justify-center space-x-3 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CheckCircle className="h-6 w-6 text-primary-600 dark:text-primary-400 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-900 dark:text-white font-medium">
                  {indicator}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Kontaktieren Sie uns für eine kostenlose Erstberatung. 
            Wir besprechen gemeinsam, wie wir Ihnen und Ihrem Kind helfen können.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/application"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 focus:bg-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 group shadow-lg hover:shadow-xl"
            >
              Antragsverfahren
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-primary-700 dark:text-primary-300 bg-white dark:bg-gray-800 border-2 border-primary-300 dark:border-primary-600 rounded-md hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Beratung vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;