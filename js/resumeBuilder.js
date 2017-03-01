var HTMLworkArticle = '<article class="p-3"><h3>%workTitle%</h3><h5 class="text-muted">%workDates%</h5><h6 class="text-muted mb-4">%workCompanyName%</h6><p>%workDescription%</p></article>';
var HTMLeducationArticle = '<article class="p-3"><h3>%educationTitle%</h3><h5 class="text-muted">%educationDates%</h5><h6 class="text-muted mb-4">%educationCompanyName%</h6><p>%educationDescription%</p></article>';

var resume = {
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
        description: 'Einführung in Java und in das Entwicklungswerkzeug (Eclipse)<br>Java-Applikationen<br>Java, Datenbanken und SQL<br>Praktische Fallstudie "Applet-Programmierung"<br>Praktische Fallstudie "Applikationsentwicklung"<br>Praktische Fallstudie "Datenbankanbindung"'
    }, {
        title: 'Front-End Web Developer Nanodegree',
        dates: '02/2017 - now',
        companyName: 'Udacity Inc.',
        description: ''
    }],
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
        resume.trainings.forEach(function(training){
            var formattedEducationArticle = HTMLeducationArticle.replace('%educationTitle%', training.title);
            formattedEducationArticle = formattedEducationArticle.replace('%educationDates%', training.dates);
            formattedEducationArticle = formattedEducationArticle.replace('%educationCompanyName%', training.companyName);
            formattedEducationArticle = formattedEducationArticle.replace('%educationDescription%', training.description);
            $('#education h2').after(formattedEducationArticle);
        });
    }
};

resume.displayWork();
resume.displayEducation();