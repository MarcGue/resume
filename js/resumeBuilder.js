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
        description: 'Durchlaufene Abteilungen/Stationen:<br>- T-Systems - Großkundenvertrieb<br>- Technischer Service<br>- Telekom Shop<br>- Projektmanagement'
    }, {
        title: 'Technischer Assistent',
        dates: '07/2010 - 02/2011',
        companyName: 'Deutsche Funkturm GmbH',
        description: 'Verwaltung von Funktürmen und deren Standorte, Bereitstellung von Bauplänen für Neu- und Ausbau von Funktürmen, sowie Datenpflege in SAP und diversen anderen EDV Programmen'
    }, {
        title: 'Software Engineer',
        dates: '02/2011 - 10/2016',
        companyName: 'Peak Solution GmbH',
        description: ''
    }, {
        title: 'Software Engineer',
        dates: '10/2016 - now',
        companyName: 'adesso AG',
        description: ''
    }],
    trainings: [{
        title: 'Geprüfter Java Entwickler in HAF',
        dates: '08/2010 - 08/2011',
        companyName: 'Hamburger Akademie für Fernstudien',
        description: 'Einführung in Java und in das Entwicklungswerkzeug (Eclipse)<br>- Java-Applikationen<br>- Java, Datenbanken und SQL<br>- Praktische Fallstudie "Applet-Programmierung"<br>- Praktische Fallstudie "Applikationsentwicklung"<br>- Praktische Fallstudie "Datenbankanbindung"'
    }, {
        title: 'Front-End Web Developer Nanodegree',
        dates: '02/2017 - now',
        companyName: 'Udacity Inc.',
        description: `Abzuschließende Projekt während des Front-End Web Developer Nanodegrees:<br>
        - Erstellen einer Portfolio Seite<br>
        - Erstellen eines Online Lebenslauf<br>
        - Erstellen eines Arcade Game Klons<br>
        - Optimisierung einer Website<br>
        - Erstellen einer Nachbarschaftskarte<br>
        - Schreiben von Tests eines Feed Readers`,
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