async function getFromGitHub() {
    try {
        const userName = 'dupontdenis';
        const url = 'https://ghibliapi.herokuapp.com/films';
        const reposResponse = await fetch(`${url}`);

        const userRepos = await reposResponse.json();

        userRepos
            .filter(film => film.director == 'Hayao Miyazaki')
            .forEach(film =>
                document
                    .querySelector("#repos")
                    .insertAdjacentHTML('afterbegin', `<li> ${film.title} </li>`))

    } catch (error) {

        console.log(error);
    }
}
getFromGitHub();