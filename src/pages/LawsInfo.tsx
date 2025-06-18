import React from 'react';
import { BookOpen, Euro, FileText, Users, Phone, ExternalLink } from 'lucide-react';

const LawsInfo: React.FC = () => {
  const laws = [
    {
      icon: BookOpen,
      title: 'Sozialgesetzbuch IX (SGB IX)',
      description: 'Rehabilitation und Teilhabe von Menschen mit Behinderungen',
      keyPoints: [
        'Eingliederungshilfe nach § 75 ff.',
        'Teilhabe an Bildung § 75',
        'Assistenzleistungen § 78',
        'Leistungen zur sozialen Teilhabe'
      ],
      relevantFor: 'Grundlage für Kindergarten- und Schulbegleitung'
    },
    {
      icon: Users,
      title: 'Bundesteilhabegesetz (BTHG)',
      description: 'Reform der Eingliederungshilfe seit 2017',
      keyPoints: [
        'Personenzentrierte Leistungen',
        'Mehr Selbstbestimmung',
        'Verbessertes Wunsch- und Wahlrecht',
        'Trennung von Fachleistung und Lebensunterhalt'
      ],
      relevantFor: 'Modernisierung der Teilhabeleistungen'
    },
    {
      icon: FileText,
      title: 'Behindertengleichstellungsgesetz (BGG)',
      description: 'Gleichstellung von Menschen mit Behinderungen',
      keyPoints: [
        'Barrierefreiheit in öffentlichen Bereichen',
        'Benachteiligungsverbot',
        'Recht auf Verwendung von Hilfsmitteln',
        'Schlichtungsverfahren bei Konflikten'
      ],
      relevantFor: 'Rechtliche Grundlage für Gleichstellung'
    },
    {
      icon: BookOpen,
      title: 'Schulgesetze der Länder',
      description: 'Länderspezifische Regelungen zur inklusiven Beschulung',
      keyPoints: [
        'Recht auf inklusive Beschulung',
        'Schulbegleitung als Eingliederungshilfe',
        'Förderausschüsse und Gutachten',
        'Nachteilsausgleich bei Prüfungen'
      ],
      relevantFor: 'Schulische Inklusion und Unterstützung'
    }
  ];

  const fundingOptions = [
    {
      title: 'Eingliederungshilfe (Sozialamt)',
      description: 'Hauptfinanzierungsquelle für Assistenzleistungen',
      requirements: [
        'Wesentliche Behinderung nach § 99 SGB IX',
        'Bedarf an Teilhabeleistungen',
        'Antrag beim örtlichen Sozialamt',
        'Einkommens- und Vermögensprüfung'
      ],
      coverage: 'Vollständige Kostenübernahme möglich'
    },
    {
      title: 'Krankenversicherung',
      description: 'Bei medizinisch notwendigen Leistungen',
      requirements: [
        'Ärztliche Verordnung erforderlich',
        'Medizinische Notwendigkeit nachweisen',
        'Antrag bei der Krankenkasse',
        'Genehmigung vor Leistungsbeginn'
      ],
      coverage: 'Übernahme nach Leistungskatalog'
    },
    {
      title: 'Pflegeversicherung',
      description: 'Ergänzende Leistungen bei Pflegebedürftigkeit',
      requirements: [
        'Anerkannter Pflegegrad',
        'Antrag bei der Pflegekasse',
        'Begutachtung durch MDK',
        'Kombinierbar mit anderen Leistungen'
      ],
      coverage: 'Zusätzliche Unterstützungsleistungen'
    },
    {
      title: 'Jugendamt',
      description: 'Bei erzieherischem Bedarf oder Kindeswohlgefährdung',
      requirements: [
        'Hilfe zur Erziehung nach § 27 SGB VIII',
        'Antrag beim Jugendamt',
        'Hilfeplanverfahren',
        'Regelmäßige Überprüfung'
      ],
      coverage: 'Individuelle Hilfeplanung'
    }
  ];

  const rightsOverview = [
    'Recht auf gleichberechtigte Teilhabe am Bildungssystem',
    'Anspruch auf notwendige Unterstützungsleistungen',
    'Wunsch- und Wahlrecht bei der Leistungserbringung',
    'Recht auf Beratung und Information',
    'Anspruch auf Überprüfung und Beschwerde',
    'Recht auf Selbstbestimmung und Selbstvertretung'
  ];

  const resources = [
    {
      title: 'BMAS - Teilhabe und Inklusion',
      description: 'Bundesministerium für Arbeit und Soziales',
      link: 'https://www.bmas.de',
      category: 'Behörde'
    },
    {
      title: 'Familienratgeber der Aktion Mensch',
      description: 'Umfassendes Informationsportal für Menschen mit Behinderung',
      link: 'https://www.familienratgeber.de',
      category: 'Information'
    },
    {
      title: 'EUTB - Teilhabeberatung',
      description: 'Ergänzende unabhängige Teilhabeberatung',
      link: 'https://www.teilhabeberatung.de',
      category: 'Beratung'
    },
    {
      title: 'Integrationsämter',
      description: 'Beratung und Unterstützung bei der Teilhabe am Arbeitsleben',
      link: '#',
      category: 'Behörde'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Gesetze & Informationen
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Informieren Sie sich über die rechtlichen Grundlagen und Finanzierungsmöglichkeiten 
            für Unterstützungsleistungen. Wir erklären Ihnen die wichtigsten Gesetze und Ihre Rechte.
          </p>
        </div>

        {/* Laws Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Wichtige Gesetze
          </h2>
          
          <div className="space-y-6">
            {laws.map((law, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <law.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {law.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {law.description}
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Wichtige Regelungen:
                        </h4>
                        <ul className="space-y-1">
                          {law.keyPoints.map((point, idx) => (
                            <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                              <span className="text-green-500 mr-2">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                          Relevanz für Sie:
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {law.relevantFor}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Funding Options */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Finanzierungsmöglichkeiten
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fundingOptions.map((option, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <Euro className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {option.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {option.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Voraussetzungen:
                  </h4>
                  <ul className="space-y-1">
                    {option.requirements.map((req, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    {option.coverage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Rights Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Ihre Rechte im Überblick
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rightsOverview.map((right, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700 dark:text-gray-300">{right}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-blue-900 dark:text-blue-100 font-medium">
                    Beratung zu Ihren Rechten
                  </p>
                  <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
                    Unsere Experten informieren Sie kostenlos über Ihre Ansprüche und unterstützen 
                    Sie bei der Durchsetzung Ihrer Rechte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Weiterführende Informationen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {resource.title}
                  </h3>
                  <span className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded">
                    {resource.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {resource.description}
                </p>
                
                <a
                  href={resource.link}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm focus:outline-none focus:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website besuchen
                  <ExternalLink className="w-4 h-4 ml-1" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default LawsInfo;