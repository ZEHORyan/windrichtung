import React from 'react';
import { Users, BookOpen, Heart, Puzzle, Paintbrush, Music, Activity, MessageSquare } from 'lucide-react';

const Services: React.FC = () => {
  const kindergartenServices = [
    {
      icon: Heart,
      title: 'Persönliche Assistenz',
      description: 'Individuelle 1:1 Betreuung für Kinder mit besonderen Bedürfnissen'
    },
    {
      icon: Users,
      title: 'Soziale Integration',
      description: 'Unterstützung beim Aufbau von Freundschaften und sozialen Fähigkeiten'
    },
    {
      icon: Puzzle,
      title: 'Entwicklungsförderung',
      description: 'Gezielte Förderung kognitiver und motorischer Fähigkeiten'
    },
    {
      icon: MessageSquare,
      title: 'Kommunikationshilfen',
      description: 'Unterstützung bei der Sprach- und Kommunikationsentwicklung'
    },
    {
      icon: Paintbrush,
      title: 'Kreative Förderung',
      description: 'Kunsttherapie und kreative Aktivitäten zur Selbstentfaltung'
    },
    {
      icon: Activity,
      title: 'Bewegungstherapie',
      description: 'Physiotherapeutische Unterstützung und Bewegungsförderung'
    }
  ];

  const schoolServices = [
    {
      icon: BookOpen,
      title: 'Schulbegleitung',
      description: 'Kontinuierliche Unterstützung im Schulalltag und bei Lernprozessen'
    },
    {
      icon: Users,
      title: 'Inklusive Bildung',
      description: 'Förderung der Teilhabe am regulären Schulunterricht'
    },
    {
      icon: MessageSquare,
      title: 'Kommunikationsunterstützung',
      description: 'Hilfe bei der Verständigung mit Lehrern und Mitschülern'
    },
    {
      icon: Puzzle,
      title: 'Lernhilfen',
      description: 'Individuelle Unterstützung bei Hausaufgaben und Prüfungen'
    },
    {
      icon: Activity,
      title: 'Pausenbegleitung',
      description: 'Unterstützung in den Pausen und bei außerschulischen Aktivitäten'
    },
    {
      icon: Heart,
      title: 'Emotionale Unterstützung',
      description: 'Hilfe bei der Bewältigung von Stress und emotionalen Herausforderungen'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Services & Unterstützung
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Wir bieten umfassende Unterstützung für Kinder mit Behinderungen in Kindergarten und Schule. 
            Unser Ziel ist es, jedem Kind die bestmögliche Teilhabe am Bildungssystem zu ermöglichen.
          </p>
        </div>

        {/* Kindergarten Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Kindergarten-Unterstützung
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Frühzeitige Förderung und Integration in der Kindertagesstätte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kindergartenServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6">
                  <service.icon className="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* School Services */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Schul-Unterstützung
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Begleitung und Förderung im schulischen Umfeld
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schoolServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg mb-6">
                  <service.icon className="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Information */}
        <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Wichtige Informationen
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Qualifikationen unserer Betreuer
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Staatlich anerkannte Heilerziehungspfleger</li>
                  <li>• Sonderpädagogen und Förderschullehrer</li>
                  <li>• Ergotherapeuten und Physiotherapeuten</li>
                  <li>• Regelmäßige Fortbildungen und Schulungen</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Kostenübernahme
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Vollständige Kostenübernahme durch Sozialamt möglich</li>
                  <li>• Unterstützung bei der Antragsstellung</li>
                  <li>• Beratung zu Finanzierungsmöglichkeiten</li>
                  <li>• Keine Vorabkosten für Familien</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;