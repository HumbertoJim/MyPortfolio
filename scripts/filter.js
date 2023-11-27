function filterProjects() {
    var input, filter, projects, project, title, description, dates, languages, i, txtValue;
    input = document.getElementById('filter-input');
    filter = input.value.toUpperCase();
    projects = document.querySelectorAll('.project');

    for (i = 0; i < projects.length; i++) {
        project = projects[i];
        
        title = project.querySelector('.project-title');
        description = project.querySelector('.project-description');
        languages = project.querySelector('.project-languages');

        txtValue = title.textContent || title.innerText;
        txtValue += description.textContent || description.innerText;
        txtValue += languages.textContent || languages.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            project.style.display = '';
        } else {
            project.style.display = 'none';
        }
    }
}