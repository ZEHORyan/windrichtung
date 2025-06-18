import React from 'react';
import { Scale, Users, BookOpen, Heart, Shield, Globe } from 'lucide-react';

const UNConvention: React.FC = () => {
  const keyPoints = [
    {
      icon: Users,
      title: 'Gleichberechtigung und Nichtdiskriminierung',
      article: 'Artikel 5',
      description: 'Alle Menschen mit Behinderungen haben das Recht auf Gleichberechtigung vor dem Gesetz und Schutz vor Diskriminierung.'
    },
    {
      icon: BookOpen,
      title: 'Recht auf Bildung',
      article: 'Artikel 24',
      description: 'Inklusives Bildungssystem auf allen Ebenen mit lebenslangem Lernen für Menschen mit Behinderungen.'
    },
    {
      icon: Heart,
      title: 'Achtung der Würde',
      article: 'Artikel 3',
      description: 'Achtung der dem Menschen innewohnenden Würde und seiner individuellen Autonomie.'
    },
    {
      icon: Shield,
      title: 'Schutz vor Gewalt',
      article: 'Artikel 16',
      description: 'Schutz vor jeder Form von Ausbeutung, Gewalt und Missbrauch in allen Lebensbereichen.'
    }
  ];

  const implementationExamples = [
    {
      title: 'Inklusive Bildung',
      description: 'Alle Kinder haben das Recht, gemeinsam zu lernen, unabhängig von ihren Fähigkeiten oder Behinderungen.',
      measures: [
        'Schulbegleitung und Assistenz',
        'Barrierefreie Lernmaterialien',
        'Individuelle Förderpläne',
        'Fortbildung für Lehrkräfte'
      ]
    },
    {
      title: 'Gesellschaftliche Teilhabe',
      description: 'Menschen mit Behinderungen sollen vollständig am gesellschaftlichen Leben teilhaben können.',
      measures: [
        'Barrierefreier Zugang zu öffentlichen Gebäuden',
        'Unterstützung bei der Arbeitsplatzsuche',
        'Assistenzdienste im Alltag',
        'Kulturelle und sportliche Angebote'
      ]
    },
    {
      title: 'Selbstbestimmung',
      description: 'Förderung der Autonomie und Entscheidungsfreiheit von Menschen mit Behinderungen.',
      measures: [
        'Persönliche Assistenz',
        'Unterstützte Entscheidungsfindung',
        'Wahlfreiheit bei Wohnformen',
        'Selbstvertretung und Interessenorganisationen'
      ]
    }
  ];

  const resources = [
    {
      title: 'UN-Konvention vollständiger Text',
      description: 'Offizieller Text der UN-Behindertenrechtskonvention in deutscher Sprache',
      link: '#'
    },
    {
      title: 'Monitoring-Stelle UN-BRK',
      description: 'Deutsches Institut für Menschenrechte - Überwachung der Umsetzung',
      link: '#'
    },
    {
      title: 'Aktionsplan der Bundesregierung',
      description: 'Nationaler Aktionsplan zur Umsetzung der UN-Behindertenrechtskonvention',
      link: '#'
    },
    {
      title: 'Beratungsstellen',
      description: 'Ergänzende unabhängige Teilhabeberatung (EUTB)',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            UN-Behindertenrechtskonvention
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Die UN-Konvention über die Rechte von Menschen mit Behinderungen ist ein wichtiger Baustein 
            für die Gleichberechtigung und Inklusion. Hier erfahren Sie mehr über Ihre Rechte und deren Umsetzung.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-20">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
            <div className="flex items-start space-x-4">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Was ist die UN-Behindertenrechtskonvention?
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Die UN-Konvention über die Rechte von Menschen mit Behinderungen (UN-BRK) ist ein internationales 
                  Übereinkommen, das seit 2009 in Deutschland geltendes Recht ist. Sie konkretisiert die universellen 
                  Menschenrechte für Menschen mit Behinderungen.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Die Konvention verpflichtet Deutschland dazu, die Rechte von Menschen mit Behinderungen zu achten, 
                  zu schützen und zu gewährleisten. Sie ist die Grundlage für eine inklusive Gesellschaft.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Points */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Zentrale Grundsätze
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <point.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {point.title}
                      </h3>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                        {point.article}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Implementation Examples */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Umsetzung in der Praxis
          </h2>
          
          <div className="space-y-8">
            {implementationExamples.map((example, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {example.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {example.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {example.measures.map((measure, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Relevant Articles */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Wichtige Artikel für Bildung und Betreuung
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Scale className="h-6 w-6 mr-2" aria-hidden="true" />
                Artikel 24 - Bildung
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Recht auf inklusive, hochwertige und unentgeltliche Grund- und Sekundarschulbildung</li>
                <li>• Angemessene Vorkehrungen für individuelle Bedürfnisse</li>
                <li>• Notwendige Unterstützung für effektive Bildung</li>
                <li>• Erlernen von Lebens- und sozialen Kompetenzen</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Users className="h-6 w-6 mr-2" aria-hidden="true" />
                Artikel 19 - Selbstbestimmtes Leben
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Recht auf Leben in der Gemeinschaft</li>
                <li>• Gleichberechtigte Wahlmöglichkeiten</li>
                <li>• Zugang zu gemeindenahen Unterstützungsdiensten</li>
                <li>• Verhinderung von Isolation und Aussonderung</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Weiterführende Ressourcen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {resource.description}
                </p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium focus:outline-none focus:underline"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UNConvention;