var HTMLworkArticle = `<article class="p-3">
                            <h3>%workTitle%</h3>
                            <h5 class="text-muted">%workDates%</h5>
                            <h6 class="text-muted mb-4">%workCompanyName%</h6>
                            <p>%workDescription%</p>
                       </article>`;

var HTMLeducationArticle = `<article class="p-3">
                                <h3>%educationTitle%</h3>
                                <h5 class="text-muted">%educationDates%</h5>
                                <h6 class="text-muted mb-4">%educationCompanyName%</h6>
                                <p>%educationDescription%</p>
                            </article>`;

var HTMLarticle = `<article class="p-3"></article>`;

var HTMLbadge = `<span class="badge badge-default m-1 p-2">%data%</span>`;

var resume = {
    profile: `Ich bin ein versierter Softwareentwickler mit mehr als sechs Jahren Berufserfahrung in verschiedenen Themengebieten. 
                Meine Schwerpunkte liegen in der Entwicklung von Softwaresystemen mit den gängigen Sprachen Java, sowie Javascript.
                <br><br>Meine Arbeitsweise ist gekennzeichnet durch Effizienz, Selbständigkeit und Sorgfalt, 
                aber auch durch ein hohes Maß an Verantwortungsbewusstsein und Zuverlässigkeit. 
                Gutes Analyse - und Urteilsvermögen gehören ebenso zu meinem Qualifikationsprofil wie Kreativität und Flexibilität.`,
    jobs: [{
        title: 'Ausbildung zum IT-Systemkaufmann',
        dates: '09/2007 - 07/2010',
        companyName: 'Deutsche Telekom AG',
        description: `
        <p>
            Bei der Deutschen Telekom AG absolivierte ich meine Ausbildung zum IT-Systemkaufmann. Durch mehrere halbjährliche Einsätze in den folgenden Resorts konnte unterschiedliche Erfahrungen aus der Praxis sammeln:
        </p>
        <ul>
            <li>T-Systems - Assistent im Großkundenvertrieb</li>
            <li>Technischer Service - Anschlussschaltung und Fehlerbehandlung</li>
            <li>Telekom Shop - Vertrieb direkt am Kunden</li>
            <li>Projektmanagement - Aufsetzen und befüllen eines internen Wikipedias</li>
        </ul>`
    }, {
        title: 'Technischer Assistent',
        dates: '07/2010 - 02/2011',
        companyName: 'Deutsche Funkturm GmbH',
        description: `
        <p>
            Bei der Deutschen Funkturm GmbH habe ich als technischer Assistent im Rahmen meiner Tätigkeit folgende Aufgaben ausgeführt:
        </p>
        <ul>
            <li>Verwaltung von Funktürmen und deren Standorte</li>
            <li>Bereitstellung von Bauplänen für Neu- und Ausbau von Funktürmen</li>
            <li>Datenpflege in SAP und diversen anderen EDV Programmen</li>
        </ul>`
    }, {
        title: 'Software Engineer',
        dates: '02/2011 - 10/2016',
        companyName: 'Peak Solution GmbH',
        description: `
        <p>
            Bei der Peak Solution GmbH war ich als Software Engineer im Geschäftsbereich Versuchs- und Messdatenmanagement tätig. Im Rahmen meiner Tätigkeit für die Kunden führte ich folgende Aufgaben aus:
        </p>
        <ul>
            <li>Unterstützung beim Erstellen von Fachkonzepten und Softwarespezifiktaionen</li>
            <li>Implementierung von Softwarelösungen für Messdatenmanagement und Versuchsteileverwaltung mit Java, Eclipse RCP, OSGi, Hibernate, Spring, Swing, JavaEE, Vaadin, etc.</li>
            <li>Erstellen von Testkonzepten und Durchführen von Tests</li>
            <li>Inbetriebnahme von Lösungen</li>
            <li>Fehlerbeseitigung und Problembehandlung innerhalb von Softwarelösungen</li>
        </ul>`
    }, {
        title: 'Senior Software Engineer',
        dates: '10/2016 - now',
        companyName: 'adesso AG',
        description: `
        <p>
            Bei der adesso AG bin ich aktuell als Consultant in unterschiedlichen Projekten tätig. Im Rahmen dieser Tätigkeit habe ich bisher folgende Projekte umgesetzt: 
        </p>
        <ul>
            <li>Implementierung einer Softwarelösung zum Verwalten und Vertreiben von Mietwagen mit J2EE, AngularJS, Javascript, Typo3, Docker, etc.</li>
            <li>Implementierung eines Callcenter Clients mit dessen Hilfe eine Bank ihre telefonischen Kunden betreut. (Spring, Apache Wicket)</li>
        </ul>`
        
    }],
    trainings: [{
        title: 'Geprüfter Java Entwickler in HAF',
        dates: '08/2010 - 08/2011',
        companyName: 'Hamburger Akademie für Fernstudien',
        description: `
        <ul>
            <li>Einführung in Java und in das Entwicklungswerkzeug (Eclipse)</li>
            <li>Java-Applikationen</li>
            <li>Java, Datenbanken und SQL</li>
            <li>Praktische Fallstudie "Applet-Programmierung"</li>
            <li>Praktische Fallstudie "Applikationsentwicklung"</li>
            <li>Praktische Fallstudie "Datenbankanbindung"</li>
        </ul>`
    }, {
        title: 'Front-End Web Developer Nanodegree',
        dates: '02/2017 - 05/2017',
        companyName: 'Udacity Inc.',
        description: `
        <p>Abzuschließende Projekte des Nanodegrees:</p>
        <ul>
            <li>Erstellen einer Portfolio Seite</li>
            <li>Erstellen eines Online Lebenslauf</li>
            <li>Erstellen eines Arcade Game Klons</li>
            <li>Optimisierung einer Website</li>
            <li>Erstellen einer Nachbarschaftskarte</li>
            <li>Schreiben von Tests eines Feed Readers</li>
        </ul>`,
        description_en: 'Become a Front-End Web Developer by completing a variety of projects:<br>- Build a Portfolio Site<br>- Online Resume<br>- Classic Arcade Game Clone<br>- Website Optimization<br>- Neighborhood Map<br>- Feed Reader Testing'
    }],
    frameworks: [
        'Spring',
        'Hibernate',
        'JUnit',
        'Angular',
        'JQuery',
        'Twitter Bootstrap'
    ],
    tools: [
        'Eclipse',
        'Visual Studio Code',
        'Xcode',
        'Maven',
        'Git',
        'Jenkins',
        'Docker',
        'Node.js',
        'Bower',
        'Grunt',
        'SVN',
        'Ant'
    ], 
    displayWork: function () {
        resume.jobs.forEach(function (job) {
            var formattedWorkArticle = HTMLworkArticle.replace('%workTitle%', job.title);
            formattedWorkArticle = formattedWorkArticle.replace('%workDates%', job.dates);
            formattedWorkArticle = formattedWorkArticle.replace('%workCompanyName%', job.companyName);
            formattedWorkArticle = formattedWorkArticle.replace('%workDescription%', job.description);
            $('#work h2').after(formattedWorkArticle);
        });
    },
    displayEducation: function () {
        resume.trainings.forEach(function (training) {
            var formattedEducationArticle = HTMLeducationArticle.replace('%educationTitle%', training.title);
            formattedEducationArticle = formattedEducationArticle.replace('%educationDates%', training.dates);
            formattedEducationArticle = formattedEducationArticle.replace('%educationCompanyName%', training.companyName);
            formattedEducationArticle = formattedEducationArticle.replace('%educationDescription%', training.description);
            $('#education h2').after(formattedEducationArticle);
        });
    },
    displayFrameworks: function () {
        $('#frameworks h2').after(HTMLarticle);
        resume.frameworks.forEach(function (framework) {
            var formattedFramework = HTMLbadge.replace('%data%', framework);
            $('#frameworks article').append(formattedFramework);
        });
    },
    displayTools: function () {
        $('#tools h2').after(HTMLarticle);
        resume.tools.forEach(function (tool) {
            var formattedTool = HTMLbadge.replace('%data%', tool);
            $('#tools article').append(formattedTool);
        });
    }
};

resume.displayWork();
resume.displayEducation();
resume.displayFrameworks();
resume.displayTools();