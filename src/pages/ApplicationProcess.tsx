import React, { useState } from 'react';
import { ChevronRight, ChevronDown, FileText, Clock, CheckCircle, AlertCircle, Users, MessageSquare } from 'lucide-react';

const ApplicationProcess: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const steps = [
    {
      number: 1,
      title: 'Erstberatung',
      description: 'Kostenlose telefonische oder persönliche Beratung',
      duration: '1-2 Tage',
      details: [
        'Bedarfsanalyse durchführen',
        'Passende Unterstützungsform finden',
        'Erste Fragen klären',
        'Weiteres Vorgehen besprechen'
      ]
    },
    {
      number: 2,
      title: 'Antragstellung',
      description: 'Gemeinsame Vorbereitung und Einreichung der Anträge',
      duration: '1-2 Wochen',
      details: [
        'Alle erforderlichen Dokumente sammeln',
        'Anträge korrekt ausfüllen',
        'Bei Behörden einreichen',
        'Bestätigung der Antragsannahme'
      ]
    },
    {
      number: 3,
      title: 'Begutachtung',
      description: 'Prüfung durch zuständige Behörden',
      duration: '4-8 Wochen',
      details: [
        'Medizinische Begutachtung',
        'Pädagogische Bedarfsfeststellung',
        'Kostenkalkulation erstellen',
        'Entscheidung durch Bewilligungsbehörde'
      ]
    },
    {
      number: 4,
      title: 'Bewilligung',
      description: 'Genehmigung und Zuweisung der Unterstützung',
      duration: '1-2 Wochen',
      details: [
        'Bewilligungsbescheid erhalten',
        'Stundenumfang festlegen',
        'Betreuungsperson zuweisen',
        'Starttermin vereinbaren'
      ]
    },
    {
      number: 5,
      title: 'Betreuungsbeginn',
      description: 'Start der individuellen Unterstützung',
      duration: 'Sofort',
      details: [
        'Kennenlerntermin organisieren',
        'Betreuungsplan erstellen',
        'Erste Betreuungseinheiten',
        'Regelmäßige Evaluierung'
      ]
    }
  ];

  const documents = [
    {
      category: 'Medizinische Unterlagen',
      items: [
        'Aktueller Arztbericht',
        'Diagnosebestätigung',
        'Therapieberichte (falls vorhanden)',
        'Entwicklungsberichte'
      ]
    },
    {
      category: 'Persönliche Dokumente',
      items: [
        'Personalausweis/Reisepass',
        'Geburtsurkunde des Kindes',
        'Meldebescheinigung',
        'Einkommensnachweise'
      ]
    },
    {
      category: 'Bildungseinrichtung',
      items: [
        'Bestätigung der Kindergarten-/Schulanmeldung',
        'Pädagogische Stellungnahme',
        'Förderplan (falls vorhanden)',
        'Bisherige Unterstützungsmaßnahmen'
      ]
    }
  ];

  const timeline = [
    { week: '1-2', activity: 'Erstberatung und Bedarfsermittlung' },
    { week: '3-4', activity: 'Dokumentensammlung und Antragstellung' },
    { week: '5-12', activity: 'Behördliche Prüfung und Begutachtung' },
    { week: '13-14', activity: 'Bewilligungsverfahren' },
    { week: '15', activity: 'Betreuungsbeginn' }
  ];

  const faqs = [
    {
      question: 'Wie lange dauert das gesamte Antragsverfahren?',
      answer: 'Das komplette Verfahren dauert in der Regel 3-4 Monate. Wir unterstützen Sie bei jedem Schritt und sorgen für eine zügige Bearbeitung.'
    },
    {
      question: 'Welche Kosten entstehen für die Familie?',
      answer: 'Die Unterstützungsleistungen werden vollständig vom Sozialamt oder der Krankenkasse übernommen. Für Familien entstehen keine direkten Kosten.'
    },
    {
      question: 'Kann die Betreuung auch kurzfristig starten?',
      answer: 'In Notfällen können wir eine vorläufige Betreuung organisieren, während der Antrag bearbeitet wird. Sprechen Sie uns darauf an.'
    },
    {
      question: 'Was passiert, wenn der Antrag abgelehnt wird?',
      answer: 'Wir unterstützen Sie beim Widerspruchsverfahren und suchen gemeinsam nach alternativen Lösungen. Eine Ablehnung ist selten bei korrekt gestellten Anträgen.'
    },
    {
      question: 'Können wir die Betreuungsperson selbst auswählen?',
      answer: 'Ja, wir berücksichtigen Ihre Wünsche bei der Auswahl der Betreuungsperson und organisieren ein Kennenlerntermin vor Betreuungsbeginn.'
    },
    {
      question: 'Wie flexibel sind die Betreuungszeiten?',
      answer: 'Die Betreuungszeiten orientieren sich an den Kindergarten- oder Schulzeiten. Zusätzliche Zeiten können nach Absprache und Bewilligung eingerichtet werden.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Antragsverfahren
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Wir begleiten Sie Schritt für Schritt durch das gesamte Antragsverfahren. 
            Von der ersten Beratung bis zum Betreuungsbeginn stehen wir Ihnen zur Seite.
          </p>
        </div>

        {/* Process Steps */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            5 Schritte zu Ihrer Unterstützung
          </h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-16 bg-gray-300 dark:bg-gray-600"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  
                  <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {step.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Required Documents */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Erforderliche Dokumente
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="h-6 w-6 text-gray-900 dark:text-white" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {doc.category}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {doc.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Wichtiger Hinweis
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Nicht alle Dokumente müssen von Anfang an vorliegen. Wir helfen Ihnen bei der Beschaffung 
                  fehlender Unterlagen und unterstützen Sie bei der korrekten Zusammenstellung aller erforderlichen Dokumente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Zeitplan Übersicht
          </h2>
          
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center space-x-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex-shrink-0 w-16 text-center">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Woche {item.week}
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  <div className="flex-1">
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.activity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Häufig gestellte Fragen
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 transition-colors duration-200"
                  aria-expanded={openFAQ === index}
                >
                  <span className="font-medium text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  {openFAQ === index ? (
                    <ChevronDown className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" aria-hidden="true" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ApplicationProcess;